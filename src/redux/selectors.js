//TODO: Find a way to make this function have access to the state without them having to be passed in
export function calculateCartTotal (state) {
    return state.shoppingCartList.reduce((a, b) => a + (b.cost * b.quantity), 0).toFixed(2);
  }
  
  //TODO: Find a way to make this function have access to the state without them having to be passed in
  export function isShoppingCartPopulated(state) {
    return state.shoppingCartList.length > 0;
  }

  export function showShoppingCart(state) {
    return state.iconHover || state.shoppingCartHover;
 }