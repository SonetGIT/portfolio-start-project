import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo'
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { HeaderMenu } from './headermenu/HeaderMenu';

const menuItmsH = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StlHeader>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo />
                    <HeaderMenu menuItmsM={menuItmsH}/>
                </FlexWrapper>
            </Container>
        </StlHeader>
    );
};

//название должна начинатся с ЗАГЛАВНОЙ буквой
const StlHeader = styled.header `
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed; //фиксация header, при прокрутки этот часть будет фиксированный
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

