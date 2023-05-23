import React, { useContext } from "react";
import { EStoreAction, IStoreContext } from "../../context/storeContext.interface";
import { StoreContext } from "../../context/storeContext";

const Content = () => {
    const { store, dispatch } = useContext(StoreContext as React.Context<IStoreContext>);

    const handleLogin = () => {
        const loginPayload = "mylogin";
        dispatch({ type: EStoreAction.SET_LOGIN, payload: loginPayload });
    };

    return (
        <div>            
            <p>Login: {store.key}</p>
            <button onClick={handleLogin}>Set Login</button>
        </div>
    );
};

export {
    Content as LoginPage
}