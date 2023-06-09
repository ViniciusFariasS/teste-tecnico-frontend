import React, { useContext, useEffect, useState } from "react";
import { EStoreAction, IStoreContext } from "../../context/storeContext.interface";
import { StoreContext } from "../../context/storeContext";
import { LOGIN } from "./Login.styles";
import { Input } from "../../components/Input/Input";
import { EInputType } from "../../components/Input/Input.interface";
import { FormProvider, useForm } from "react-hook-form";
import { Loader } from "../../components/Loader/Loader";
import { Alert } from "../../utils/utils";
import { EAlertTypes } from "../../utils/global.interface";
import { getCountriesService } from "../../services/football.service";
import { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";

const Content = () => {
    const { store, dispatch } = useContext(StoreContext as React.Context<IStoreContext>);

    const [key, setKey] = useState<AxiosRequestConfig | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const methods = useForm();
    const { control, handleSubmit } = methods;

    const navigate = useNavigate();

    //"c47295fa935f6c7b2c9ecb2937f1c068";
    const onSubmit = (data: any) => {
        const config: AxiosRequestConfig = {
            headers: {
                "x-apisports-key": data.key
            }
        }
        setKey(config)
    };

    useEffect(() => {
        console.log(store.key)
        if (key) {
            setLoading(true);
            getCountriesService(key as AxiosRequestConfig)
                .then(res => {
                    if (res.data.errors.token) {
                        Alert(EAlertTypes.error, "Insira uma key válida para efetuar o login");
                    } else {
                        dispatch({ type: EStoreAction.SET_LOGIN, payload: { key: key } });
                        navigate("/Home");
                    }
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [key]);

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
                            <div className="login__box--loader">
                                <Loader />

                            </div> :
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="login__box--form-input">
                                        <span>Insira sua key para efetuar o login</span>
                                        <Input required name="key" type={EInputType.Password} placeholder="key" />
                                    </div>
                                    <div className="login__box--form-button">
                                        <Button width="224px" color="#FF914D" type="onSubmit">
                                            Entrar
                                        </Button>
                                    </div>
                                </form>
                            </FormProvider>
                    }
                </div>
            </div>
        </LOGIN >
    );
};

export {
    Content as LoginPage
}