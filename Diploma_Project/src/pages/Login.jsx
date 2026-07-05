import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

import {
  Box,
  Button,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const onSubmit = (values) => {
    if (values.login === "admin" && values.password === "123456") {
      localStorage.setItem("token", "logged");

      navigate("/products");
    } else {
      alert("Wrong login or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #44b749 0%, #2e7d32 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 420,
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Box
          component="img"
          src="/logo.svg"
          alt="Rozetka"
          sx={{
            display: "block",
            width: 220,
            margin: "0 auto 30px",
          }}
        />

        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="login">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Login"
                    fullWidth
                    margin="normal"
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Password"
                    fullWidth
                    margin="normal"
                    type={showPassword ? "text" : "password"}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  background: "#44b749",
                  height: 46,
                  fontSize: 16,
                  fontWeight: 600,
                  transition: "0.2s",
                  "&:hover": {
                    background: "#37943b",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Login
              </Button>
            </form>
          )}
        />
      </Paper>
    </Box>
  );
}
