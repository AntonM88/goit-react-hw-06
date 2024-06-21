import { Link } from "react-router-dom";

export const FilmList = ({ movies }) => {
  return (
    <>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-indigo-600 tracking-wide">
        Trending today
      </h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilmList;
