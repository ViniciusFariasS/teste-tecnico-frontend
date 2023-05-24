import { useController } from "react-hook-form";
import { IInputProps } from "./Input.interface";
import { ERRORMESSAGE, INPUTFIELD, INPUTWRAPPER, LABEL } from "./Input.style";
import { useEffect, FC } from "react";

const Input: FC<IInputProps> = ({
    control,
    name,
    label,
    type = 'text',
    placeholder = '',
    ...rest }) => {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: { required: '* Campo obrigatório' },
        defaultValue: '',
    });

    useEffect(() => {
        console.log({ ...rest });
    }, [])


    return (
        <INPUTWRAPPER>
            {label && <LABEL htmlFor={name}>{label}</LABEL>}
            <INPUTFIELD
                ref={ref}
                id={name}
                type={type}
                placeholder={placeholder}
                {...inputProps}
                {...rest}
            />
            {error && <ERRORMESSAGE>{error.message}</ERRORMESSAGE>}
        </INPUTWRAPPER>

    );
};

export {
    Input
}