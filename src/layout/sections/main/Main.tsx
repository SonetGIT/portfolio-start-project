import React from 'react';
import styled from 'styled-components';
import Photo from '../../../assets/img/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { access } from 'fs';

export const Main = () => {
    return (
        <StlMain>
            <Container>
                <FlexWrapper alignItems={"center" } justifyContent={"space-between"}>
                    <div>
                        <StlSmallTxt> Hi There </StlSmallTxt>
                        <StlName>I am <span>Svetlana Dyablo</span></StlName>
                        <StlMainTitle>A Web Developer</StlMainTitle>
                    </div>
                    <StlPhotoWrapper>
                        <StlPhoto src={Photo} alt="" />                              
                    </StlPhotoWrapper>
                </FlexWrapper>
            </Container>
        </StlMain>
    );
};

const StlMain = styled.section`
    min-height: 100vh;
    background-color: #f1efd3;
    display: flex;
`
const StlPhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before{
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
    
`

const StlPhoto = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StlMainTitle = styled.h1`    
    font-size: 27px;
    font-weight: 400;
`

const StlName = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    span{
        position: relative;
        z-index: 0;
        &::before{
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const StlSmallTxt = styled.small`
    font-size: 14px;
    font-weight: 400;    
`

