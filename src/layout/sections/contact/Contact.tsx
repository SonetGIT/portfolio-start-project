import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Btn } from '../../../components/Btn';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
    return (
        <StlConact>
            <Container>
                {/* <Title>I am ANIMATION</Title> */}
                <SectionTitle>Contact</SectionTitle>
                <StlForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"name"} as={"textarea"}/>
                    <Btn type={"submit"}>Send message</Btn>
                </StlForm>
            </Container>
        </StlConact>
    );
};

const StlConact = styled.section`

`

const StlForm = styled.form`
    width: 100%;  
    max-width: 540px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;    
    background-color: ${theme.colors.secondaryBg};    
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;

    color: ${theme.colors.font};
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize; //устанавливает заглавную букву
    }

    &:focus-visible {
         outline: 1px solid ${theme.colors.borderColor}; 
    }
`



//Задание из уроков
// Псевдоклассы
// const Field = styled.input`
//     :focus-visible {
//         outline: 4px solid red; 
//     }
// `
// //Анимация
// const Test = keyframes
//`
//     50% {transform: translateY(20%)}
// `
// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     margin: 60px 0;
//     color: red;

// `
// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     margin: 60px 0;
//     color: red;

//     animation: ${Test} 1s linear infinite alternate;

//     @media (prefers-redused-motion: reduce){
//         animation: unset;
//     }
// `