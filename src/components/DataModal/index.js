import {
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  background: "rgba(18,18,18,0.8)",
  backdropFilter: "blur(7px)",
  overflow: "hidden",
  //   background:
  //     " linear-gradient(309deg, rgba(18,18,18,0.9) 35%, rgba(122,122,224,0.7) 100%)",
  //   overflow: "hidden",
  //   backdropFilter: "blur(5px)",

  //   border: "2px solid #000",

  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};
const DataModal = ({ open, setOpen }) => {
  const { dataCharacterById } = useContext(DataContext);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            ...style,
            width: { xs: "100%", sm: "500px" },
            height: { xs: "100%", sm: "270px" },
          }}
        >
          <Grid container sx={{ position: "relative" }} justifyContent="center">
            <Card
              sx={{
                display: { xs: "block", sm: " flex" },
                background: "none",
                boxShadow: "none",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={dataCharacterById.image}
                alt="Live from space album cover"
              />
              <Box>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", display: "block" }}
                  >
                    {dataCharacterById.name}
                  </Typography>
                  <Grid container>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      - Status :{" " + dataCharacterById.status}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      - Epecie : {"  " + dataCharacterById.species}
                    </Typography>
                  </Grid>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    - Genero :{" " + dataCharacterById.gender}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    - origen:
                    {dataCharacterById.origin !== undefined &&
                      dataCharacterById.origin.name}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
            <Box
              sx={{
                position: "absolute",
                borderRadius: "50%",
                bottom: "-50px",
                right: "-740px",
                width: "700px",
                height: "700px",
                background: "#1C1F37",
                zIndex: -1,
                boxShadow:
                  dataCharacterById.status === "Dead"
                    ? " 0 0 0 10px #ff2d7544, 0 0 200px #ff2d75, 0 0 00px #ff2d75"
                    : dataCharacterById.status === "Alive"
                    ? "0 0 0 10px #4CE48F44, 0 0 200px #4CE48F, 0 0 600px #4CE48F"
                    : "0 0 0 10px #2B91F844, 0 0 200px #2B91F8, 0 0 600px #2B91F8",
              }}
            ></Box>
            <Typography
              variant="body1"
              color="white"
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: "0px",
                right: "0px",
                cursor: "pointer",
              }}
            >
              X
            </Typography>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};
export default DataModal;
