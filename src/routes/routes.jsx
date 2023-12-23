import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Registration from "../pages/Authentication/Registration/Registration";
import Authentication from "../pages/Authentication/Authentication";
import Login from "../pages/Authentication/Login/Login";
import Notfound from "../pages/Notfound/Notfound";
import Users from "../pages/Users/Users";
import UserDetails from "../pages/UserDetails/UserDetails";
import Products from "../pages/Products/Products";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("https://dummyjson.com/products?limit=0"),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://dummyjson.com/users?limit=0"),
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.id}`),
      },
      {
        path: "/authentication",
        element: <Authentication />,
        children: [
          {
            path: "/authentication/registration",
            element: <Registration />,
          },
          {
            path: "/authentication/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
