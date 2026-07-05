import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,

  selectedProduct: null,

  isProductModalOpen: false,
  isDeleteModalOpen: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // GET PRODUCTS
    getProductsRequest(state) {
      state.loading = true;
      state.error = null;
    },

    getProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },

    getProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // ADD PRODUCT
    addProductRequest(state) {
      state.loading = true;
    },

    addProductSuccess(state) {
      state.loading = false;
    },

    // UPDATE PRODUCT
    updateProductRequest(state) {
      state.loading = true;
    },

    updateProductSuccess(state) {
      state.loading = false;
    },

    // DELETE PRODUCT
    deleteProductRequest(state) {
      state.loading = true;
    },

    deleteProductSuccess(state) {
      state.loading = false;
    },

    // PRODUCT MODAL
    openProductModal(state, action) {
      state.isProductModalOpen = true;
      state.selectedProduct = action.payload || null;
    },

    closeProductModal(state) {
      state.isProductModalOpen = false;
      state.selectedProduct = null;
    },

    // DELETE MODAL
    openDeleteModal(state, action) {
      state.isDeleteModalOpen = true;
      state.selectedProduct = action.payload;
    },

    closeDeleteModal(state) {
      state.isDeleteModalOpen = false;
      state.selectedProduct = null;
    },
  },
});

export const {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,

  addProductRequest,
  addProductSuccess,

  updateProductRequest,
  updateProductSuccess,

  deleteProductRequest,
  deleteProductSuccess,

  openProductModal,
  closeProductModal,

  openDeleteModal,
  closeDeleteModal,
} = productsSlice.actions;

export default productsSlice.reducer;
