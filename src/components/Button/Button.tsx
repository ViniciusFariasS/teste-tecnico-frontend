import { IButtonProps } from "./Button.interface";
import { BUTTON } from "./Button.styles";

const Button = ({ width, children, color, type }: IButtonProps) => {
    return (
        <BUTTON width={width} color={color} type={type}>
            {children}
        </BUTTON>
    );
}

export {
    Button
}