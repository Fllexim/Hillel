import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/preview/${product.id}`)}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={product.photo}
        alt={product.name}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>

        <Chip
          label={product.category}
          color="success"
          size="small"
          sx={{ width: "fit-content", mb: 2 }}
        />

        <Typography>
          <strong>Quantity:</strong> {product.quantity}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <strong>Price:</strong> ${product.price}
        </Typography>

        <Typography sx={{ mt: "auto" }}>{product.description}</Typography>
      </CardContent>
    </Card>
  );
}
