import { createContext, useEffect, useState } from "react";
import Services from "../services/PersonajesServices";
import ServicesEpisodes from "../services/EpisodioServices";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    page: 1,
    name: "",
    status: "",
    gender: "",
    species: "",
  });

  const [numEpisodes, setNumEpisodes] = useState(1);
  const [dataCharacter, setDataCharacter] = useState([]);
  const [dataCharacterByEpisodes, setDataCharacterByEpisodes] = useState([]);
  const [dataCharacterById, setDataCharacterById] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [refreshEpisodio, setRefreshEpisodio] = useState(false);
  const [dataEpisodes, setDataEpisodes] = useState([]);
  const [dataFilter, setDataFilter] = useState({
    status: null,
    species: null,
    gender: null,
    search: null,
  });
  const [open, setOpen] = useState(false);

  const getCharacterById = async (id = 1) => {
    const response = await Services.getCharacterById(id);
    console.log("por id", response);
    setDataCharacterById(response);
  };

  const getIdsCharacter = (datas) => {
    return datas.map((data) => {
      return Number(data.split("/")[5]);
    });
  };
  const getEpisodes = async () => {
    setOpen(true);
    const response = await ServicesEpisodes.getfilterEpisodes(numEpisodes);
    setDataEpisodes(response);

    const episodes = getIdsCharacter(response.characters);

    const characters = await Services.getCharacterByEpisodes(episodes);

    await setDataCharacterByEpisodes(characters);
    setOpen(false);
  };

  const setFilterCharacter = async () => {
    setOpen(true);
    const response = await Services.getPersonajes(
      filter.page,
      filter.name,
      filter.status,
      filter.gender,
      filter.species
    );
    await setDataCharacter(response);
    setOpen(false);
  };
  useEffect(() => {
    setFilterCharacter();
  }, [refresh]);

  useEffect(() => {
    getEpisodes();
  }, [refreshEpisodio]);
  return (
    <DataContext.Provider
      value={{
        dataCharacter,

        filter,
        setFilter,
        setFilterCharacter,
        refresh,
        setrefresh,
        dataCharacterById,
        getCharacterById,
        open,
        setOpen,
        setNumEpisodes,
        dataCharacterByEpisodes,
        dataEpisodes,
        refreshEpisodio,
        setRefreshEpisodio,
        numEpisodes,
        dataFilter,
        setDataFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
