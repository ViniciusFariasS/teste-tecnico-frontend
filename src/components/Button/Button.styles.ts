import { styled } from "styled-components";
import { IButtonPropsSc } from "./Button.interface";

const BUTTON = styled.button<IButtonPropsSc>`
    background-color: ${({ color }) => color};
    border-radius: 8px;
    border-style: none;
    color: #FFF;                
    padding: 8px;
    width: ${({ width }) => width};
    cursor: pointer;
    &:hover{                        
        background-color: rgba(0,0,0, 0.5);
    }
`

export {
    BUTTON
}