import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage";
import { searchMovie } from "./services/api";

const SearchMovie = () => {
  const [movie, setMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ movie });
    console.log(movie);
  };

  const onHandleChange = (e) => {
    setMovie(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onHandleChange}
          type="text"
          placeholder="Search movie..."
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Button
        </button>
      </form>
    </>
  );
};
export default SearchMovie;
