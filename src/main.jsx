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
import NovelCategory from "./Components/NovelCategory/NovelCategory";
import ThrillerCategory from "./Components/ThrillerCategory/ThrillerCategory";
import HistoryCategory from "./Components/HistoryCategory/HistoryCategory";
import DramaCategory from "./Components/DramaCategory/DramaCategory";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import BookCetagories from "./Pages/Home/BookCetagories/BookCetagories";
import CategoryData from "./Components/CategoryData/CategoryData";

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
        path: "/NovelCategory",
        element: (
          <PrivateRouter>
            <NovelCategory></NovelCategory>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/ThrillerCategory",
        element: (
          <PrivateRouter>
            <ThrillerCategory></ThrillerCategory>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/HistoryCategory",
        element: (
          <PrivateRouter>
            <HistoryCategory></HistoryCategory>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/DramaCategory",
        element: (
          <PrivateRouter>
            <DramaCategory></DramaCategory>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/AllBooks",
        element: (
          <PrivateRouter>
            <AllBooks></AllBooks>
          </PrivateRouter>
        ),
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
        path: "/updatePage/:id",
        element: <UpdatePage></UpdatePage>,
      },
      {
        path: "/detailsPage/:id",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/categoryData/:categoryName",
        element: <CategoryData></CategoryData>,
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
