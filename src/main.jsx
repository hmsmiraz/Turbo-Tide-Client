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
import PrivateRoutes from "./Components/Routes/PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/brand"),
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
        loader: () => fetch("https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/brand"),
      },
      {
        path: "/addBrand",
        element: <PrivateRoutes><AddingBrand></AddingBrand></PrivateRoutes>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoutes><AddingProduct></AddingProduct></PrivateRoutes>,
        loader: () => fetch("https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/products"),
      },
      {
        path: "/brand/:name",
        element: <Products></Products>,
        loader: () => fetch("https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/products"),
      },
      {
        path: "/products/:id",
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/products/${params.id}`),
      },
      {
        path: "/product/:id",
        element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/products/${params.id}`),
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
        element: <PrivateRoutes><Users></Users></PrivateRoutes>,
        loader: ()=> fetch('https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/users')
      },
      {
        path: "/cart",
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
        loader: ()=> fetch('https://turbo-tide-server-8fb5dss19-hmsmiraz.vercel.app/cart')
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
