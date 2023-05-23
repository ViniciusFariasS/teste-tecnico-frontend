import { ReactNode } from "react";

export interface IStoreData {
    key: string;
}

export enum EStoreAction {
    SET_LOGIN = "SET_LOGIN",
}

export interface IStoreAction {
    type: EStoreAction;
    payload: string;
}

export interface IStoreContext {
    store: IStoreData;
    dispatch: React.Dispatch<IStoreAction>;
}

export interface IStoreContextProviderProps {
    children: ReactNode;
}