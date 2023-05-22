import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login/Content";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
        </Routes>
    );
}

export { Router }