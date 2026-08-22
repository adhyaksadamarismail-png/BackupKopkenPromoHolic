import sqlite3, json, os

conn = sqlite3.connect('/Users/macbook/jasdorbydy/data/jasdor.db')
c = conn.cursor()
c.execute("SELECT id, name, image, description, customization_json FROM products WHERE brand_id = 'brand_kopi_kenangan'")
rows = c.fetchall()

# Map by lowercased name or partial name for images & descriptions
db_map = {}
for r in rows:
    pid, name, image, desc, cust_json = r
    db_map[name.lower().strip()] = {
        'image': image,
        'desc': desc,
        'cust': cust_json
    }

# Specific image fallbacks if needed
default_images = {
    'kopi': 'https://i.ibb.co.com/0yQbyxDQ/Frame-1410112838.png',
    'non-kopi': 'https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png',
    'frappe': 'https://i.ibb.co.com/vxfBjc1m/Frame-1410112873.png',
    'oatside': 'https://iili.io/Cs9fKSs.jpg',
    'food': 'https://i.ibb.co.com/LdNYD0sW/Frame-1410112879.png'
}

# Define the exact source of truth catalog
raw_catalog = [
    # ☕ KOPI
    {"name": "Kopi Kenangan Mantan", "price": 14500, "category": "kopi"},
    {"name": "Americano", "price": 13500, "category": "kopi"},
    {"name": "Blueberry Americano", "price": 14500, "category": "kopi"},
    {"name": "Latte", "price": 16000, "category": "kopi"},
    {"name": "Cappuccino", "price": 16000, "category": "kopi"},
    {"name": "Vanilla Latte", "price": 18000, "category": "kopi"},
    {"name": "Hazelnut Latte", "price": 18000, "category": "kopi"},
    {"name": "Caramel Latte", "price": 18000, "category": "kopi"},
    {"name": "Caffe Malt Latte", "price": 16500, "category": "kopi"},
    {"name": "Caramel Macchiato", "price": 19000, "category": "kopi"},
    {"name": "Mocha Latte", "price": 18000, "category": "kopi"},
    {"name": "Kopi Susu Black Aren", "price": 15500, "category": "kopi"},
    {"name": "Toffee Nut Latte", "price": 14500, "category": "kopi"},
    {"name": "Toffee Nut Aren Latte", "price": 15500, "category": "kopi"},
    {"name": "Butterscotch Seasalt Latte", "price": 17500, "category": "kopi"},
    {"name": "Creamy Aren Latte", "price": 16000, "category": "kopi"},
    {"name": "Matcha Espresso", "price": 18000, "category": "kopi"},
    {"name": "Avocado Coffee", "price": 19000, "category": "kopi"},
    {"name": "Pistachio Aren Latte", "price": 14500, "category": "kopi"},
    {"name": "OG Aren Speculoos Latte", "price": 15500, "category": "kopi"},
    {"name": "Dua Shot OG Aren", "price": 17500, "category": "kopi"},

    # 🥛 NON-KOPI
    {"name": "OG Aren Milky", "price": 16500, "category": "non-kopi"},
    {"name": "OG Thai Tea", "price": 14500, "category": "non-kopi"},
    {"name": "Thai Tea Loaded", "price": 18500, "category": "non-kopi"},
    {"name": "Dutch Chocolate", "price": 18000, "category": "non-kopi"},
    {"name": "Hazelnut Dutch Chocolate", "price": 18000, "category": "non-kopi"},
    {"name": "Choco Caramel", "price": 14500, "category": "non-kopi"},
    {"name": "Mocha Caramel", "price": 18000, "category": "non-kopi"},
    {"name": "Avocado Milk", "price": 17000, "category": "non-kopi"},
    {"name": "Avocado Caramel", "price": 19000, "category": "non-kopi"},
    {"name": "Hazelnut Chocolate Milk Tea", "price": 16000, "category": "non-kopi"},
    {"name": "Milk Oreo Crumble", "price": 18000, "category": "non-kopi"},
    {"name": "Toffee Nut Chocolate Macchiato", "price": 16000, "category": "non-kopi"},
    {"name": "Susu Grass Jelly", "price": 17000, "category": "non-kopi"},
    {"name": "Babycino", "price": 14500, "category": "non-kopi"},
    {"name": "Air Mineral", "price": 9000, "category": "non-kopi"},
    {"name": "Caramel Dutch Choco", "price": 19000, "category": "non-kopi"},
    {"name": "Kenangan Milk Tea", "price": 16000, "category": "non-kopi"},
    {"name": "Milo Dino", "price": 16000, "category": "non-kopi"},
    {"name": "Oreo Shake", "price": 18000, "category": "non-kopi"},
    {"name": "Butterscotch Seasalt Crumble", "price": 16000, "category": "non-kopi"},
    {"name": "Raspberry Hibiscus", "price": 15000, "category": "non-kopi"},
    {"name": "Fresh Lemonade", "price": 13500, "category": "non-kopi"},
    {"name": "Lemon Black Tea", "price": 13500, "category": "non-kopi"},

    # 🧊 FRAPPE (Blueberry Series FIRST)
    {"name": "Blueberry Frappe", "price": 16500, "category": "frappe"},
    {"name": "Chocoberry Frappe", "price": 18500, "category": "frappe"},
    {"name": "Coffeeberry Frappe", "price": 17500, "category": "frappe"},
    {"name": "Dutch Choco Kenangan Frappe", "price": 19500, "category": "frappe"},
    {"name": "Kopi Kenangan Mantan Frappe", "price": 18500, "category": "frappe"},
    {"name": "Vanilla Kenangan Frappe", "price": 17500, "category": "frappe"},

    # 🌾 OATSIDE SERIES
    {"name": "Oatside Matcha Latte", "price": 17500, "category": "oatside"},
    {"name": "Oatside Kopi Kenangan", "price": 15500, "category": "oatside"},
    {"name": "Oatside Latte", "price": 17500, "category": "oatside"},

    # 🍞 FOOD
    {"name": "Blueberry Muffin", "price": 12000, "category": "food"},
    {"name": "Choco Muffin", "price": 12000, "category": "food"},
    {"name": "Sandwich Chicken Tartare", "price": 16000, "category": "food"},
    {"name": "Sandwich Smoked Beef", "price": 16000, "category": "food"}
]

