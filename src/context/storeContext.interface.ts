import { ReactNode } from "react";
import { IHeaders } from "../pages/Login/Login.interface";
import { AxiosRequestConfig } from "axios";

export interface IStoreData {
    key?: AxiosRequestConfig;
}

export enum EStoreAction {
    SET_LOGIN = "SET_LOGIN",
}

export interface IStoreAction {
    type: EStoreAction;
    payload: IStoreData;
}

export interface IStoreContext {
    store: IStoreData;
    dispatch: React.Dispatch<IStoreAction>;
}

export interface IStoreContextProviderProps {
    children: ReactNode;
}