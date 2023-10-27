import React from 'react';
import { Skill } from './skill/Skill';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Stl } from './Skills_Stl';

const skillData = [
    {
        iconId:'html',
        title:'html5',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId:'css',
        title:'css3',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },    
    {
        iconId:'react',
        title:'react',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId:'ts',
        title:'typescript',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId:'stlcomp',
        title:'styled components',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId:'web',
        title:'WEB DESIgN',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    }
]

export const Skills: React.FC = () => {
    return (
        <Stl.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>                
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-between'}>
                    {skillData.map((par, index)=>{
                        return <Skill iconId={par.iconId} key={index}
                                      title={par.title} description={par.description}/> 
                    })}                    
                </FlexWrapper>
            </Container>
        </Stl.Skills >
    )
};