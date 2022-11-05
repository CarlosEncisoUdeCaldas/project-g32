import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
  } from "react-router-dom";
import IndexApp from '../IndexApp'
import Home from '../Home'
import Contador from "../components/Contador/Contador";
import Saludo from "../components/Saludo/Saludo";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import LoginForm from "../components/LoginForm/LoginForm";

export const router = createBrowserRouter(
    createRoutesFromElements( [
        <Route path="/" element={ <IndexApp />}>,
            <Route index element={ <Home /> } />,
            <Route path="/contador" element={ <Contador /> } />,
            <Route path="/saludo" element={ <Saludo /> } />,
            <Route path="/register" element={ <RegisterForm /> } />,
            <Route path="/login" element={ <LoginForm /> } />,
        </Route>
        ]
    )
)