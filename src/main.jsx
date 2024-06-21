import ReactDOM from "react-dom/client";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
