// SOURCE OF TRUTH DATASET KOPI KENANGAN (Menu Satuan + Organized Food Subcategories)

export const productCategories = [
  { id: 'kopi', name: 'Kopi' },
  { id: 'non-kopi', name: 'Non-Kopi' },
  { id: 'frappe', name: 'Frappe' },
  { id: 'oatside', name: 'Oatside Series' },
  { id: 'food', name: 'Food' }
];

export const defaultOptions = {
  suhu: [
    { id: "ice", name: "Ice", price: 0 },
    { id: "hot", name: "Hot", price: 0 }
  ],
  ukuran: [
    { id: "normal", name: "Normal", price: 0 },
    { id: "large", name: "Large", price: 5000 }
  ],
  es: [
    { id: "normal-ice", name: "Normal", price: 0 },
    { id: "less-ice", name: "Less Ice", price: 0 },
    { id: "no-ice", name: "No Ice", price: 0 }
  ],
  gula: [
    { id: "normal-sugar", name: "Normal", price: 0 },
    { id: "less-sugar", name: "Less Sugar", price: 0 },
    { id: "no-sugar", name: "No Sugar", price: 0 }
  ],
  beans: [
    { id: "kenangan-blend", name: "Kenangan Blend", price: 0 },
    { id: "juwara-beans", name: "Juwara Beans", price: 3000 }
  ],
  syrup: [
    { id: "vanilla-syrup", name: "Vanilla Syrup", price: 6000 },
    { id: "hazelnut-syrup", name: "Hazelnut Syrup", price: 6000 },
    { id: "caramel-syrup", name: "Caramel Syrup", price: 6000 },
    { id: "salted-caramel", name: "Salted Caramel Sauce", price: 6000 },
    { id: "choco-sauce", name: "Choco Sauce", price: 6000 },
    { id: "butterscotch", name: "Butterscotch Sauce", price: 6000 }
  ],
  topping: [
    { id: "shot-kenangan", name: "Espresso Shot Kenangan Blend", price: 6000 },
    { id: "shot-juwara", name: "Espresso Shot Juwara Beans", price: 6000 },
    { id: "golden-boba", name: "Golden Boba", price: 6000 },
    { id: "grass-jelly", name: "Grass Jelly", price: 6000 },
    { id: "oreo", name: "Oreo", price: 6000 },
    { id: "whipped-choco", name: "Whipped Cream Chocolate", price: 6000 },
    { id: "whipped-vanilla", name: "Whipped Cream Vanilla", price: 6000 },
    { id: "caramel-crumble", name: "Caramel Crumble", price: 6000 },
    { id: "gula-aren", name: "Gula Aren", price: 6000 }
  ]
};

