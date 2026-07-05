import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, Card, Divider, Paper, Typography } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SpaIcon from "@mui/icons-material/Spa";
import CoffeeIcon from "@mui/icons-material/Coffee";
import GradeIcon from "@mui/icons-material/Grade";
import Header from "../components/Header";
import { getProductsRequest } from "../redux/products/productsSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductsRequest());
    }
  }, [dispatch, products.length]);

  const product = useMemo(
    () => products.find((item) => String(item.id) === id),
    [products, id],
  );

  if (loading || !products.length) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ p: 5 }}>
        <Typography variant="h5">Product not found</Typography>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate("/preview")}
        >
          Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: 3,
            pt: 2,
            pb: 3,
          }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/preview")}
            sx={{
              bgcolor: "#1976d2",
              mb: 3,
              "&:hover": {
                bgcolor: "#1565c0",
              },
            }}
          >
            Back
          </Button>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              alignItems: "flex-start",
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 2,
                borderRadius: 4,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={product.photo}
                alt={product.name}
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  objectFit: "contain",
                }}
              />
            </Paper>

            <Box>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {product.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#32b768",
                  mt: 1,
                }}
              >
                <CheckCircleIcon />

                <Typography variant="h6" fontWeight={500}>
                  In stock
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#e53935",
                  fontWeight: 700,
                  mt: 2,
                  mb: 2,
                  fontSize: 30,
                }}
              >
                ${product.price}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Inventory2Icon />

                <Typography variant="h6">
                  Quantity: {product.quantity}
                </Typography>
              </Box>

              <Divider sx={{ mb: 4 }} />

              <Typography variant="h5" fontWeight={700} gutterBottom>
                Description
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  lineHeight: 1.8,
                  fontSize: 16,
                  mb: 4,
                }}
              >
                {product.description}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 2,
                }}
              >
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <SpaIcon color="success" sx={{ fontSize: 36 }} />
                  <Typography fontWeight={700} mt={1}>
                    Natural
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Only premium tea leaves.
                  </Typography>
                </Card>

                <Card sx={{ p: 2, textAlign: "center" }}>
                  <CoffeeIcon color="success" sx={{ fontSize: 36 }} />
                  <Typography fontWeight={700} mt={1}>
                    Premium Taste
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rich aroma and smooth flavor.
                  </Typography>
                </Card>

                <Card sx={{ p: 2, textAlign: "center" }}>
                  <GradeIcon color="success" sx={{ fontSize: 36 }} />
                  <Typography fontWeight={700} mt={1}>
                    High Quality
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Carefully selected premium tea.
                  </Typography>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
