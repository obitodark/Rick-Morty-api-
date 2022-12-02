import { TextField, Grid, InputAdornment, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useContext, useRef, useState } from "react";
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

export const arrayStatus = ["All", "Alive", "Dead", "Unknown"];
export const arrayEpecies = [
  "All",
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];
export const arrayGender = ["All", "female", "male", "genderless", "unknown"];

const BoxFilter = () => {
  const [status, setStatus] = useState(null);
  const textSearch = useRef();

  const { filter, setFilter, refresh, setrefresh, dataFilter, setDataFilter } =
    useContext(DataContext);

  const handleChange = async (e) => {
    const { name, value } = e.currentTarget;

    const data = { ...filter, name: value, page: 1 };
    await setFilter(data);
  };
  const handleSearch = async (e) => {
    const bandera = !refresh;

    setrefresh(bandera);
  };

  const handleChanges = async (e) => {
    const bandera = !refresh;
    const { name, value } = e.target;

    const valor = value === "All" ? "" : value;
    const data = { ...filter, [name]: valor, page: 1 };
    await setFilter(data);
    setrefresh(bandera);
  };
  return (
    <div>
      <Grid container>
        <Grid item container spacing={2} xs={12} sm={12} lg={10} xl={9}>
          <Grid item xs={12} sm={6} lg={3} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              id="filled-search"
              label="Search field"
              type="search"
              variant="outlined"
              defaultValue={filter.name !== "" ? filter.name : ""}
              onChange={handleChange}
              ref={textSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                    <SearchIcon onClick={handleSearch} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Status"
              name="status"
              defaultValue={filter.status !== "" ? filter.status : "All"}
              onChange={handleChanges}
              helperText="Please select Status"
            >
              {arrayStatus.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Especies"
              name="species"
              defaultValue={filter.species !== "" ? filter.species : "All"}
              onChange={handleChanges}
              helperText="Please select Especies"
            >
              {arrayEpecies.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Gender"
              name="gender"
              defaultValue={filter.gender !== "" ? filter.gender : "All"}
              onChange={handleChanges}
              helperText="Please select Gender"
            >
              {arrayGender.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BoxFilter;
