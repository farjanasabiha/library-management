import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./provider/AuthProvider";
import AddBook from "./Pages/AddBook/AddBook";
import AllBooks from "./Pages/AllBooks/AllBooks";
import BorrowedBooks from "./Pages/BorrowedBooks/BorrowedBooks";
import ErrorPage from "./ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import UpdatePage from "./Pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/AddBook",
        element: (
          <PrivateRouter>
            <AddBook></AddBook>
          </PrivateRouter>
        ),
      },
      {
        path: "/AllBooks",
        element: (
          <PrivateRouter>
            <AllBooks></AllBooks>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/BorrowedBooks",
        element: (
          <PrivateRouter>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRouter>
        ),
      },
      {
        path: "updatePage/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
