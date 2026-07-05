import { Form, Field } from "react-final-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";

export default function ProductModal({
  open,
  onClose,
  title,
  initialValues,
  onSubmit,
}) {
  const validate = (values) => {
    const errors = {};

    if (!values.category) errors.category = "Required";
    if (!values.name) errors.name = "Required";
    if (!values.quantity) errors.quantity = "Required";
    if (!values.price) errors.price = "Required";
    if (!values.description) errors.description = "Required";

    return errors;
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>

      <Form
        initialValues={
          initialValues || {
            category: "",
            name: "",
            quantity: "",
            price: "",
            photo: "/tea.jpeg",
            description: "",
          }
        }
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Stack spacing={2}>
                <Field name="category">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Category"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>

                <Field name="name">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Name"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>

                <Field name="quantity">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Quantity"
                      type="number"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>

                <Field name="price">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Price"
                      type="number"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>

                <Field name="description">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Description"
                      multiline
                      rows={4}
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Stack>
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>

              <Button
                type="submit"
                variant="contained"
                disabled={submitting || pristine}
              >
                Save
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </Dialog>
  );
}
