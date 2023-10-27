import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import imgWorks1 from '../../../assets/img/works1.png'
import imgWorks2 from '../../../assets/img/works2.png'
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';
import { Stl } from './work/Works_Stl';

const menuItemWks = ['All', 'landing page', 'React', 'spa']

const workData = [
    {
        titleType:'Social Network',
        srcType:imgWorks1,
        textType:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        titleType:'Timer',
        srcType:imgWorks2,
        textType:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]
export const Works: React.FC = () => {
    return (
        <Stl.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={menuItemWks}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'} flexWrap={'wrap'}>
                    {workData.map((w)=>{
                       return <Work titleType={w.titleType} 
                                    srcType={w.srcType} 
                                    textType={w.textType}/>
                    })}
                </FlexWrapper>
            </Container>
        </Stl.Works>
    );
}

