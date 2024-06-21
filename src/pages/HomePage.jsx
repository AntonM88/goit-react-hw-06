import FilmList from "../components/FilmList";
import { useEffect, useState } from "react";
import { fetchMovies } from "../components/services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <FilmList movies={movies} />
    </>
  );
};
export default HomePage;
