import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<div><Header/></div>)
    },
    {
        path: "/thieves",
        element: (<div><Header /></div>)
    }
])

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
