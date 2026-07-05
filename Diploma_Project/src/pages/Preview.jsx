import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { getProductsRequest } from "../redux/products/productsSlice";

export default function Preview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Box sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Products Preview
          </Typography>

          <Button variant="contained" onClick={() => navigate("/products")}>
            Back
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 4,
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </>
  );
}
