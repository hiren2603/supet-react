import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/ui/Layout";
// import Home  from '@/pages/Home/Home.jsx'
// import About from './pages/About/About.jsx'
// import School from './pages/School/School.jsx'
// import Hostels from './pages/Hostels/Hostels.jsx'
// import SportsGym from './pages/SportsGym/SportsGym.jsx'
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
} from "@/pages";
import Clubs from "./pages/Clubs/Clubs";
import Initiatives from "./pages/Initiatives/Initiatives";

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
            path: "programs/houses",
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
            path: "programs/recognition",
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
