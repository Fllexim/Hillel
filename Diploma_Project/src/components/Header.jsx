import { AppBar, Toolbar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#42b75c",
        boxShadow: 2,
      }}
    >
      <Toolbar sx={{ height: 60 }}>
        <Box
          component="img"
          src="/logo-White.png"
          alt="Logo"
          onClick={() => navigate("/products")}
          sx={{
            height: 35,
            cursor: "pointer",
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
