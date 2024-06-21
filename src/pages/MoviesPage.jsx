import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import SearchMovie from "../components/SearchMovie";
import { useEffect, useState } from "react";
import { searchMovie } from "../components/services/api";

const MoviesPage = () => {
  const style = "text-blue-500 hover:text-blue-800 px-4 py-2";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("film") ?? "";
  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await searchMovie(query);
        console.log(data);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);
  return <SearchMovie />;
};
export default MoviesPage;
