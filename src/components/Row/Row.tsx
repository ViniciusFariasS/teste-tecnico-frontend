import { IRowProps } from "./Row.interface";
import { COLUMN, ROW } from "./Row.style";
import React from "react"

const Row: React.FC<IRowProps> = ({ columns, children }) => {
    return (
        <ROW columns={columns}>
            {React.Children.map(children, (child, index) => (
                <COLUMN key={index} columns={columns}>
                    {child}
                </COLUMN>
            ))}
        </ROW>
    );
};

export {
    Row
}