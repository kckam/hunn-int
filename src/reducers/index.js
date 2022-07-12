export default function (state, action) {
  switch (action.type) {
    case "SHOW_MINI_CART":
      return { ...state, showMiniCart: true, addedProduct: action.payload };
    case "HIDE_MINI_CART":
      return { ...state, showMiniCart: false };
    default:
      return state;
  }
}
