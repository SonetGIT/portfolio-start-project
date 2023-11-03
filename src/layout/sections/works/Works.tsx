import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import imgWorks1 from '../../../assets/img/works1.png'
import imgWorks2 from '../../../assets/img/works2.png'
import { Container } from '../../../components/Container';
import { TabMenu, TabStatusType } from './tabMenu/TabMenu';
import { Stl } from './work/Works_Stl';

//const tabsItemWks = ['All', 'landing page', 'React', 'spa']
const tabsItemWks:Array<{status:TabStatusType, title:string}> = [
    {
        title:'All',
        status:'all'
    },
    {
        title:'landing page',
        status:'landing'
    },
    {
        title:'React',
        status:'react'
    },
    {
        title:'spa',
        status:'spa'
    }
]

const worksData = [
    {
        titleType:'Social Network',
        srcType:imgWorks1,
        textType:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:'spa'
    },
    {
        titleType:'Timer',
        srcType:imgWorks2,
        textType:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:'react'
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredWks = worksData

    if(currentFilterStatus === 'landing')
    {
        filteredWks = worksData.filter(work => work.type === 'landing')
    }
    if(currentFilterStatus === 'react')
    {
        filteredWks = worksData.filter(work => work.type === 'react')
    }
    if(currentFilterStatus === 'spa')
    {
        filteredWks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value:TabStatusType){
        setCurrentFilterStatus(value)
    }

    return (
        <Stl.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItemWks} 
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'} flexWrap={'wrap'}>
                    {filteredWks.map((w)=>{
                       return <Work titleType={w.titleType} 
                                    srcType={w.srcType} 
                                    textType={w.textType}/>
                    })}
                </FlexWrapper>
            </Container>
        </Stl.Works>
    );
}

