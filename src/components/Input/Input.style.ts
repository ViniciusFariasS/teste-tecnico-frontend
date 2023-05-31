import { styled } from "styled-components";

const INPUTWRAPPER = styled.div`    
    height: 56px;
    display: flex;
    flex-direction: column ;
    margin-bottom: 10px;    
`;

const LABEL = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #467050;
`;

const INPUTFIELD = styled.input`
    width: 224px;
    padding: 8px 2px 8px 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
`;

const ERRORMESSAGE = styled.span`
    color: red !important;
    font-weight: bold;
    font-size: 12px !important;
`;

const SELECT = styled.select`
    width: 224px;
    padding: 8px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
`

export {
    INPUTWRAPPER,
    LABEL,
    INPUTFIELD,
    ERRORMESSAGE,
    SELECT
}