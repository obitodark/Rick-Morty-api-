import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const BoxFilterEpisodes = () => {
  const { refreshEpisodio, setRefreshEpisodio, setNumEpisodes } =
    useContext(DataContext);
  const hanadleSelectChange = (e) => {
    const { value } = e.target;

    const bandera = !refreshEpisodio;
    setNumEpisodes(value);
    setRefreshEpisodio(bandera);
  };
  return (
    <div>
      <Grid container>
        <Grid item container spacing={2} xs={12} sm={8} lg={3} xl={3} my={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Episodio</InputLabel>
            <Select
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // defaultValue={1}
              label="Brand"
              size="large"
              name="brand_id"
              helperText="Please select Status"
              onChange={hanadleSelectChange}
            >
              {[...Array(51).keys()].map((num, index) => (
                <MenuItem key={index} value={num + 1}>
                  Episodio : {num + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default BoxFilterEpisodes;
