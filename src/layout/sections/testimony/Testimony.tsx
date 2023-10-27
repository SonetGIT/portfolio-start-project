import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Stl } from '../skills/Skills_Stl';

export const Testimony: React.FC = () => {
    return (
        <StlTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>            
                    <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                        <Stl.IconWrapper>
                            <Icon iconId={'quote'}/>
                        </Stl.IconWrapper>
                        <Slider/>
                    </FlexWrapper>                        
            </Container>
        </StlTestimony>        
    );
};

const StlTestimony = styled.section`
    background-color: #aeb9ff;
    min-height: 50vh;
    
    ${Stl.IconWrapper}{
        margin: 28px 0 72px;
    }
`
