import sqlite3, json

conn = sqlite3.connect('/Users/macbook/jasdorbydy/data/jasdor.db')
c = conn.cursor()
c.execute("SELECT id, name, image, description, price, category, customization_json FROM products WHERE brand_id = 'brand_kopi_kenangan' AND availability = 'ON'")
rows = c.fetchall()

product_list = []

cat_mapping = {
    'Menu Baru': 'menu-baru',
    'Kopi': 'kopi',
    'Non-Kopi': 'non-kopi',
    'Frappe': 'frappe',
    'Oatside': 'oatside',
    'Food': 'food',
    'Coffees': 'kopi'
}

for r in rows:
    pid, name, image, desc, price, category, cust_json_str = r
    cat_id = cat_mapping.get(category, 'kopi')
    
    try:
        cust_flags = json.loads(cust_json_str) if cust_json_str else {}
    except:
        cust_flags = {}
        
    has_suhu = cust_flags.get('has_suhu', cat_id in ['kopi', 'non-kopi', 'oatside', 'menu-baru'])
    has_ukuran = cust_flags.get('has_ukuran', cat_id != 'food')
    has_es = cust_flags.get('has_es', cat_id != 'food')
    has_gula = cust_flags.get('has_gula', cat_id != 'food')
    has_beans = cust_flags.get('has_beans', cat_id == 'kopi')
    has_syrup = cust_flags.get('has_syrup', cat_id != 'food')
    has_topping = cust_flags.get('has_topping', cat_id != 'food')

    # Build options object
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

    # Best seller tag for top favorites
    is_best_seller = name in [
        'Kopi Kenangan Mantan', 'Spanish Latte', 'Butterscotch Aren Latte', 
        'Korean Banana Latte', 'Creamy Aren Latte', 'Matcha Latte', 
        'Salt Bread Original', 'Roti Coklat Klasik'
    ]

    # Calculate normal strikethrough price if promo
    original_price = int(price * 1.35) if price > 10000 else None

    product_list.append({
        'id': pid,
        'name': name,
        'category': cat_id,
        'price': price,
        'originalPrice': original_price,
        'image': image,
        'description': desc or f"{name} segar dan nikmat khas Kopi Kenangan.",
        'isBestSeller': is_best_seller,
        'options': options
    })

print(f"Exporting {len(product_list)} products to JS...")

js_content = f"""// Kopi Kenangan Products Dataset Exported from Database

export const productCategories = [
  {{ id: 'menu-baru', name: 'Menu Baru' }},
  {{ id: 'kopi', name: 'Kopi' }},
  {{ id: 'non-kopi', name: 'Non-Kopi' }},
  {{ id: 'frappe', name: 'Frappe' }},
  {{ id: 'oatside', name: 'Oatside' }},
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

export const products = {json.dumps(product_list, indent=2)};
"""

with open('/Users/macbook/BackupKopkenPromoHolic/js/data/products.js', 'w') as f:
    f.write(js_content)

print("Successfully wrote js/data/products.js!")
