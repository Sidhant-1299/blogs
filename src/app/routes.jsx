import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Post from "../pages/Post";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:slug", element: <Post /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
