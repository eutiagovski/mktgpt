import { Navigate } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home/Home";
import Terms from "./pages/Terms/Terms";

export const routes = [
  {
    path: "",
    element: <App />,
    errorElement: <Navigate to="/" />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "termos-de-uso",
        element: <Terms term="usage" />,
      },
      {
        path: "politica-de-privacidade",
        element: <Terms term="privacy" />,
      },
    ],
  },
];
