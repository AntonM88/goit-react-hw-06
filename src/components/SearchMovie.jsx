import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage";
import { searchMovie } from "./services/api";

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ film: "batman" });
    console.log(111);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
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
