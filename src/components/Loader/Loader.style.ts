import { styled } from "styled-components";
import { IFootballSC } from "./Loader.interface";
import { images } from "../../utils/imageUtils";


const LOADER = styled.div`
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

  display: flex;
  justify-content: center;
  align-items: center;  
  img{
    width: 50px;
    height: 50px;
    animation: rotation 1s linear infinite;
  }
`;

export {
    LOADER,
}