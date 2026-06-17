export const initialState = {
  cartItems: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;

      if (!item || typeof item !== "object" || !item.id) {
        console.error("ADD_TO_CART failed: Invalid item or missing 'id'", item);
        return state;
      }

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };
    }

    case "INCREMENT": {
      const id = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    }

    case "DECREMENT": {
      const id = action.payload;
      if (!id) return state;

      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0),
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    case "REMOVE_FROM_CART": {
      const id = action.payload;
      if (!id) return state;

      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== id),
      };
    }

    default:
      return state;
  }
};
