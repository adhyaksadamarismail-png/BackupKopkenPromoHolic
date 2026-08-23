import sqlite3, json, os

conn = sqlite3.connect('/Users/macbook/jasdorbydy/data/jasdor.db')
c = conn.cursor()
c.execute("SELECT id, name, image, description, price, category FROM products WHERE brand_id = 'brand_kopi_kenangan'")
rows = c.fetchall()

db_map = {}
db_food_items = []

for r in rows:
    pid, name, image, desc, price, category = r
    db_map[name.lower().strip()] = {
        'image': image,
        'desc': desc,
        'price': price,
        'category': category
    }
    if category == 'Food':
        db_food_items.append({
            'name': name,
            'price': price,
            'image': image,
            'desc': desc
        })

default_images = {
    'kopi': 'https://i.ibb.co.com/0yQbyxDQ/Frame-1410112838.png',
    'non-kopi': 'https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png',
    'frappe': 'https://i.ibb.co.com/vxfBjc1m/Frame-1410112873.png',
    'oatside': 'https://iili.io/Cs9fKSs.jpg',
    'food': 'https://i.ibb.co.com/LdNYD0sW/Frame-1410112879.png'
}

custom_images = {
    "milk oreo crumble": "https://files.catbox.moe/0krxxy.jpeg",
    "hazelnut dutch choco": "https://files.catbox.moe/bl7fu0.jpeg",
    "hazelnut dutch chocolate": "https://files.catbox.moe/bl7fu0.jpeg",
    "caramel dutch choco": "https://files.catbox.moe/vdzsmf.jpeg",
    "milo dino": "https://files.catbox.moe/wl2ncg.jpeg",
    "kenangan milk tea": "https://files.catbox.moe/wu359s.jpeg",
    "butterscotch seasalt crumble": "https://files.catbox.moe/xy2z38.jpeg",
    "lemon black tea": "https://files.catbox.moe/1l7tsg.jpeg",
    "butterscotch aren latte": "https://files.catbox.moe/zfbk5t.jpeg",
    "mocha latte": "https://files.catbox.moe/d30myw.jpeg",
    "dua shot iced shaken": "https://files.catbox.moe/jaj7jw.jpeg",
    "dua shot og aren": "https://files.catbox.moe/jaj7jw.jpeg",
    "spanish latte": "https://files.catbox.moe/xz536k.jpeg",
    "donat almond": "https://cdn.phototourl.com/member/2026-08-23-b0df1216-45bd-4cf0-98dd-85f1b5a2c7ed.jpg",
    "salt bread abon": "https://cdn.phototourl.com/member/2026-08-23-47de27e6-03ed-4966-af70-ce7b1ce57dd1.jpg",
    "salt bread sausage": "https://cdn.phototourl.com/member/2026-08-23-edd766e7-ff71-4b0c-80fd-c5086ab8e5f7.jpg",
    "salt bread choco butter": "https://cdn.phototourl.com/member/2026-08-23-790ec1c4-fafa-494a-8576-9ca178372e23.jpg",
    "croissant abon": "https://cdn.phototourl.com/free/2026-08-23-ef5cf9ef-6601-4ee0-abae-f62ab4594e3a.jpg",
    "aren apple pie": "https://cdn.phototourl.com/free/2026-08-23-c2a9c7a7-353b-43d8-ba5d-ead21f0af4a6.jpg",
    "canele toffee nut": "https://cdn.phototourl.com/free/2026-08-23-4a015fb2-e91c-4364-93f5-d4c293f3a6b1.jpg",
    "canele aren": "https://cdn.phototourl.com/free/2026-08-23-f4bdeaff-d62f-4010-90ae-6ff6a2b42178.jpg",
    "pasta mentai": "https://cdn.phototourl.com/free/2026-08-23-6b72d5e1-8ce9-46e4-aa1a-cf711ff1e427.jpg",
    "spaghetti tuna aglio olio": "https://cdn.phototourl.com/free/2026-08-23-12e3f8ec-4b1d-4646-abf0-034738b28427.jpg",
    "spagetti tuna aglio olio": "https://cdn.phototourl.com/free/2026-08-23-12e3f8ec-4b1d-4646-abf0-034738b28427.jpg",
    "thai chicken spaghetti": "https://cdn.phototourl.com/free/2026-08-23-a880ede3-1c8e-41e4-a652-3640540bedd3.jpg",
    "thai chicken spagetti": "https://cdn.phototourl.com/free/2026-08-23-a880ede3-1c8e-41e4-a652-3640540bedd3.jpg",
    "canele original": "https://cdn.phototourl.com/free/2026-08-23-3669b223-f7ec-4dab-9380-69f4e9450c07.jpg",
    "roti srikaya": "https://cdn.phototourl.com/free/2026-08-23-cfc17218-ce27-4ffb-902a-65f48f937caf.jpg",
    "salt bread original": "https://cdn.phototourl.com/free/2026-08-23-53e962db-e849-43c3-8760-ea42166ea5ba.jpg",
    "adam ayam toast": "https://cdn.phototourl.com/free/2026-08-22-44672d1e-6fd1-407b-a7dc-b0c0ad953eab.jpg",
    "blueberry americano": "https://cdn.phototourl.com/free/2026-08-22-a1962281-ed0a-47a4-b23e-7b561d48b314.jpg",
    "caramel latte": "https://cdn.phototourl.com/member/2026-08-23-5aa3eb0f-ca20-482c-bf81-5695ba78e199.jpg",
    "creamy caramel latte": "https://cdn.phototourl.com/member/2026-08-23-24fa32c6-4d5f-4cf9-a969-34df7b4d4d5e.jpg",
    "creamy aren latte": "https://i.ibb.co.com/twPQMY43/IMG-9997.jpg",
    "og aren speculoos latte": "https://cdn.phototourl.com/member/2026-08-23-578cd165-a216-452f-9597-c5372529f8e6.jpg",
    "og thai tea": "https://cdn.phototourl.com/member/2026-08-23-f72a51b5-b91d-45ac-b67a-ed86bafb5ada.jpg",
    "thai tea loaded": "https://cdn.phototourl.com/free/2026-08-22-6a50ce98-748e-4a11-896c-a314bcd506c7.jpg",
    "butterscotch kenangan frappe": "https://iili.io/Cs9sTgt.jpg",
    "caffe malt latte": "https://i.ibb.co.com/JjPnTkXH/IMG-9996.jpg",
    "matcha latte": "https://i.ibb.co.com/BvcbFLH/Frame-1410112878.png"
}

