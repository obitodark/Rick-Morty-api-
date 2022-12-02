import { api_url } from "../api";

export const getPersonajes = async (
  page = 1,
  name = "",
  status = "",
  gender = "",
  species = ""
) => {
  try {
    const response = await fetch(
      `${api_url}/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getCharacterByEpisodes = async (episodes) => {
  try {
    const response = await fetch(`${api_url}/character/${episodes}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const getCharacterById = async (id = 1) => {
  try {
    const response = await fetch(`${api_url}/character/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getSearch = async (name) => {
  try {
    const response = await fetch(`${api_url}/character/?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

const Services = {
  getPersonajes,
  getCharacterById,
  getSearch,
  getCharacterByEpisodes,
};
export default Services;
