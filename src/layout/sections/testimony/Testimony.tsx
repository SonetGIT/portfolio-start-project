import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StlIconWrapper } from '../skills/skill/Skill';

export const Testimony = () => {
    return (
        <StlTestimony>
            <SectionTitle>Testimony</SectionTitle>            
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <StlIconWrapper>
                    <Icon iconId={'quote'}/>
                </StlIconWrapper>                
                <Slider/>
            </FlexWrapper>                        
        </StlTestimony>        
    );
};

const StlTestimony = styled.section`
    background-color: #98d3dd;
    min-height: 50vh;
    
    ${StlIconWrapper}{
        margin: 40px 0 72px;
    }
`
