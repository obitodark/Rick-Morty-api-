import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";

import Cart from "../Cart";
import DataModal from "../DataModal";
import "./styles.css";
export const EmptyCart = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5" color="white" my={24}>
            No se encontraron Character
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
const ListCart = ({ dataCharacter }) => {
  // const { dataCharacter } = useContext(DataContext);

  const [open, setOpen] = useState(false);
  const [idCharacter, setIdCharacter] = useState(null);

  return (
    <Container maxWidth="xl">
      <DataModal open={open} setOpen={setOpen} idCharacter={idCharacter} />
      <Grid container>
        <Grid item container spacing={3}>
          {dataCharacter !== undefined && dataCharacter.length > 0 ? (
            dataCharacter.map((personaje, index) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <Cart
                  personaje={personaje}
                  setOpen={setOpen}
                  setIdCharacter={setIdCharacter}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <EmptyCart />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListCart;
