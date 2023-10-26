import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import imgWorks1 from '../../../assets/img/works1.png'
import imgWorks2 from '../../../assets/img/works2.png'
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';

const menuItemWks = ['All', 'landing page', 'React', 'spa']
export const Works = () => {
    return (
        <StlWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItmsM={menuItemWks}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'} flexWrap={'wrap'}>
                    <Work 
                        titleType={'Social Network'}
                        srcType={imgWorks1}
                        textType={'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                        
                    <Work
                        srcType={imgWorks2}
                        titleType={'Timer'} 
                        textType={'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'} />

                </FlexWrapper>
            </Container>
        </StlWorks>
    );
}

const StlWorks = styled.section`
    ${FlexWrapper}{
        gap:30px
    }
`