items_to_remove = {
    "dirty croissant milo",
    "danish tiramisu",
    "roti sisir coklat",
    "roti sisir keju",
    "bolu marble ube",
    "bolu marble mocha",
    "bolu marble chocolate",
    "boli marble chocolate",
    "roti gulung aren"
}

raw_catalog = [
    # ☕ KOPI
    {"name": "Kopi Kenangan Mantan", "price": 14500, "category": "kopi"},
    {"name": "Americano", "price": 13500, "category": "kopi"},
    {"name": "Blueberry Americano", "price": 14500, "category": "kopi"},
    {"name": "Latte", "price": 16000, "category": "kopi"},
    {"name": "Cappuccino", "price": 16000, "category": "kopi"},
    {"name": "Spanish Latte", "price": 14500, "category": "kopi"},
    {"name": "Vanilla Latte", "price": 18000, "category": "kopi"},
    {"name": "Hazelnut Latte", "price": 18000, "category": "kopi"},
    {"name": "Caramel Latte", "price": 18000, "category": "kopi"},
    {"name": "Creamy Caramel Latte", "price": 18000, "category": "kopi"},
    {"name": "Caffe Malt Latte", "price": 16500, "category": "kopi"},
    {"name": "Caramel Macchiato", "price": 19000, "category": "kopi"},
    {"name": "Mocha Latte", "price": 18000, "category": "kopi"},
    {"name": "Kopi Susu Black Aren", "price": 15500, "category": "kopi"},
    {"name": "Toffee Nut Latte", "price": 14500, "category": "kopi"},
    {"name": "Toffee Nut Aren Latte", "price": 15500, "category": "kopi"},
    {"name": "Butterscotch Aren Latte", "price": 15000, "category": "kopi"},
    {"name": "Butterscotch Seasalt Latte", "price": 17500, "category": "kopi"},
    {"name": "Creamy Aren Latte", "price": 16000, "category": "kopi"},
    {"name": "Matcha Espresso", "price": 18000, "category": "kopi"},
    {"name": "Avocado Coffee", "price": 19000, "category": "kopi"},
    {"name": "Pistachio Aren Latte", "price": 14500, "category": "kopi"},
    {"name": "OG Aren Speculoos Latte", "price": 15500, "category": "kopi"},
    {"name": "Dua Shot Iced Shaken", "price": 19000, "category": "kopi"},
    
    # 🍌 BANANA SERIES IN KOPI
    {"name": "Banana Americano", "price": 14500, "category": "kopi", "seriesBadge": "🍌 Banana Series", "image": "https://iili.io/Cs9tSoJ.jpg"},
    {"name": "Korean Banana Latte", "price": 16500, "category": "kopi", "seriesBadge": "🍌 Banana Series", "image": "https://iili.io/Cs9ZyyF.jpg"},

    # 🥛 NON-KOPI
    {"name": "Matcha Latte", "price": 17500, "category": "non-kopi"},
    {"name": "OG Aren Milky", "price": 16500, "category": "non-kopi"},
    {"name": "OG Thai Tea", "price": 14500, "category": "non-kopi"},
    {"name": "Thai Tea Loaded", "price": 18500, "category": "non-kopi"},
    {"name": "Dutch Chocolate", "price": 18000, "category": "non-kopi"},
    {"name": "Hazelnut Dutch Choco", "price": 18000, "category": "non-kopi"},
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
    
    # 🍌 BANANA SERIES IN NON-KOPI
    {"name": "Banana Choco", "price": 17000, "category": "non-kopi", "seriesBadge": "🍌 Banana Series", "image": "https://iili.io/Cs9D3Ne.jpg"},

    # 🧊 FRAPPE (Blueberry Series FIRST)
    {"name": "Blueberry Frappe", "price": 16500, "category": "frappe"},
    {"name": "Chocoberry Frappe", "price": 18500, "category": "frappe"},
    {"name": "Coffeeberry Frappe", "price": 17500, "category": "frappe"},
    {"name": "Dutch Choco Kenangan Frappe", "price": 19500, "category": "frappe"},
    {"name": "Kopi Kenangan Mantan Frappe", "price": 18500, "category": "frappe"},
    {"name": "Vanilla Kenangan Frappe", "price": 17500, "category": "frappe"},
    {"name": "Butterscotch Kenangan Frappe", "price": 19500, "category": "frappe"},

    # 🌾 OATSIDE SERIES
    {"name": "Oatside Matcha Latte", "price": 17500, "category": "oatside"},
    {"name": "Oatside Kopi Kenangan", "price": 15500, "category": "oatside"},
    {"name": "Oatside Latte", "price": 17500, "category": "oatside"}
]

