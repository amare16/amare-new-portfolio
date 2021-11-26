import React from 'react';
import styled from 'styled-components';

const Title = ({ title, span }) => {
    return (
        <TitleStyled>
            <h2>{title}</h2>
        </TitleStyled>
    );
};

const TitleStyled = styled.div`
    padding-top: 150px;
    position: relative;
    h2 {
        font-size: 3.1rem;
        font-weight: bold;
        position: relative;
        padding-bottom: 0.7rem;
        text-align: center;

        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: 0.33rem;
            background-color: rgba(3,127,255,.3);
            border-radius: 15px;
            left: 0;
            margin-left: 47%;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: #007bff;
            border-radius: 15px;
            left: 0;
            margin-left: 43%;
        }
        // span {
        //     font-weight: 900;
        //     color: rgba(25,29,43,.44);
        //     font-size: 5rem;
        //     position: absolute;
        //     left: 0;
        //     top: 30%;
        //     z-index: -1;
        //     @media screen and (max-width: 620px){
        //         font-size: 4rem;
        //     }
        //     @media screen and (max-width: 496px){
        //         font-size: 3rem;
        //     }
        //     @media screen and (max-width: 370px){
        //         font-size: 2rem;
        //     }
        // }
    }

`

export default Title;