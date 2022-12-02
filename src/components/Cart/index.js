import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import "./css.css";

export const styleImage = {
  width: "160px",

  zIndex: 2,
};

const Cart = ({ personaje, setOpen }) => {
  const { getCharacterById } = useContext(DataContext);
  const styleBox = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    background: "#1C1F37",
    borderRadius: "15px",
    color: "#FFFFFF",
    // border: "1px solid transparent",
    // boxShadow: "20px 20px 60px #181a2f",
    "&:hover": {
      border: `1px solid ${
        personaje.status === "Dead"
          ? "#ff2d75"
          : personaje.status === "Alive"
          ? " #4CE48F"
          : " #2B91F8"
      }`,
    },
  };
  const handleOpenModal = (id) => {
    getCharacterById(id);
    console.log("idddddddd", id);
    setOpen(true);
  };
  return (
    <Card
      elevation={24}
      className="box_Product"
      sx={styleBox}
      onClick={() => handleOpenModal(personaje.id)}
    >
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          className="image"
          component="img"
          sx={styleImage}
          image={personaje.image}
          alt="Live from space album cover"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body1">
            {personaje.name}
          </Typography>
          <Typography variant="subtitle1" color="#656985" component="div">
            {personaje.species}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#656985"
            component="div"
            sx={{
              color:
                personaje.status === "Dead"
                  ? "#ff2d75"
                  : personaje.status === "Alive"
                  ? " #4CE48F"
                  : " #2B91F8",
            }}
          >
            {personaje.status}
          </Typography>
        </CardContent>
      </Box>

      <Box
        sx={{
          position: "absolute",
          borderRadius: "50%",
          bottom: "-50px",
          left: "103%",
          width: "100px",
          height: "100px",
          background: "#1C1F37",
          boxShadow:
            personaje.status === "Dead"
              ? " 0 0 0 10px #ff2d7544, 0 0 100px #ff2d75, 0 0 200px #ff2d75"
              : personaje.status === "Alive"
              ? "0 0 0 10px #4CE48F44, 0 0 100px #4CE48F, 0 0 200px #4CE48F"
              : "0 0 0 10px #2B91F844, 0 0 100px #2B91F8, 0 0 200px #2B91F8",
        }}
      ></Box>
    </Card>
  );
};
export default Cart;
