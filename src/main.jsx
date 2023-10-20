import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./Components/Layouts/MainLayouts.jsx";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import Brand from "./Components/Pages/Brand/Brand";
import AddingBrand from "./Components/Pages/addingBrand/AddingBrand";
import AddingProduct from "./Components/Pages/addingProduct/addingProduct";
import Products from "./Components/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brand'),
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
        loader: () => fetch('http://localhost:5000/brand'),
      },
      {
        path: "/addBrand",
        element: <AddingBrand></AddingBrand>
      },
      {
        path: "/addProduct",
        element: <AddingProduct></AddingProduct>,
        loader: () => fetch('http://localhost:5000/products'),
      },
      {
        path: "/brand/:name",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/products'),
        //  loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.name}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);