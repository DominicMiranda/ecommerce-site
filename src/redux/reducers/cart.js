import * as siteActions from "../actionTypes";

const initialState = {
  "test123@gmail.com": [
    {
      name: "iphone 11",
      brand: "Apple",
      price: 599,
      operatingSystem: "IOS",
      description:
        "The iPhone 11 boasts a gorgeous all-screen Liquid Retina LCD that is water resistant up to 2 metres for up to 30 minutes. Moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% Autofocus in low light.",
      image: "https://m.media-amazon.com/images/I/71i2XhHU3pL._SX466_.jpg",
      id: "iph11",
    },
  ],
  "test321@gmail.com": [
    {
      name: "iphone 12",
      brand: "Apple",
      price: 699,
      description:
        "Dive into a world of crystal-clear visuals with this iPhone’s Super Retina XDR Display. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be.",
      operatingSystem: "IOS",
      image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg",
      id: "iph12",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case siteActions.ADD_TO_CART: {
      const { userId, product } = action.payload;
      return {
        ...state,
        [userId]: state[userId] ? [...state[userId], product] : [product],
      };
    }
    case siteActions.REMOVE_FROM_CART: {
      const { userId, product } = action.payload;
      const index = state[userId].findIndex((item) => item.id === product.id);
      return {
        ...state,
        [userId]: [
          ...state[userId].slice(0, index),
          ...state[userId].slice(index + 1),
        ],
      };
    }
    case siteActions.LOAD_LOCAL_CART: {
      const { userId, localCart } = action.payload;
      return {
        ...state,
        [userId]: localCart,
      };
    }
    default:
      return state;
  }
}
