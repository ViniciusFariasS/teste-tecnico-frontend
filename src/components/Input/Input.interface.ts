
export interface IInputProps {
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    options?: Array<ISelectOption>;
    disabled?: boolean;
}

export enum EInputType {
    Text = "text",
    Number = "number",
    Password = "password",
    Select = "select"
}

export interface ISelectOption {
    id: string;
    name: string;
}