export const products = [
  {
    "id": "kk_prod_1",
    "name": "Kopi Kenangan Mantan",
    "category": "kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://iili.io/CsAJ6x4.jpg",
    "description": "Kopi Kenangan Mantan segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": true,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_2",
    "name": "Americano",
    "category": "kopi",
    "price": 13500,
    "originalPrice": 18225,
    "image": "https://i.ibb.co.com/Z6KK2CYy/Frame-1410112853.png",
    "description": "Americano segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_3",
    "name": "Blueberry Americano",
    "category": "kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://cdn.phototourl.com/free/2026-08-22-a1962281-ed0a-47a4-b23e-7b561d48b314.jpg",
    "description": "Blueberry Americano segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_4",
    "name": "Latte",
    "category": "kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/nMPfxRc3/Frame-1410112855.png",
    "description": "Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_5",
    "name": "Cappuccino",
    "category": "kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/wZ6ySXyR/Frame-1410112852.png",
    "description": "Cappuccino segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_6",
    "name": "Vanilla Latte",
    "category": "kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/spKHQyYj/Frame-1410112841.png",
    "description": "Vanilla Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_7",
    "name": "Hazelnut Latte",
    "category": "kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/Fky0GJzH/Frame-1410112846.png",
    "description": "Hazelnut Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_8",
    "name": "Caramel Latte",
    "category": "kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://cdn.phototourl.com/member/2026-08-23-5aa3eb0f-ca20-482c-bf81-5695ba78e199.jpg",
    "description": "Caramel Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_9",
    "name": "Creamy Caramel Latte",
    "category": "kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://cdn.phototourl.com/member/2026-08-23-24fa32c6-4d5f-4cf9-a969-34df7b4d4d5e.jpg",
    "description": "Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_10",
    "name": "Caffe Malt Latte",
    "category": "kopi",
    "price": 16500,
    "originalPrice": 22275,
    "image": "https://i.ibb.co.com/JjPnTkXH/IMG-9996.jpg",
    "description": "Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_11",
    "name": "Caramel Macchiato",
    "category": "kopi",
    "price": 19000,
    "originalPrice": 25650,
    "image": "https://i.ibb.co.com/3YhzGVh0/Frame-1410112845.png",
    "description": "Caramel Macchiato segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_12",
    "name": "Mocha Latte",
    "category": "kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/0yQbyxDQ/Frame-1410112838.png",
    "description": "Mocha Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_13",
    "name": "Kopi Susu Black Aren",
    "category": "kopi",
    "price": 15500,
    "originalPrice": 20925,
    "image": "https://i.ibb.co.com/0yQbyxDQ/Frame-1410112838.png",
    "description": "Kopi Susu Black Aren segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_14",
    "name": "Toffee Nut Latte",
    "category": "kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://i.ibb.co.com/zVbBCRkY/Frame-1410112861.png",
    "description": "Toffee Nut Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_15",
    "name": "Toffee Nut Aren Latte",
    "category": "kopi",
    "price": 15500,
    "originalPrice": 20925,
    "image": "https://i.ibb.co.com/vC66ngqh/Frame-1410112859.png",
    "description": "Toffee Nut Aren Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_16",
    "name": "Butterscotch Seasalt Latte",
    "category": "kopi",
    "price": 17500,
    "originalPrice": 23625,
    "image": "https://i.ibb.co.com/nMPfxRc3/Frame-1410112855.png",
    "description": "Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": true,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_17",
    "name": "Creamy Aren Latte",
    "category": "kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/twPQMY43/IMG-9997.jpg",
    "description": "Creamy Aren Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": true,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_18",
    "name": "Matcha Espresso",
    "category": "kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/yFq7sPD7/Frame-1410112839.png",
    "description": "Matcha Espresso segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": true,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_19",
    "name": "Avocado Coffee",
    "category": "kopi",
    "price": 19000,
    "originalPrice": 25650,
    "image": "https://i.ibb.co.com/5PXyL5H/Frame-1410112843.png",
    "description": "Avocado Coffee segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_20",
    "name": "Pistachio Aren Latte",
    "category": "kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://i.ibb.co.com/8Hyvm5b/Frame-1410112862.png",
    "description": "Pistachio Aren Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_21",
    "name": "OG Aren Speculoos Latte",
    "category": "kopi",
    "price": 15500,
    "originalPrice": 20925,
    "image": "https://cdn.phototourl.com/member/2026-08-23-578cd165-a216-452f-9597-c5372529f8e6.jpg",
    "description": "OG Aren Speculoos Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_22",
    "name": "Dua Shot OG Aren",
    "category": "kopi",
    "price": 17500,
    "originalPrice": 23625,
    "image": "https://cdn.phototourl.com/member/2026-08-23-578cd165-a216-452f-9597-c5372529f8e6.jpg",
    "description": "Dua Shot OG Aren segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_23",
    "name": "Banana Americano",
    "category": "kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://iili.io/Cs9tSoJ.jpg",
    "description": "Seri HAECHAN A SIP OF SUNSHINE - Espresso berkombinasi rasa pisang manis menyegarkan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    },
    "seriesBadge": "\ud83c\udf4c Banana Series"
  },
  {
    "id": "kk_prod_24",
    "name": "Korean Banana Latte",
    "category": "kopi",
    "price": 16500,
    "originalPrice": 22275,
    "image": "https://iili.io/Cs9ZyyF.jpg",
    "description": "Seri HAECHAN A SIP OF SUNSHINE - Korean Banana Latte segar manis pisang khas Korea.",
    "isBestSeller": true,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [
        {
          "id": "kenangan-blend",
          "name": "Kenangan Blend",
          "price": 0
        },
        {
          "id": "juwara-beans",
          "name": "Juwara Beans",
          "price": 3000
        }
      ],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    },
    "seriesBadge": "\ud83c\udf4c Banana Series"
  },
  {
    "id": "kk_prod_25",
    "name": "OG Aren Milky",
    "category": "non-kopi",
    "price": 16500,
    "originalPrice": 22275,
    "image": "https://cdn.phototourl.com/member/2026-08-23-578cd165-a216-452f-9597-c5372529f8e6.jpg",
    "description": "OG Aren Milky Speculoos segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_26",
    "name": "OG Thai Tea",
    "category": "non-kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://cdn.phototourl.com/member/2026-08-23-f72a51b5-b91d-45ac-b67a-ed86bafb5ada.jpg",
    "description": "OG Thai Tea segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_27",
    "name": "Thai Tea Loaded",
    "category": "non-kopi",
    "price": 18500,
    "originalPrice": 24975,
    "image": "https://cdn.phototourl.com/free/2026-08-22-6a50ce98-748e-4a11-896c-a314bcd506c7.jpg",
    "description": "Thai Tea Loaded segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_28",
    "name": "Dutch Chocolate",
    "category": "non-kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png",
    "description": "Dutch Chocolate segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_29",
    "name": "Hazelnut Dutch Chocolate",
    "category": "non-kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png",
    "description": "Dutch Chocolate segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_30",
    "name": "Choco Caramel",
    "category": "non-kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://i.ibb.co.com/YFz0B2vk/Frame-1410112869.png",
    "description": "Choco Caramel segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_31",
    "name": "Mocha Caramel",
    "category": "non-kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/YFz0B2vk/Frame-1410112869.png",
    "description": "Mocha Caramel segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_32",
    "name": "Avocado Milk",
    "category": "non-kopi",
    "price": 17000,
    "originalPrice": 22950,
    "image": "https://i.ibb.co.com/4ZvNd6WQ/Frame-1410112867.png",
    "description": "Avocado Milk segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_33",
    "name": "Avocado Caramel",
    "category": "non-kopi",
    "price": 19000,
    "originalPrice": 25650,
    "image": "https://i.ibb.co.com/8CwcZdH/Frame-1410112871.png",
    "description": "Avocado Caramel segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_34",
    "name": "Hazelnut Chocolate Milk Tea",
    "category": "non-kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png",
    "description": "Hazelnut Chocolate Milk Tea lezat dan segar khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_35",
    "name": "Milk Oreo Crumble",
    "category": "non-kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/gMBR7mX6/Frame-1410112875.png",
    "description": "Milk Oreo Crumble segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_36",
    "name": "Toffee Nut Chocolate Macchiato",
    "category": "non-kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png",
    "description": "Toffee Nut Chocolate Macchiato lezat dan segar khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_37",
    "name": "Susu Grass Jelly",
    "category": "non-kopi",
    "price": 17000,
    "originalPrice": 22950,
    "image": "https://i.ibb.co.com/nMKJY7gj/Frame-1410112876.png",
    "description": "Susu Grass Jelly segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_38",
    "name": "Babycino",
    "category": "non-kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://i.ibb.co.com/XkSQgfyS/Frame-1410112886.png",
    "description": "Babycino segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_39",
    "name": "Air Mineral",
    "category": "non-kopi",
    "price": 9000,
    "originalPrice": 12150,
    "image": "https://i.ibb.co.com/LdNYD0sW/Frame-1410112879.png",
    "description": "Air Mineral segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_40",
    "name": "Caramel Dutch Choco",
    "category": "non-kopi",
    "price": 19000,
    "originalPrice": 25650,
    "image": "https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png",
    "description": "Caramel Dutch Choco segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_41",
    "name": "Kenangan Milk Tea",
    "category": "non-kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/qY3c3bPT/Frame-1410112872.png",
    "description": "Kenangan Milk Tea segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_42",
    "name": "Milo Dino",
    "category": "non-kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://cdn.phototourl.com/free/2026-08-22-961057b3-c062-4ec8-9bd3-89e28e460124.jpg",
    "description": "Milo Dinosaurus segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_43",
    "name": "Oreo Shake",
    "category": "non-kopi",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://i.ibb.co.com/gMBR7mX6/Frame-1410112875.png",
    "description": "Oreo Shake segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_44",
    "name": "Butterscotch Seasalt Crumble",
    "category": "non-kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png",
    "description": "Butterscotch Seasalt Crumble lezat dan segar khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_45",
    "name": "Raspberry Hibiscus",
    "category": "non-kopi",
    "price": 15000,
    "originalPrice": 20250,
    "image": "https://i.ibb.co.com/99wF5vh5/Frame-1410112874.png",
    "description": "Raspberry Hibiscus segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_46",
    "name": "Fresh Lemonade",
    "category": "non-kopi",
    "price": 13500,
    "originalPrice": 18225,
    "image": "https://i.ibb.co.com/FqHmjmM4/Frame-1410112870.png",
    "description": "Fresh Lemonade segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_47",
    "name": "Lemon Black Tea",
    "category": "non-kopi",
    "price": 13500,
    "originalPrice": 18225,
    "image": "https://i.ibb.co.com/FqHmjmM4/Frame-1410112870.png",
    "description": "Lemon Black Tea segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_48",
    "name": "Banana Choco",
    "category": "non-kopi",
    "price": 17000,
    "originalPrice": 22950,
    "image": "https://iili.io/Cs9D3Ne.jpg",
    "description": "Seri HAECHAN A SIP OF SUNSHINE - Cokelat kaya rasa berpadu dengan aroma rasa pisang manis.",
    "isBestSeller": true,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    },
    "seriesBadge": "\ud83c\udf4c Banana Series"
  },
  {
    "id": "kk_prod_49",
    "name": "Blueberry Frappe",
    "category": "frappe",
    "price": 16500,
    "originalPrice": 22275,
    "image": "https://iili.io/Cs9Q5xf.jpg",
    "description": "Kelezatan frappe rasa blueberry menyegarkan.",
    "isBestSeller": true,
    "options": {
      "suhu": [],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_50",
    "name": "Chocoberry Frappe",
    "category": "frappe",
    "price": 18500,
    "originalPrice": 24975,
    "image": "https://iili.io/Cs9Q4Wv.jpg",
    "description": "Kelezatan frappe cokelat berpadu sempurna dengan keharuman manis buah berry.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_51",
    "name": "Coffeeberry Frappe",
    "category": "frappe",
    "price": 17500,
    "originalPrice": 23625,
    "image": "https://iili.io/Cs9Q5xf.jpg",
    "description": "Sensasi kelezatan frappe kopi berpadu dengan keharuman buah berry.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_52",
    "name": "Dutch Choco Kenangan Frappe",
    "category": "frappe",
    "price": 19500,
    "originalPrice": 26325,
    "image": "https://i.ibb.co.com/PsZWwjjR/Frame-1410112882.png",
    "description": "Dutch Choco Kenangan Frappe segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_53",
    "name": "Kopi Kenangan Mantan Frappe",
    "category": "frappe",
    "price": 18500,
    "originalPrice": 24975,
    "image": "https://i.ibb.co.com/9HNKVYM4/Frame-1410112881.png",
    "description": "Kopi Kenangan Mantan Frappe segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_54",
    "name": "Vanilla Kenangan Frappe",
    "category": "frappe",
    "price": 17500,
    "originalPrice": 23625,
    "image": "https://i.ibb.co.com/nqWWZDnP/Frame-1410112887.png",
    "description": "Vanilla Kenangan Frappe segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_55",
    "name": "Butterscotch Kenangan Frappe",
    "category": "frappe",
    "price": 19500,
    "originalPrice": 26325,
    "image": "https://iili.io/Cs9sTgt.jpg",
    "description": "Butterscotch Kenangan Frappe segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_56",
    "name": "Oatside Matcha Latte",
    "category": "oatside",
    "price": 17500,
    "originalPrice": 23625,
    "image": "https://i.ibb.co.com/FLz7TCqr/Frame-1410112866.png",
    "description": "Oatside Matcha Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": true,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_57",
    "name": "Oatside Kopi Kenangan",
    "category": "oatside",
    "price": 15500,
    "originalPrice": 20925,
    "image": "https://iili.io/Cs9fKSs.jpg",
    "description": "Oatside Kopi Kenangan segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_58",
    "name": "Oatside Latte",
    "category": "oatside",
    "price": 17500,
    "originalPrice": 23625,
    "image": "https://iili.io/Cs9f4Js.jpg",
    "description": "Oatside Latte segar dan nikmat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [
        {
          "id": "ice",
          "name": "Ice",
          "price": 0
        },
        {
          "id": "hot",
          "name": "Hot",
          "price": 0
        }
      ],
      "ukuran": [
        {
          "id": "normal",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "large",
          "name": "Large",
          "price": 5000
        }
      ],
      "es": [
        {
          "id": "normal-ice",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-ice",
          "name": "Less Ice",
          "price": 0
        },
        {
          "id": "no-ice",
          "name": "No Ice",
          "price": 0
        }
      ],
      "gula": [
        {
          "id": "normal-sugar",
          "name": "Normal",
          "price": 0
        },
        {
          "id": "less-sugar",
          "name": "Less Sugar",
          "price": 0
        },
        {
          "id": "no-sugar",
          "name": "No Sugar",
          "price": 0
        }
      ],
      "beans": [],
      "syrup": [
        {
          "id": "vanilla-syrup",
          "name": "Vanilla Syrup",
          "price": 6000
        },
        {
          "id": "hazelnut-syrup",
          "name": "Hazelnut Syrup",
          "price": 6000
        },
        {
          "id": "caramel-syrup",
          "name": "Caramel Syrup",
          "price": 6000
        },
        {
          "id": "salted-caramel",
          "name": "Salted Caramel Sauce",
          "price": 6000
        },
        {
          "id": "choco-sauce",
          "name": "Choco Sauce",
          "price": 6000
        },
        {
          "id": "butterscotch",
          "name": "Butterscotch Sauce",
          "price": 6000
        }
      ],
      "topping": [
        {
          "id": "shot-kenangan",
          "name": "Espresso Shot Kenangan Blend",
          "price": 6000
        },
        {
          "id": "shot-juwara",
          "name": "Espresso Shot Juwara Beans",
          "price": 6000
        },
        {
          "id": "golden-boba",
          "name": "Golden Boba",
          "price": 6000
        },
        {
          "id": "grass-jelly",
          "name": "Grass Jelly",
          "price": 6000
        },
        {
          "id": "oreo",
          "name": "Oreo",
          "price": 6000
        },
        {
          "id": "whipped-choco",
          "name": "Whipped Cream Chocolate",
          "price": 6000
        },
        {
          "id": "whipped-vanilla",
          "name": "Whipped Cream Vanilla",
          "price": 6000
        },
        {
          "id": "caramel-crumble",
          "name": "Caramel Crumble",
          "price": 6000
        },
        {
          "id": "gula-aren",
          "name": "Gula Aren",
          "price": 6000
        }
      ]
    }
  },
  {
    "id": "kk_prod_59",
    "name": "Salt Bread Original",
    "category": "food",
    "price": 9500,
    "originalPrice": 12825,
    "image": "https://cdn.phototourl.com/free/2026-08-23-53e962db-e849-43c3-8760-ea42166ea5ba.jpg",
    "description": "Salt Bread Original lezat khas Kopi Kenangan.",
    "isBestSeller": true,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Salt Bread"
  },
  {
    "id": "kk_prod_60",
    "name": "Salt Bread Choco Butter",
    "category": "food",
    "price": 10000,
    "originalPrice": 13500,
    "image": "https://cdn.phototourl.com/member/2026-08-23-790ec1c4-fafa-494a-8576-9ca178372e23.jpg",
    "description": "Salt Bread Choco Butter lezat dan segar khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Salt Bread"
  },
  {
    "id": "kk_prod_61",
    "name": "Salt Bread Abon",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://cdn.phototourl.com/member/2026-08-23-47de27e6-03ed-4966-af70-ce7b1ce57dd1.jpg",
    "description": "Salt Bread Abon lezat dan segar khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Salt Bread"
  },
  {
    "id": "kk_prod_62",
    "name": "Salt Bread Sausage",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://cdn.phototourl.com/member/2026-08-23-edd766e7-ff71-4b0c-80fd-c5086ab8e5f7.jpg",
    "description": "Salt Bread Sausage lezat dan segar khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Salt Bread"
  },
  {
    "id": "kk_prod_63",
    "name": "Salt Bread Beef & Cheese",
    "category": "food",
    "price": 11000,
    "originalPrice": 14850,
    "image": "https://iili.io/Cs9eR5B.jpg",
    "description": "Salt Bread Beef & Cheese lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Salt Bread"
  },
  {
    "id": "kk_prod_64",
    "name": "Canele Original",
    "category": "food",
    "price": 10500,
    "originalPrice": 14175,
    "image": "https://cdn.phototourl.com/free/2026-08-23-3669b223-f7ec-4dab-9380-69f4e9450c07.jpg",
    "description": "Canele Original lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Canele"
  },
  {
    "id": "kk_prod_65",
    "name": "Canele Toffee Nut",
    "category": "food",
    "price": 11500,
    "originalPrice": 15525,
    "image": "https://cdn.phototourl.com/free/2026-08-23-4a015fb2-e91c-4364-93f5-d4c293f3a6b1.jpg",
    "description": "Canele Toffee Nut lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Canele"
  },
  {
    "id": "kk_prod_66",
    "name": "Canele Aren",
    "category": "food",
    "price": 11500,
    "originalPrice": 15525,
    "image": "https://cdn.phototourl.com/free/2026-08-23-f4bdeaff-d62f-4010-90ae-6ff6a2b42178.jpg",
    "description": "Canele Aren lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd50 Canele"
  },
  {
    "id": "kk_prod_67",
    "name": "Adam Ayam Toast",
    "category": "food",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://cdn.phototourl.com/free/2026-08-22-44672d1e-6fd1-407b-a7dc-b0c0ad953eab.jpg",
    "description": "Adam Ayam Toast lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83c\udf5e Toast"
  },
  {
    "id": "kk_prod_68",
    "name": "Wahyu Sapi Toast",
    "category": "food",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://iili.io/Cs9JyJ4.jpg",
    "description": "Wahyu Sapi Toast lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83c\udf5e Toast"
  },
  {
    "id": "kk_prod_69",
    "name": "Choco Mocha Swirl Toast",
    "category": "food",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://i.ibb.co.com/LdNYD0sW/Frame-1410112879.png",
    "description": "Choco Mocha Swirl Toast lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83c\udf5e Toast"
  },
  {
    "id": "kk_prod_70",
    "name": "Oatmeal Raisin Soft Baked Cookie",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://iili.io/Cs9gGgs.jpg",
    "description": "Seri HAECHAN A SIP OF SUNSHINE - Soft baked cookie lembut dengan kismis dan oat bernutrisi.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83c\udf6a Soft Baked Cookie"
  },
  {
    "id": "kk_prod_71",
    "name": "Banana Choco Soft Baked Cookie",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://iili.io/Cs9rHIp.jpg",
    "description": "Seri HAECHAN A SIP OF SUNSHINE - Cokelat kaya rasa berpadu dengan aroma rasa pisang manis.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83c\udf6a Soft Baked Cookie"
  },
  {
    "id": "kk_prod_72",
    "name": "Sweet Honey Soft Baked Cookie",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://iili.io/Cs943wQ.jpg",
    "description": "Seri HAECHAN A SIP OF SUNSHINE - Soft baked cookie dengan sentuhan madu manis harum.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83c\udf6a Soft Baked Cookie"
  },
  {
    "id": "kk_prod_73",
    "name": "Blueberry Muffin",
    "category": "food",
    "price": 12000,
    "originalPrice": 16200,
    "image": "https://iili.io/Cs96rkG.jpg",
    "description": "Blueberry Muffin lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\uddc1 Muffin"
  },
  {
    "id": "kk_prod_74",
    "name": "Choco Muffin",
    "category": "food",
    "price": 12000,
    "originalPrice": 16200,
    "image": "https://iili.io/Cs9Pw8u.jpg",
    "description": "Choco Muffin lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\uddc1 Muffin"
  },
  {
    "id": "kk_prod_75",
    "name": "Sandwich Chicken Tartare",
    "category": "food",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://iili.io/CsAf3H7.jpg",
    "description": "Sandwich Chicken Tartare lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd6a Sandwich"
  },
  {
    "id": "kk_prod_76",
    "name": "Sandwich Smoked Beef",
    "category": "food",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://iili.io/Cs99TzX.jpg",
    "description": "Sandwich Smoked Beef lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    },
    "seriesBadge": "\ud83e\udd6a Sandwich"
  },
  {
    "id": "kk_prod_77",
    "name": "Donut Almond",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://cdn.phototourl.com/member/2026-08-23-b0df1216-45bd-4cf0-98dd-85f1b5a2c7ed.jpg",
    "description": "Donut Almond lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_78",
    "name": "Croissant Abon",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://cdn.phototourl.com/free/2026-08-23-ef5cf9ef-6601-4ee0-abae-f62ab4594e3a.jpg",
    "description": "Croissant Abon lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_79",
    "name": "Butter Croissant",
    "category": "food",
    "price": 11500,
    "originalPrice": 15525,
    "image": "https://iili.io/Cimk5P4.jpg",
    "description": "Butter Croissant lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_80",
    "name": "Chocolate Croissant",
    "category": "food",
    "price": 13500,
    "originalPrice": 18225,
    "image": "https://iili.io/Cimba9e.jpg",
    "description": "Chocolate Croissant lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_81",
    "name": "Pasta Mentai",
    "category": "food",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://cdn.phototourl.com/free/2026-08-23-6b72d5e1-8ce9-46e4-aa1a-cf711ff1e427.jpg",
    "description": "Pasta Mentai lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_82",
    "name": "Spaghetti Tuna Aglio Olio",
    "category": "food",
    "price": 18000,
    "originalPrice": 24300,
    "image": "https://cdn.phototourl.com/free/2026-08-23-12e3f8ec-4b1d-4646-abf0-034738b28427.jpg",
    "description": "Spaghetti Tuna Aglio Olio lezat dan segar khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_83",
    "name": "Thai Chicken Spaghetti",
    "category": "food",
    "price": 15000,
    "originalPrice": 20250,
    "image": "https://cdn.phototourl.com/free/2026-08-23-a880ede3-1c8e-41e4-a652-3640540bedd3.jpg",
    "description": "Thai Chicken Spaghetti lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_84",
    "name": "Roti Coklat Klasik",
    "category": "food",
    "price": 9000,
    "originalPrice": 12150,
    "image": "https://iili.io/Cim87vS.jpg",
    "description": "Roti Coklat Klasik lezat khas Kopi Kenangan.",
    "isBestSeller": true,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_85",
    "name": "Roti Srikaya",
    "category": "food",
    "price": 11500,
    "originalPrice": 15525,
    "image": "https://cdn.phototourl.com/free/2026-08-23-cfc17218-ce27-4ffb-902a-65f48f937caf.jpg",
    "description": "Roti Srikaya lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_86",
    "name": "Roti Susu Manis",
    "category": "food",
    "price": 8500,
    "originalPrice": 11475,
    "image": "https://iili.io/CimrJAN.jpg",
    "description": "Roti Susu Manis lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_87",
    "name": "Roti Gulung Abon",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://i.ibb.co.com/LdNYD0sW/Frame-1410112879.png",
    "description": "Roti Gulung Abon lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_88",
    "name": "Sugar Donut",
    "category": "food",
    "price": 9000,
    "originalPrice": 12150,
    "image": "https://iili.io/CimPAxI.jpg",
    "description": "Sugar Donut lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_89",
    "name": "Donut Tiramisu",
    "category": "food",
    "price": 10500,
    "originalPrice": 14175,
    "image": "https://iili.io/CimpKpn.jpg",
    "description": "Donut Tiramisu lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_90",
    "name": "Choco Chip Cookies",
    "category": "food",
    "price": 11000,
    "originalPrice": 14850,
    "image": "https://iili.io/Cs9FXB1.jpg",
    "description": "Choco Chip Cookies lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_91",
    "name": "Friend Chip Cookie",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://iili.io/Cs9Fq1n.jpg",
    "description": "Friend Chip Cookie lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_92",
    "name": "Join the Dark Side Cookie",
    "category": "food",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://iili.io/Cs9F4EX.jpg",
    "description": "Join the Dark Side Cookie lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_93",
    "name": "Vanilla Choux Puff",
    "category": "food",
    "price": 10000,
    "originalPrice": 13500,
    "image": "https://iili.io/Cs9etrx.jpg",
    "description": "Vanilla Choux Puff lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_94",
    "name": "Strawberry Choux Puff",
    "category": "food",
    "price": 10000,
    "originalPrice": 13500,
    "image": "https://iili.io/Cs9etrx.jpg",
    "description": "Strawberry Choux Puff lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_95",
    "name": "Chocolate Choux Puff",
    "category": "food",
    "price": 10000,
    "originalPrice": 13500,
    "image": "https://iili.io/Cs9etrx.jpg",
    "description": "Chocolate Choux Puff lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_96",
    "name": "Bambang Choco Cheese",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://iili.io/Cs92CCX.jpg",
    "description": "Bambang Choco Cheese lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  },
  {
    "id": "kk_prod_97",
    "name": "Aren Apple Pie",
    "category": "food",
    "price": 12500,
    "originalPrice": 16875,
    "image": "https://cdn.phototourl.com/free/2026-08-23-c2a9c7a7-353b-43d8-ba5d-ead21f0af4a6.jpg",
    "description": "Aren Apple Pie lezat khas Kopi Kenangan.",
    "isBestSeller": false,
    "options": {
      "suhu": [],
      "ukuran": [],
      "es": [],
      "gula": [],
      "beans": [],
      "syrup": [],
      "topping": []
    }
  }
];
