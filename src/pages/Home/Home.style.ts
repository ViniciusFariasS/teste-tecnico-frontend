import { styled } from "styled-components";

const HOME = styled.section`
    height: 100vh;
    background-color: #BFD8C6;
    padding: 24px;
    .home{
        &__filter{
            background-color: #FFFFFF;
            border: 1px solid #ccc;
            margin: 0 24px 24px 24px;
            padding: 24px;    
            border-radius: 8px;
            box-shadow: 8px 8px 8px #0001;
            form{
                div{
                    div{
                        width: 100%;
                        display: flex;                        
                    }
                }
            }
            button{
                margin-top: 8px;
            }
        }
    }
`

export { HOME }