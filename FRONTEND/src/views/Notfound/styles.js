import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    height: 100vh;
    padding: 50px;
    background-color: #74EAAE;

    .notFound{
        font-size: 40px;
        margin-top: 100px;
        font-weight: 600;
        color: #FFF;
    }

    .back{
        cursor: pointer;
        color: #448363;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 600;
        background-color: transparent;
        border:none;
    }
`;

const float = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-30px);
    }
    100% {
        transform: translatey(0px);
    }
`;

export const Logomarca = styled.img`
    width: 200px;
    height: auto;
    transition: 0.5s all;
    cursor: pointer;
    transform: translatey(0px);
    animation: 2s ${float} ease-in-out infinite;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    
    span{
        color: #FFF;
        font-size: 12px;
    }

    .title{
        font-size: 50px;
        font-weight: 600;
        color: #448363;

        b{
            color: #FFF;
        }
    }
`;
