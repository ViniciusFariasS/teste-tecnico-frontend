import { useForm } from "react-hook-form"
import { EInputType } from "../../components/Input/Input.interface";
import { Input } from "../../components/Input/Input";
import { HOME } from "./Home.style";
import { Row } from "../../components/Row/Row";

const Home = () => {
    const methods = useForm();

    const onSubmit = () => {

    }

    const { handleSubmit, control } = methods;
    return (
        <HOME>
            <Row columns={3}>
                <Input control={control} name="key" type={EInputType.Select} placeholder="key" />
                <Input control={control} name="key" type={EInputType.Select} placeholder="key" />
                <Input control={control} name="key" type={EInputType.Select} placeholder="key" />
            </Row>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login__box--form-input">
                    <span>Insira sua key para efetuar o login</span>
                    <Input control={control} name="key" type={EInputType.Select} placeholder="key" />
                </div>
            </form>
        </HOME>
    )
}

export {
    Home as HomePage
}