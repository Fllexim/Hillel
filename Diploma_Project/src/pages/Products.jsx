import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import DeleteModal from "../components/DeleteModal";
import Header from "../components/Header";
import {
  getProductsRequest,
  addProductRequest,
  updateProductRequest,
  deleteProductRequest,
  openProductModal,
  closeProductModal,
  openDeleteModal,
  closeDeleteModal,
} from "../redux/products/productsSlice";

export default function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    products,
    selectedProduct,
    isProductModalOpen,
    isDeleteModalOpen,
    loading,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  const handleSubmit = (values) => {
    if (selectedProduct) {
      dispatch(
        updateProductRequest({
          id: selectedProduct.id,
          product: values,
        }),
      );
    } else {
      dispatch(addProductRequest(values));
    }

    dispatch(closeProductModal());
  };

  return (
    <>
      <Header />

      <Box sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Products
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/preview")}
            >
              Preview
            </Button>

            <Button
              variant="contained"
              onClick={() => dispatch(openProductModal(null))}
            >
              Add Product
            </Button>

            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>

        <ProductTable
          products={products}
          onEdit={(product) => dispatch(openProductModal(product))}
          onDelete={(product) => dispatch(openDeleteModal(product))}
        />

        <ProductModal
          open={isProductModalOpen}
          onClose={() => dispatch(closeProductModal())}
          title={selectedProduct ? "Edit Product" : "Add Product"}
          initialValues={selectedProduct}
          onSubmit={handleSubmit}
        />

        <DeleteModal
          open={isDeleteModalOpen}
          onClose={() => dispatch(closeDeleteModal())}
          onDelete={() => {
            dispatch(deleteProductRequest(selectedProduct.id));
            dispatch(closeDeleteModal());
          }}
        />
      </Box>
    </>
  );
}
