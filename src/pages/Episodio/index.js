import { Typography, Container, Grid, Backdrop, Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { ViewListCart, ViewBoxFilterEpisodes } from "../../components";
import { DataContext } from "../../context/DataProvider";

const Episodio = () => {
  const { open, dataCharacterByEpisodes, dataEpisodes, numEpisodes } =
    useContext(DataContext);
  return (
    <div>
      <Container maxWidth="xl">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid container mt={3}>
          <Grid item>
            <Typography variant="h2" color="white">
              Rick & Morty
            </Typography>
            <Typography variant="h4" color="white" fontWeight={100}>
              Episodio {` (${numEpisodes}) :` + dataEpisodes.name}
            </Typography>
            <Typography variant="h5" color="white" fontWeight={100}>
              Air Date :{dataEpisodes.air_date}
            </Typography>
            <Typography variant="h6" color="white" sx={{ fontWeight: "100" }}>
              Lista de Personajes
            </Typography>
          </Grid>

          <Grid item xs={12} my={2}>
            <ViewBoxFilterEpisodes />
            <Divider sx={{ background: "#4F5262", width: "100%" }} />
          </Grid>

          <Grid item xs={12}>
            <ViewListCart dataCharacter={dataCharacterByEpisodes} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Episodio;
