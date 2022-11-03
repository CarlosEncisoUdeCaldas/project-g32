import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
  } from "react-router-dom";
import IndexApp from '../IndexApp'
import Home from '../Home'
import Contador from "../components/Contador/Contador";
import Saludo from "../components/Saludo/Saludo";

export const router = createBrowserRouter(
    createRoutesFromElements( [
        <Route path="/" element={ <IndexApp />}>,
            <Route index element={ <Home /> } />,
            <Route path="/contador" element={ <Contador /> } />,
            <Route path="/saludo" element={ <Saludo /> } />,
        </Route>
        ]
    )
)