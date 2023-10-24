import React from 'react';
import { Skill } from './skill/Skill';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-between'}>
                    <Skill iconId={'html'} title={'html5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>          
                    <Skill iconId={'css'} title={'css3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'react'} title={'react'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'quote'} title={'html5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>          
                    <Skill iconId={'css'} title={'css3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'html'} title={'react'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>                
                </FlexWrapper>
            </Container>
        </StyledSkills >
    )
};

const StyledSkills = styled.section`
`