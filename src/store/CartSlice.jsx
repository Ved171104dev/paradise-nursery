import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity++;
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.items.splice(itemIndex, 1);
      }

      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalQuantity++;
      }

      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalQuantity--;
      }

      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
