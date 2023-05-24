import { styled } from "styled-components";
import { IRowPropsSC } from "./Row.interface";

const ROW = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const COLUMN = styled.div<IRowPropsSC>`
    display: flex;
    justify-content: center;
    flex-basis: ${({ columns }) => `${80 / columns}%`};
    padding: 8px;
`;

export {
    ROW,
    COLUMN
}