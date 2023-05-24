import React, { useContext, useEffect, useState } from "react";
import { EStoreAction, IStoreContext } from "../../context/storeContext.interface";
import { StoreContext } from "../../context/storeContext";
import { LOGIN } from "./Login.styles";
import { Input } from "../../components/Input/Input";
import { EInputType } from "../../components/Input/Input.interface";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { Loader } from "../../components/Loader/Loader";
//@ts-ignore
import ball from "../../assets/ball.png";

const Content = () => {
    const { store, dispatch } = useContext(StoreContext as React.Context<IStoreContext>);

    const [key, setKey] = useState<string | "">("");
    const [loading, setLoading] = useState<boolean>(true);

    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleLogin = () => {
        const loginPayload = "c47295fa935f6c7b2c9ecb2937f1c068";
        dispatch({ type: EStoreAction.SET_LOGIN, payload: loginPayload });
    };

    useEffect(() => {
        const config = {
            headers: {
                "x-apisports-key": "dsadasdasdsaasd"
            }
        };


    }, [])

    return (
        <LOGIN>
            <div className="login__logo">
                <span>FOOTBALL</span>
                <div className="login__logo--slogan">
                    <span>Acompanhe o mundo do futebol</span>
                </div>
            </div>
            <div className="login__box">
                <div className="login__box--form">
                    <div className="login__box--form-title">
                        <h2>Login</h2>
                    </div>
                    {
                        loading ?
                            <Loader /> :
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="login__box--form-input">
                                    <span>Insira sua key para efetuar o login</span>
                                    <Input control={control} name="name" type={EInputType.Password} />
                                </div>
                                <div className="login__box--form-button">
                                    <button type="submit">Entrar</button>
                                </div>
                            </form>
                    }
                </div>
            </div>
        </LOGIN >
    );
};

export {
    Content as LoginPage
}