import { call, put, takeLatest } from "redux-saga/effects";

import {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  addProductRequest,
  addProductSuccess,
  updateProductRequest,
  updateProductSuccess,
  deleteProductRequest,
  deleteProductSuccess,
} from "./productsSlice";

import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productsApi";

function* getProductsWorker() {
  try {
    const { data } = yield call(getProducts);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

function* addProductWorker(action) {
  try {
    yield call(addProduct, action.payload);
    yield put(addProductSuccess());
    yield put(getProductsRequest());
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

function* updateProductWorker(action) {
  try {
    yield call(updateProduct, action.payload);
    yield put(updateProductSuccess());
    yield put(getProductsRequest());
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

function* deleteProductWorker(action) {
  try {
    yield call(deleteProduct, action.payload);
    yield put(deleteProductSuccess());
    yield put(getProductsRequest());
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

export default function* productsSaga() {
  yield takeLatest(getProductsRequest.type, getProductsWorker);
  yield takeLatest(addProductRequest.type, addProductWorker);
  yield takeLatest(updateProductRequest.type, updateProductWorker);
  yield takeLatest(deleteProductRequest.type, deleteProductWorker);
}
