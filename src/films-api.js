import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjU1NjA1OGRlY2ZlYWRhNmY3MjhiYzM0NTQyYmRhYiIsIm5iZiI6MTczNjU4NzY4OC4zODcsInN1YiI6IjY3ODIzOWE4MmIyOWE5MThkMDRlYTNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RU2nChvquPZ-rob3GTSKC7MUmPobQ6X8Ibem-gh11pk";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;

axios.defaults.headers.common["accept"] = "application/json";

export async function getHomePageFilms() {
  const response = await axios.get("/trending/movie/day", {
    params: { language: "en-US" },
  });
  return response.data.results;
}

export async function getFilmById(id) {
  const response = await axios.get(`/movie/${id}`, {
    params: { language: "en-US" },
  });
  return response.data;
}

export async function getCastById(id) {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: { language: "en-US" },
  });
  return response.data.cast;
}

export async function getReviewsById(id) {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: { language: "en-US" },
  });
  return response.data.results;
}

export async function getSearchFilms(query) {
  const response = await axios.get("/search/movie", {
    params: { language: "en-US", query },
  });
  return response.data.results;
}