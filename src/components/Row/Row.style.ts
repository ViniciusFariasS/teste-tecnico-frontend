import { styled } from "styled-components";
import { IRowPropsSC } from "./Row.interface";

const ROW = styled.div<IRowPropsSC>`
    display: flex;    
    flex-wrap: wrap;
`;

const COLUMN = styled.div<IRowPropsSC>`
    display: flex;
    justify-content: center;
    flex-basis: ${({ columns }) => `${100 / columns}%`};
`;

export {
    ROW,
    COLUMN
}