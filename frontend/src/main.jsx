import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.scss";

import Connection from "./pages/Connection";
import Home from "./pages/Home";
import Createaccount from "./pages/CreateAccount";
import Onboarding from "./pages/Onboarding";
import ProtectedRoute from "./components/ProtectedRoute";
import Forum from "./pages/Forum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Connection /> },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: "/createaccount", element: <Createaccount /> },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/forum",
        element: (
          <ProtectedRoute>
            <Forum />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
