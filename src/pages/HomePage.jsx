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
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-indigo-600 tracking-wide">
        Trending today
      </h2>
      <FilmList movies={movies} />
    </>
  );
};
export default HomePage;
