import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/Login/Content";
import { HomePage } from "../pages/Home/Content";
import { StoreContext } from "../context/storeContext";
import { useContext } from "react";
import { IStoreContext } from "../context/storeContext.interface";

const PrivateRoute = ({ element: Element }: any) => {
    const { store, dispatch } = useContext(StoreContext as React.Context<IStoreContext>);

    const authToken = store.key;
    return (
        authToken ?
            <>
                <Element />
            </> : <Navigate to='/' />
    )
}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/Home" element={<HomePage />}></Route>
        </Routes>
    );
}

export { Router }