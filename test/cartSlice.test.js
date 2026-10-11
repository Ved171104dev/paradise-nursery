import assert from 'node:assert/strict';
import test from 'node:test';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartActions } from '../src/store/CartSlice.jsx';

const makeStore = () => configureStore({ reducer: { cart: cartReducer } });
const monstera = {
  id: 13,
  name: 'Monstera',
  price: 24.99,
  image: 'monstera.jpg',
};

test('adding a plant updates cart quantity and amount', () => {
  const store = makeStore();
  store.dispatch(cartActions.addToCart(monstera));

  const cart = store.getState().cart;
  assert.equal(cart.items.length, 1);
  assert.equal(cart.items[0].quantity, 1);
  assert.equal(cart.totalQuantity, 1);
  assert.equal(cart.totalAmount, 24.99);
});

test('quantity controls update totals and remove the final item', () => {
  const store = makeStore();
  store.dispatch(cartActions.addToCart(monstera));
  store.dispatch(cartActions.increaseQuantity(monstera.id));

  let cart = store.getState().cart;
  assert.equal(cart.items[0].quantity, 2);
  assert.equal(cart.items[0].totalPrice, 49.98);
  assert.equal(cart.totalQuantity, 2);

  store.dispatch(cartActions.decreaseQuantity(monstera.id));
  cart = store.getState().cart;
  assert.equal(cart.items[0].quantity, 1);
  assert.equal(cart.totalAmount, 24.99);

  store.dispatch(cartActions.decreaseQuantity(monstera.id));
  cart = store.getState().cart;
  assert.deepEqual(cart.items, []);
  assert.equal(cart.totalQuantity, 0);
  assert.equal(cart.totalAmount, 0);
});

test('delete removes all quantities of a cart item', () => {
  const store = makeStore();
  store.dispatch(cartActions.addToCart(monstera));
  store.dispatch(cartActions.addToCart(monstera));
  store.dispatch(cartActions.removeFromCart(monstera.id));

  const cart = store.getState().cart;
  assert.deepEqual(cart.items, []);
  assert.equal(cart.totalQuantity, 0);
  assert.equal(cart.totalAmount, 0);
});
