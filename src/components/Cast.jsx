import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "./services/api";

export const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchCast(moviesId);
      setCast(data);
    };
    getCast();
  }, [moviesId]);

  if (!cast) return <h2>Loading...</h2>;

  return (
    <ul>
      {cast.map((item) => (
        <li key={item.id}>
          <img
            className="w-20"
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            alt={`photo: ${item.name} `}
          />
          <p className="text-green-400">{item.name}</p>

          <p className="text-black-400">
            Character:
            <span className="text-green-400">{item.character}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
