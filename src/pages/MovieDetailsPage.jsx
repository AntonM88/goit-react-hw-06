import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { fetchOneMovie } from "../components/services/api";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const data = await fetchOneMovie(moviesId);

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [moviesId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {movie ? <MovieInfo {...movie} /> : <p>No movie data available</p>}
      {error && <p>Error: {error}</p>}
    </>
  );
};
export default MovieDetailsPage;
