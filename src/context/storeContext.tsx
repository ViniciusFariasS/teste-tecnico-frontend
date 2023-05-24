import React, { createContext, useReducer, Context, ReactNode } from "react";
import { EStoreAction, IStoreAction, IStoreContext, IStoreContextProviderProps, IStoreData } from "./storeContext.interface";


const StoreContext = createContext<IStoreContext | null>(null);

function setReducer(state: IStoreData, action: IStoreAction): IStoreData {
    const { type, payload } = action;
    switch (type) {
        case EStoreAction.SET_LOGIN:
            console.log(payload);
            return { ...state, key: payload.key };
        default:
            return state;
    }
}

const initialState: IStoreData = {
    key: {
        headers: {
            "x-apisports-key": ""
        }
    }
};



const StoreContextProvider = ({ children }: IStoreContextProviderProps) => {
    const [store, dispatch] = useReducer(setReducer, initialState);
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreContextProvider };