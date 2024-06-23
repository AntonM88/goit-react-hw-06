import { useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const MovieInfo = ({
  title,
  id,
  overview,
  genres,
  popularity,
  poster_path,
}) => {
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/");
  return (
    <div className="">
      <Link className="btn" to={goBackRef.current}>
        Go Back
      </Link>
      <img
        className="w-80"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <p className="font-bold">Title: {title}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map((item) => item.name).join(", ")}</p>
      <p>Popularity: {Math.ceil(popularity) / 10}</p>

      <ul>
        <li>
          <NavLink className="text-sky-500 font-bold underline" to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className="text-sky-500 font-bold underline" to="reviews">
            Review
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieInfo;
