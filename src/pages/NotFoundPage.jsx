import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png" />
      <Link to="/">Home</Link>
    </div>
  );
};
export default NotFoundPage;
