import { styled } from "styled-components";

const INPUTWRAPPER = styled.div`
    display: flex;
    flex-direction: column ;
    margin-bottom: 10px;
`;

const LABEL = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

const INPUTFIELD = styled.input`
    width: 224px;
    padding: 8px 2px 8px 2px;
    border-style: none;
    border-radius: 4px;
`;

const ERRORMESSAGE = styled.span`
    color: red !important;
    font-weight: bold;
    font-size: 12px !important;
    margin-top: 8px !important;
`;

export {
    INPUTWRAPPER,
    LABEL,
    INPUTFIELD,
    ERRORMESSAGE
}