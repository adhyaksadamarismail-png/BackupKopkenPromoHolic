// SOURCE OF TRUTH DATASET KOPI KENANGAN (Menu Satuan + Banana Series & Soft Baked Cookies)

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
    "image": "https://i.ibb.co.com/Z6KK2CYy/Frame-1410112853.png",
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
    "image": "https://i.ibb.co.com/PvFsvH97/Frame-1410112847.png",
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
    "name": "Caffe Malt Latte",
    "category": "kopi",
    "price": 16500,
    "originalPrice": 22275,
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
    "id": "kk_prod_10",
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
    "id": "kk_prod_11",
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
    "id": "kk_prod_12",
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
    "id": "kk_prod_13",
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
    "id": "kk_prod_14",
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
    "id": "kk_prod_15",
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
    "id": "kk_prod_16",
    "name": "Creamy Aren Latte",
    "category": "kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/JRPdckcj/Frame-1410112856.png",
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
    "id": "kk_prod_17",
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
    "id": "kk_prod_18",
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
    "id": "kk_prod_19",
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
    "id": "kk_prod_20",
    "name": "OG Aren Speculoos Latte",
    "category": "kopi",
    "price": 15500,
    "originalPrice": 20925,
    "image": "https://i.ibb.co.com/JRPdckcj/Frame-1410112856.png",
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
    "id": "kk_prod_21",
    "name": "Dua Shot OG Aren",
    "category": "kopi",
    "price": 17500,
    "originalPrice": 23625,
    "image": "https://i.ibb.co.com/0yQbyxDQ/Frame-1410112838.png",
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
    "id": "kk_prod_22",
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
    "id": "kk_prod_23",
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
    "id": "kk_prod_24",
    "name": "OG Aren Milky",
    "category": "non-kopi",
    "price": 16500,
    "originalPrice": 22275,
    "image": "https://i.ibb.co.com/JRPdckcj/Frame-1410112856.png",
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
    "id": "kk_prod_25",
    "name": "OG Thai Tea",
    "category": "non-kopi",
    "price": 14500,
    "originalPrice": 19575,
    "image": "https://i.ibb.co.com/Zp4Nwdk2/Frame-1410112877.png",
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
    "id": "kk_prod_26",
    "name": "Thai Tea Loaded",
    "category": "non-kopi",
    "price": 18500,
    "originalPrice": 24975,
    "image": "https://i.ibb.co.com/Zp4Nwdk2/Frame-1410112877.png",
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
    "id": "kk_prod_27",
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
    "id": "kk_prod_28",
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
    "id": "kk_prod_29",
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
    "id": "kk_prod_30",
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
    "id": "kk_prod_31",
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
    "id": "kk_prod_32",
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
    "id": "kk_prod_33",
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
    "id": "kk_prod_34",
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
    "id": "kk_prod_35",
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
    "id": "kk_prod_36",
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
    "id": "kk_prod_37",
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
    "id": "kk_prod_38",
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
    "id": "kk_prod_39",
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
    "id": "kk_prod_40",
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
    "id": "kk_prod_41",
    "name": "Milo Dino",
    "category": "non-kopi",
    "price": 16000,
    "originalPrice": 21600,
    "image": "https://i.ibb.co.com/WNXkfp4Q/Frame-1410112840.png",
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
    "id": "kk_prod_42",
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
    "id": "kk_prod_43",
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
    "id": "kk_prod_44",
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
    "id": "kk_prod_45",
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
    "id": "kk_prod_46",
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
    "id": "kk_prod_47",
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
    "id": "kk_prod_48",
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
    "id": "kk_prod_49",
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
    "id": "kk_prod_50",
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
    "id": "kk_prod_51",
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
    "id": "kk_prod_52",
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
    "id": "kk_prod_53",
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
    "id": "kk_prod_54",
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
    "id": "kk_prod_55",
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
    "id": "kk_prod_56",
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
    "id": "kk_prod_57",
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
    }
  },
  {
    "id": "kk_prod_58",
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
    }
  },
  {
    "id": "kk_prod_59",
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
    }
  },
  {
    "id": "kk_prod_60",
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
    }
  },
  {
    "id": "kk_prod_61",
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
    "id": "kk_prod_62",
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
    "id": "kk_prod_63",
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
  }
];
