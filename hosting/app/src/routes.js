import { Navigate } from "react-router-dom";

import TemplatesHome from "./pages/templates";
import TextGenerator, { templateLoader } from "./pages/templates/generator";
import App from "./App";

export const routes = [
  {
    path: "",
    element: <App />,
    errorElement: <Navigate to="/" />,
    children: [
      { index: true, element: <Navigate to="modelos" /> },
      {
        path: "modelos",
        children: [
          { index: true, element: <TemplatesHome /> },
          {
            path: ":templateId",
            element: <TextGenerator />,
            loader: templateLoader,
          },
        ],
      },
    ],
  },
];
