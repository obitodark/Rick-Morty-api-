import { api_url } from "../api";

const getfilterEpisodes = async (episodes = 1) => {
  try {
    const response = await fetch(`${api_url}/episode/${episodes}`, {
      method: "GET",
      "Content-Type": "application/json",
    });
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const ServicesEpisodes = {
  getfilterEpisodes,
};
export default ServicesEpisodes;
