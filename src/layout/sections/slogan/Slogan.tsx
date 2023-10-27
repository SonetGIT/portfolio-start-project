import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Btn } from '../../../components/Btn';
import { Container } from '../../../components/Container';

export const Slogan:React.FC = () => {
    return (
       <StlSlogan>
        <Container>
            <FlexWrapper  flexDirection={'column'} alignItems={'center'}>
                <SectionTitle>I Am Available For Freelance</SectionTitle>            
                <Btn>Hire me</Btn>
            </FlexWrapper>
        </Container>
       </StlSlogan> 
    );
};

const StlSlogan = styled.section`
    background-color: '#ffr1f5';
    min-height: 30vh;    
`