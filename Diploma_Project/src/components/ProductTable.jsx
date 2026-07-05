import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#f5f5f5" }}>
            <TableCell>
              <strong>Photo</strong>
            </TableCell>
            <TableCell>
              <strong>Category</strong>
            </TableCell>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Quantity</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Price</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Edit</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Delete</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              hover
              sx={{
                "&:last-child td": {
                  borderBottom: 0,
                },
              }}
            >
              <TableCell>
                <Avatar
                  src={product.photo}
                  variant="rounded"
                  sx={{
                    width: 60,
                    height: 60,
                  }}
                />
              </TableCell>

              <TableCell>
                <Typography fontWeight={600}>{product.category}</Typography>
              </TableCell>

              <TableCell>{product.name}</TableCell>

              <TableCell align="center">{product.quantity}</TableCell>

              <TableCell align="center">${product.price}</TableCell>

              <TableCell align="center">
                <IconButton color="primary" onClick={() => onEdit(product)}>
                  <EditIcon />
                </IconButton>
              </TableCell>

              <TableCell align="center">
                <IconButton color="error" onClick={() => onDelete(product)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
