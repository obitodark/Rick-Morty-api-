import {
  Typography,
  Container,
  Grid,
  Backdrop,
  Pagination,
  Divider,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext, useState } from "react";
import { ViewListCart, ViewBoxFilter } from "../../components";
import { DataContext } from "../../context/DataProvider";

const Home = () => {
  const { open, dataCharacter, filter, setFilter, refresh, setrefresh } =
    useContext(DataContext);
  const [page, setPage] = useState(1);
  const handleChange = async (event, value) => {
    const bandera = !refresh;
    const getPage = { ...filter, page: value };
    await setFilter(getPage);
    setrefresh(bandera);

    setPage(value);
  };
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
            <Typography variant="h5" color="white" fontWeight={100}>
              Lista de Personajes
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item xs={12} mb={2} container justifyContent="end">
              <Grid item mb={1}>
                <Pagination
                  count={
                    dataCharacter.info !== undefined && dataCharacter.info.pages
                  }
                  variant="outlined"
                  shape="rounded"
                  onChange={handleChange}
                  page={page}
                />
              </Grid>
              <Grid item xs={12} mb={2}>
                <ViewBoxFilter />
              </Grid>
              <Divider sx={{ background: "#4F5262", width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
              <ViewListCart dataCharacter={dataCharacter.results} />
            </Grid>
            <Grid item container justifyContent="end">
              <Grid item my={3}>
                <Pagination
                  count={
                    dataCharacter.info !== undefined && dataCharacter.info.pages
                  }
                  variant="outlined"
                  shape="rounded"
                  size="large"
                  onChange={handleChange}
                  page={page}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
