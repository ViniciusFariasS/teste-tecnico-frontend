import { useEffect } from "react";
import api from "../../services/api";
import { getTimezoneService } from "../../services/football.service";

const Content = () => {

    useEffect(() => {
        getTimezoneService("c47295fa935f6c7b2c9ecb2937f1c068")
            .then(res => console.log(res))
    }, [])


    return (
        <div>
            Iniciando a estruturação do projeto
        </div>
    );
}

export {
    Content as LoginPage
}