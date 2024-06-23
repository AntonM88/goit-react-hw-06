import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "1de1dfdf9e705f64cc6789aed75b4ee7";

export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const fetchOneMovie = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const searchMovie = async (query) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data.results;
};

export const fetchCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.cast;
};

export const fetchReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};
