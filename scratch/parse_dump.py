import re, json

with open('scratch/raw_dump.txt', 'w') as f:
    f.write('''DATA MENU...''')

# Let's inspect the actual jasdor.db SQLite file if available, or parse the user text.
import sqlite3, os

db_path = '/Users/macbook/jasdorbydy/data/jasdor.db'
if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("SELECT id, brand_id, name, image, description, price, category, availability, customization_json FROM products WHERE brand_id = 'brand_kopi_kenangan'")
    rows = c.fetchall()
    print(f"Total products found in DB: {len(rows)}")
    for r in rows:
        print(r)
else:
    print("DB file not found directly, parsing text.")
