import { Control, FieldValues } from "react-hook-form";
export interface IInputProps {
    control: any;
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
}

export enum EInputType {
    Text = "text",
    Number = "number",
    Password = "password"
}