# Process into products array
final_products = []
seen_names = set()

for idx, item in enumerate(raw_catalog, 1):
    name = item["name"]
    name_key = name.lower().strip()
    if name_key in seen_names:
        continue
    seen_names.add(name_key)

    cat = item["category"]
    price = item["price"]

    # Match image from DB if possible
    db_item = db_map.get(name_key)
    if not db_item:
        # Try fuzzy lookup
        for k, v in db_map.items():
            if name_key in k or k in name_key:
                db_item = v
                break

    image = db_item['image'] if db_item and db_item.get('image') else default_images[cat]
    desc = db_item['desc'] if db_item and db_item.get('desc') else f"{name} segar dan nikmat khas Kopi Kenangan."

    # Options flags based on category
    has_suhu = cat in ['kopi', 'non-kopi', 'oatside']
    has_ukuran = cat != 'food'
    has_es = cat != 'food'
    has_gula = cat != 'food'
    has_beans = cat == 'kopi'
    has_syrup = cat != 'food'
    has_topping = cat != 'food'

    options = {
        'suhu': [
            {'id': 'ice', 'name': 'Ice', 'price': 0},
            {'id': 'hot', 'name': 'Hot', 'price': 0}
        ] if has_suhu else [],
        'ukuran': [
            {'id': 'normal', 'name': 'Normal', 'price': 0},
            {'id': 'large', 'name': 'Large', 'price': 5000}
        ] if has_ukuran else [],
        'es': [
            {'id': 'normal-ice', 'name': 'Normal', 'price': 0},
            {'id': 'less-ice', 'name': 'Less Ice', 'price': 0},
            {'id': 'no-ice', 'name': 'No Ice', 'price': 0}
        ] if has_es else [],
        'gula': [
            {'id': 'normal-sugar', 'name': 'Normal', 'price': 0},
            {'id': 'less-sugar', 'name': 'Less Sugar', 'price': 0},
            {'id': 'no-sugar', 'name': 'No Sugar', 'price': 0}
        ] if has_gula else [],
        'beans': [
            {'id': 'kenangan-blend', 'name': 'Kenangan Blend', 'price': 0},
            {'id': 'juwara-beans', 'name': 'Juwara Beans', 'price': 3000}
        ] if has_beans else [],
        'syrup': [
            {'id': 'vanilla-syrup', 'name': 'Vanilla Syrup', 'price': 6000},
            {'id': 'hazelnut-syrup', 'name': 'Hazelnut Syrup', 'price': 6000},
            {'id': 'caramel-syrup', 'name': 'Caramel Syrup', 'price': 6000},
            {'id': 'salted-caramel', 'name': 'Salted Caramel Sauce', 'price': 6000},
            {'id': 'choco-sauce', 'name': 'Choco Sauce', 'price': 6000},
            {'id': 'butterscotch', 'name': 'Butterscotch Sauce', 'price': 6000}
        ] if has_syrup else [],
        'topping': [
            {'id': 'shot-kenangan', 'name': 'Espresso Shot Kenangan Blend', 'price': 6000},
            {'id': 'shot-juwara', 'name': 'Espresso Shot Juwara Beans', 'price': 6000},
            {'id': 'golden-boba', 'name': 'Golden Boba', 'price': 6000},
            {'id': 'grass-jelly', 'name': 'Grass Jelly', 'price': 6000},
            {'id': 'oreo', 'name': 'Oreo', 'price': 6000},
            {'id': 'whipped-choco', 'name': 'Whipped Cream Chocolate', 'price': 6000},
            {'id': 'whipped-vanilla', 'name': 'Whipped Cream Vanilla', 'price': 6000},
            {'id': 'caramel-crumble', 'name': 'Caramel Crumble', 'price': 6000},
            {'id': 'gula-aren', 'name': 'Gula Aren', 'price': 6000}
        ] if has_topping else []
    }

    is_best_seller = name in [
        'Kopi Kenangan Mantan', 'Spanish Latte', 'Butterscotch Seasalt Latte', 
        'Creamy Aren Latte', 'Matcha Espresso', 'Oatside Matcha Latte', 'Blueberry Frappe'
    ]

    original_price = int(price * 1.35)

    final_products.append({
        'id': f'kk_prod_{idx}',
        'name': name,
        'category': cat,
        'price': price,
        'originalPrice': original_price,
        'image': image,
        'description': desc,
        'isBestSeller': is_best_seller,
        'options': options
    })