# FOOD subcategories in strict order:
food_ordered = [
    # 1. SALT BREAD
    {"name": "Salt Bread Original", "price": 9500, "category": "food", "seriesBadge": "🥐 Salt Bread"},
    {"name": "Salt Bread Choco Butter", "price": 10000, "category": "food", "seriesBadge": "🥐 Salt Bread"},
    {"name": "Salt Bread Abon", "price": 12500, "category": "food", "seriesBadge": "🥐 Salt Bread"},
    {"name": "Salt Bread Sausage", "price": 12500, "category": "food", "seriesBadge": "🥐 Salt Bread"},
    {"name": "Salt Bread Beef & Cheese", "price": 11000, "category": "food", "seriesBadge": "🥐 Salt Bread"},

    # 2. CANELE
    {"name": "Canele Original", "price": 10500, "category": "food", "seriesBadge": "🥐 Canele"},
    {"name": "Canele Toffee Nut", "price": 11500, "category": "food", "seriesBadge": "🥐 Canele"},
    {"name": "Canele Aren", "price": 11500, "category": "food", "seriesBadge": "🥐 Canele"},

    # 3. TOAST
    {"name": "Adam Ayam Toast", "price": 14500, "category": "food", "seriesBadge": "🍞 Toast"},
    {"name": "Wahyu Sapi Toast", "price": 14500, "category": "food", "seriesBadge": "🍞 Toast"},
    {"name": "Choco Mocha Swirl Toast", "price": 14500, "category": "food", "seriesBadge": "🍞 Toast"},

    # 4. SOFT BAKED COOKIE
    {"name": "Oatmeal Raisin Soft Baked Cookie", "price": 12500, "category": "food", "seriesBadge": "🍪 Soft Baked Cookie", "image": "https://iili.io/Cs9gGgs.jpg"},
    {"name": "Banana Choco Soft Baked Cookie", "price": 12500, "category": "food", "seriesBadge": "🍪 Soft Baked Cookie", "image": "https://iili.io/Cs9rHIp.jpg"},
    {"name": "Sweet Honey Soft Baked Cookie", "price": 12500, "category": "food", "seriesBadge": "🍪 Soft Baked Cookie", "image": "https://iili.io/Cs943wQ.jpg"},

    # 5. MUFFIN
    {"name": "Blueberry Muffin", "price": 12000, "category": "food", "seriesBadge": "🧁 Muffin"},
    {"name": "Choco Muffin", "price": 12000, "category": "food", "seriesBadge": "🧁 Muffin"},

    # 6. SANDWICH
    {"name": "Sandwich Chicken Tartare", "price": 16000, "category": "food", "seriesBadge": "🥪 Sandwich"},
    {"name": "Sandwich Smoked Beef", "price": 16000, "category": "food", "seriesBadge": "🥪 Sandwich"},

    # 7. FOOD LAINNYA
    {"name": "Donut Almond", "price": 12500, "category": "food"},
    {"name": "Croissant Abon", "price": 12500, "category": "food"},
    {"name": "Butter Croissant", "price": 11500, "category": "food"},
    {"name": "Chocolate Croissant", "price": 13500, "category": "food"},
    {"name": "Pasta Mentai", "price": 16000, "category": "food"},
    {"name": "Spaghetti Tuna Aglio Olio", "price": 18000, "category": "food"},
    {"name": "Thai Chicken Spaghetti", "price": 15000, "category": "food"},
    {"name": "Roti Coklat Klasik", "price": 9000, "category": "food"},
    {"name": "Roti Srikaya", "price": 11500, "category": "food"},
    {"name": "Roti Susu Manis", "price": 8500, "category": "food"},
    {"name": "Roti Gulung Abon", "price": 12500, "category": "food"},
    {"name": "Sugar Donut", "price": 9000, "category": "food"},
    {"name": "Donut Tiramisu", "price": 10500, "category": "food"},
    {"name": "Choco Chip Cookies", "price": 11000, "category": "food"},
    {"name": "Friend Chip Cookie", "price": 12500, "category": "food"},
    {"name": "Join the Dark Side Cookie", "price": 14500, "category": "food"},
    {"name": "Vanilla Choux Puff", "price": 10000, "category": "food"},
    {"name": "Strawberry Choux Puff", "price": 10000, "category": "food"},
    {"name": "Chocolate Choux Puff", "price": 10000, "category": "food"},
    {"name": "Bambang Choco Cheese", "price": 12500, "category": "food"},
    {"name": "Aren Apple Pie", "price": 12500, "category": "food"}
]

