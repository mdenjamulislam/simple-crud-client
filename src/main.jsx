import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/Users.jsx";
import Update from "./components/Update.jsx";
import Products from "./pages/Products.jsx";
import Root from "./pages/Root/Root.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/users",
                element: <Users />,
                loader: () => fetch("http://localhost:5000/users"),
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
            },
            {
                path: "/products",
                element: <Products />,
                loader: () => fetch("http://localhost:5000/products")
            },
            {
                path: "/products/:id",
                element: <UpdateProduct />,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
