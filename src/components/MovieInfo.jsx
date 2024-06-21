import { NavLink, Outlet } from "react-router-dom";

const MovieInfo = ({
  title,
  id,
  overview,
  genres,
  popularity,
  poster_path,
}) => {
  return (
    <>
      <p className="font-bold">Title: {title}</p>

      <p>Overview: {overview}</p>
      <p>Genres: {genres.map((item) => item.name).join(", ")}</p>
      <p>Popularity: {Math.ceil(popularity) / 10}</p>
      <img src={poster_path} alt="" />
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Review</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieInfo;
