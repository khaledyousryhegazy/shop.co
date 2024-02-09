import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const getInitialState = () => {
  const cartStorage = localStorage.getItem("cart");
  return cartStorage ? JSON.parse(cartStorage) : [];
};

// Alert
const alert = (text) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: "success",
    title: text,
  });
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addCart: (state, action) => {
      const productID = action.payload.id;
      const findProduct = state.find((product) => product.id === productID);

      if (findProduct) {
        findProduct.productQuantity += 1;
      } else {
        const productClone = { ...action.payload, productQuantity: 1 };
        state.push(productClone);
        // Toast
        alert("Added To Cart Successfully");
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCart: (state, action) => {
      const productID = action.payload.id;
      const index = state.findIndex((product) => product.id === productID);

      if (index !== -1) {
        state.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(state));
      alert("Removed From Cart Successfully");
    },
    decreaseCart: (state, action) => {
      const productID = action.payload.id;
      const findProduct = state.find((product) => product.id === productID);
      // const index = state.findIndex((product) => product.id === productID);

      if (findProduct.productQuantity > 1) {
        findProduct.productQuantity -= 1;
      } else {
        return;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addCart, removeCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
