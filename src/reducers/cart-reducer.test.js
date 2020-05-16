import {
  addOneItemToCart,
  decreaseSelectedItemInCart,
  deleteAllSelectedItemsFromCart
} from "../actions";

import cart from "./cart-reducer";
const shop = {
  books: [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      price: 45,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    }
  ],
  isLoading: true,
  requestError: null
};
//"Add" test data
const stateInAdd = {
  shop,
  cart: {
    itemsInCart: [],
    orderTotal: 0
  }
};

const book = {
  id: 1,
  title: "Production-Ready Microservices",
  author: "Susan J. Fowler",
  price: 32,
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
};

//expected outputs
const stateOutAdd = {
  itemsInCart: [
    {
      id: 1,
      title: "Production-Ready Microservices",
      count: 1,
      price: 32,
      total: 32
    }
  ],
  orderTotal: 32
};
//End of "Add" test data

//"decrease" test data
const stateInDecrease = {
  shop: {
    books: [
      {
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J. Fowler",
        price: 32,
        coverImage:
          "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
      },
      {
        id: 2,
        title: "Release It!",
        author: "Michael T. Nygard",
        price: 45,
        coverImage:
          "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
      }
    ],
    isLoading: true,
    requestError: null
  },
  cart: {
    itemsInCart: [
      {
        id: 1,

        title: "Production-Ready Microservices",

        count: 2,
        price: 32,
        total: 64
      }
    ],
    orderTotal: 64
  }
};
//changed state
const stateOutDecrease = {
  itemsInCart: [
    {
      id: 1,
      title: "Production-Ready Microservices",
      count: 1,
      price: 32,
      total: 32
    }
  ],
  orderTotal: 32
};
//End of "decrease" test data

//"Remove" test data
const itemsArray = [
  {
    id: 1,
    title: "Production-Ready Microservices",
    count: 1,
    price: 32,
    total: 32
  },
  {
    id: 2,
    title: "Release It!",
    count: 1,
    price: 45,
    total: 45
  }
];

const stateInRemove = {
  shop,
  cart: {
    itemsInCart: [
      {
        id: 1,
        title: "Production-Ready Microservices",
        count: 1,
        price: 32,
        total: 32
      },
      {
        id: 2,
        title: "Release It!",
        count: 1,
        price: 45,
        total: 45
      }
    ],
    orderTotal: 77
  }
};

//changed state
const stateOutRemove = {
  itemsInCart: [
    {
      id: 1,
      title: "Production-Ready Microservices",
      count: 1,
      price: 32,
      total: 32
    }
  ],
  orderTotal: 32
};
//end Remove test data

describe("cart reducer", () => {
  it("should add item to the cart", () => {
    expect(cart(stateInAdd, addOneItemToCart(1))).toEqual(stateOutAdd);
  });

  it("should decrease item's count in the cart", () => {
    expect(cart(stateInDecrease, decreaseSelectedItemInCart(1))).toEqual(
      stateOutDecrease
    );
  });

  it("should remove item from cart the array", () => {
    expect(cart(stateInRemove, deleteAllSelectedItemsFromCart(2))).toEqual(
      stateOutRemove
    );
  });
});
