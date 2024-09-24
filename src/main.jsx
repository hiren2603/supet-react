import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/ui/Layout";

import {
  Home,
  About,
  School,
  Hostels,
  SportsGym,
  Bhojanalaya,
  Houses,
  Recognition,
  Health,
  Clubs,
  Initiatives,
  News,
  Contact,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        children: [
          {
            path: "/campus/school",
            element: <School />,
          },
          {
            path: "/campus/sports-gym",
            element: <SportsGym />,
          },
          {
            path: "/campus/hostels",
            element: <Hostels />,
          },
          {
            path: "/campus/mesh",
            element: <Bhojanalaya />,
          },
        ],
      },
      {
        children: [
          {
            path: "/programs/house-system",
            element: <Houses />,
          },
          {
            path: "programs/clubs",
            element: <Clubs />,
          },
          {
            path: "programs/houses",
            element: <Houses />,
          },
          {
            path: "programs/recognition-awards",
            element: <Recognition />,
          },
          {
            path: "programs/health",
            element: <Health />,
          },
          {
            path: "programs/initiatives",
            element: <Initiatives />,
          },
        ],
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
