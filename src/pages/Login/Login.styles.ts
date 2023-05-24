import { styled } from "styled-components";

const LOGIN = styled.section`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    background-color: #57C676;
    .login{
        &__logo{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;            
            background-image: url('/src/assets/ball.png');
            span{
                font-family: 'Righteous', cursive;
                font-size: 120px;
                color: #fff;
                border-bottom: 16px solid #FFF;
                margin-bottom: 16px;
            }
            &--slogan{
                span{                
                    font-family: 'Roboto', sans-serif;
                    font-size: 24px;
                    color: #000;
                    border-bottom: none;                    
                }
            }
        }
        &__box{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;            
            width: 70%;
            &--form{
                align-items: center;
                background-color: rgba(224,224,224, 0.2);
                display: flex;
                flex-direction: column;
                height: 340px;
                width: 320px;                
                border-radius: 8px;
                &-title{
                    padding: 0 40px 0px 40px;
                    h2{
                        color: #FFF
                    }
                }

                &-input{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 32px;                           
                    span{
                        margin-bottom: 8px;
                        color: #FFF;
                        font-size: 14px;
                    }
                }
                
                &-button{
                    button{
                        background-color: #FF914D;
                        border-radius: 8px;
                        border-style: none;
                        color: #FFF;
                        margin-top: 16px;                    
                        padding: 8px;
                        width: 224px;
                        cursor: pointer;
                        &:hover{                        
                            background-color: rgba(255, 145, 77, 0.7);
                        }
                    }
                }
                
            }
        }
    }
`
export {
    LOGIN
}