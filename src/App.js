import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import {createHashRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import Person from "./pages/Person";
import Thieves from "./pages/Thieves";
import Home from "./pages/Home";

const router = createHashRouter([
    {
        path: "/",
        element: (<div><Header/><Home/></div>)
    },
    {
        path: "/Thieves",
        element: (<div><Header/><Thieves/></div>)
    },
    {
        path: "/Person/:id",
        element: (<div><Header/><Person/></div>)
    }
])

function App() {
    return (
        <React.StrictMode>

            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}

export default App;