for fitem in food_ordered:
    raw_catalog.append(fitem)

final_products = []
seen_names = set()

for idx, item in enumerate(raw_catalog, 1):
    name = item["name"]
    name_key = name.lower().strip()
    
    if name_key in items_to_remove or name_key in seen_names:
        continue
    seen_names.add(name_key)

    cat = item["category"]
    price = item["price"]

    db_item = db_map.get(name_key)
    if not db_item:
        for k, v in db_map.items():
            if name_key in k or k in name_key:
                db_item = v
                break

    # Specific price overrides
    if name == 'Roti Coklat Klasik':
        price = 9000
    elif name == 'Butterscotch Aren Latte':
        price = 15000
    elif name == 'Spanish Latte':
        price = 14500
    elif name == 'Dua Shot Iced Shaken':
        price = 19000
    elif name == 'Matcha Latte':
        price = 17500

    # Image lookup: custom_images > item.image > db_item.image > default_images
    image = custom_images.get(name_key) or item.get("image") or (db_item['image'] if db_item and db_item.get('image') else default_images[cat])
    desc = item.get("desc") or (db_item['desc'] if db_item and db_item.get('desc') else f"{name} lezat dan segar khas Kopi Kenangan.")

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
        'Kopi Kenangan Mantan', 'Korean Banana Latte', 'Banana Choco', 
        'Butterscotch Seasalt Latte', 'Creamy Aren Latte', 'Matcha Espresso', 
        'Oatside Matcha Latte', 'Blueberry Frappe', 'Roti Coklat Klasik', 'Salt Bread Original', 'Matcha Latte'
    ]

    original_price = int(price * 1.35)

    prod_obj = {
        'id': f'kk_prod_{idx}',
        'name': name,
        'category': cat,
        'price': price,
        'originalPrice': original_price,
        'image': image,
        'description': desc,
        'isBestSeller': is_best_seller,
        'options': options
    }
    if "seriesBadge" in item:
        prod_obj["seriesBadge"] = item["seriesBadge"]

    final_products.append(prod_obj)

print(f"Total catalog products after latest updates: {len(final_products)}")

js_code = f"""// SOURCE OF TRUTH DATASET KOPI KENANGAN (Menu Satuan + Catbox Images & Non-Kopi Matcha Latte)

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