print(f"Total Source of Truth products: {len(final_products)}")

js_code = f"""// SOURCE OF TRUTH DATASET KOPI KENANGAN (Menu Satuan)

export const productCategories = [
  {{ id: 'kopi', name: 'Kopi' }},
  {{ id: 'non-kopi', name: 'Non-Kopi' }},
  {{ id: 'frappe', name: 'Frappe' }},
  {{ id: 'oatside', name: 'Oatside Series' }},
  {{ id: 'food', name: 'Food' }}
];

export const defaultOptions = {{
  suhu: [
    {{ id: "ice", name: "Ice", price: 0 }},
    {{ id: "hot", name: "Hot", price: 0 }}
  ],
  ukuran: [
    {{ id: "normal", name: "Normal", price: 0 }},
    {{ id: "large", name: "Large", price: 5000 }}
  ],
  es: [
    {{ id: "normal-ice", name: "Normal", price: 0 }},
    {{ id: "less-ice", name: "Less Ice", price: 0 }},
    {{ id: "no-ice", name: "No Ice", price: 0 }}
  ],
  gula: [
    {{ id: "normal-sugar", name: "Normal", price: 0 }},
    {{ id: "less-sugar", name: "Less Sugar", price: 0 }},
    {{ id: "no-sugar", name: "No Sugar", price: 0 }}
  ],
  beans: [
    {{ id: "kenangan-blend", name: "Kenangan Blend", price: 0 }},
    {{ id: "juwara-beans", name: "Juwara Beans", price: 3000 }}
  ],
  syrup: [
    {{ id: "vanilla-syrup", name: "Vanilla Syrup", price: 6000 }},
    {{ id: "hazelnut-syrup", name: "Hazelnut Syrup", price: 6000 }},
    {{ id: "caramel-syrup", name: "Caramel Syrup", price: 6000 }},
    {{ id: "salted-caramel", name: "Salted Caramel Sauce", price: 6000 }},
    {{ id: "choco-sauce", name: "Choco Sauce", price: 6000 }},
    {{ id: "butterscotch", name: "Butterscotch Sauce", price: 6000 }}
  ],
  topping: [
    {{ id: "shot-kenangan", name: "Espresso Shot Kenangan Blend", price: 6000 }},
    {{ id: "shot-juwara", name: "Espresso Shot Juwara Beans", price: 6000 }},
    {{ id: "golden-boba", name: "Golden Boba", price: 6000 }},
    {{ id: "grass-jelly", name: "Grass Jelly", price: 6000 }},
    {{ id: "oreo", name: "Oreo", price: 6000 }},
    {{ id: "whipped-choco", name: "Whipped Cream Chocolate", price: 6000 }},
    {{ id: "whipped-vanilla", name: "Whipped Cream Vanilla", price: 6000 }},
    {{ id: "caramel-crumble", name: "Caramel Crumble", price: 6000 }},
    {{ id: "gula-aren", name: "Gula Aren", price: 6000 }}
  ]
}};

export const products = {json.dumps(final_products, indent=2)};
"""

with open('/Users/macbook/BackupKopkenPromoHolic/js/data/products.js', 'w') as f:
    f.write(js_code)

print("Saved js/data/products.js successfully!")
