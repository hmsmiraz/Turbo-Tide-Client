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
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import ProductUpdate from "./Components/Pages/ProductUpdate/ProductUpdate";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import AuthProviders from "./Components/Providers/AuthProviders";
import Users from "./Components/Pages/Users/Users";
import Cart from "./Components/Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/addBrand",
        element: <AddingBrand></AddingBrand>,
      },
      {
        path: "/addProduct",
        element: <AddingProduct></AddingProduct>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/brand/:name",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/product/:id",
        element: <ProductUpdate></ProductUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: ()=> fetch('http://localhost:5000/cart')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>
);
