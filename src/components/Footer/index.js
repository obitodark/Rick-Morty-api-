import { Container, Box } from "@mui/material";
import { Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  const categories = [
    "Moda Hombre",
    "Moda mujer",
    "Computo",
    "Tv y Audio",
    "ElectroHogar",
    "DecoHogar",
  ];
  const pages = [
    "Home",
    "Login",
    "RegistroUsuarios",
    "ListaProductos",
    "DetalleProductos",
    "ListaFavoritos",
    "CarroCompra",
  ];

  return (
    <footer>
      <Box sx={{ background: "#0C0E18" }} p={3}>
        <Container maxWidth="lg">
          <Typography variant="h2" color="white">
            Rick & Morty
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
