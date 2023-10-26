import React from 'react';
import styled from 'styled-components';
import Photo from '../../../assets/img/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { access } from 'fs';
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StlMain>
            <Container>
                <FlexWrapper alignItems={"center" } justifyContent={"space-around"} flexWrap='wrap'>
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
    margin-top: 65px;

    //Отрисовка рамки на Светине фото
    &::before{
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile}{
            width: 310px;
            height: 380px;
            top: -17px;
            left: 20px;
        }
    }    
`

const StlPhoto = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const StlMainTitle = styled.h1`    
    font-size: 27px;
    font-weight: 400;

    //mixin
    ${font({weight: 400, Fmax: 27, Fmin:20 })}
`

const StlName = styled.h2`
    //mixin
    ${font({family:"'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin:36 })}

    letter-spacing: 0.05em;
    margin: 10px 0;

    span{
        position: relative;
        z-index: 0;
        white-space: nowrap;

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

    //всегда нужно писать в конце всех стилей
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;   //top=15,right+left=0, bottom=22
    }
`

const StlSmallTxt = styled.small`
    font-size: 14px;
    font-weight: 400;    
`

