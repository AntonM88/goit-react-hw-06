import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchMovie = () => {
  const [movie, setMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: movie });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setMovie(e.target.value);
          }}
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
