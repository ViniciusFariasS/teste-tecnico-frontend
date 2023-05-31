import { useController, useFormContext } from "react-hook-form";
import { EInputType, IInputProps } from "./Input.interface";
import { ERRORMESSAGE, INPUTFIELD, INPUTWRAPPER, LABEL, SELECT } from "./Input.style";
import { useEffect, FC } from "react";

const Input: FC<IInputProps> = ({
    name,
    label,
    type = EInputType.Text,
    placeholder = '',
    options,
    required = false,
    disabled = false,
    ...rest
}) => {
    const { control } = useFormContext();

    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: required ? { required: '* Campo obrigatório' } : {},
        defaultValue: '',
    });

    const selectProps = type === EInputType.Select ? inputProps : {};

    return (
        <INPUTWRAPPER>
            {label && <LABEL htmlFor={name}>{label}</LABEL>}
            {
                type === EInputType.Select ?
                    <SELECT ref={ref} id={name} {...selectProps} disabled={options ? false : true}>
                        
                        {
                            options?.map((opt) => (
                                <option key={`${opt.id}-${opt.name}`} value={opt.id}>{opt.name}</option>
                            ))
                        }
                    </SELECT> :
                    <INPUTFIELD
                        ref={ref}
                        id={name}
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        {...inputProps}
                        {...rest}
                    />
            }
            {error && <ERRORMESSAGE>{error.message}</ERRORMESSAGE>}
        </INPUTWRAPPER>
    );
};

export {
    Input
}