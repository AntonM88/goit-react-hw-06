import { useParams } from "react-router-dom";

export const Cast = () => {
  const { id } = useParams();
  return <div>Cast</div>;
};
export default Cast;
