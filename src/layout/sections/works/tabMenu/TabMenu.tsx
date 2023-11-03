import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { type } from 'os';

export type TabStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabMenuPropsType = {
    tabsItems:Array<{status:'all' | 'landing' | 'react' | 'spa',  title:string}>
    changeFilterStatus:(value:'all' | 'landing' | 'react' | 'spa') => void
    currentFilterStatus:string
}

export const TabMenu = (props:TabMenuPropsType) => {
    return (
        <StlTabMenu>
            <ul>
                {props.tabsItems.map((item, index)=>{
                    return (
                        <StlListItem key={index}>
                            <Link active={props.currentFilterStatus === item.status} 
                                  as={'button'} 
                                  onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                        </StlListItem>
                    )
                })}
            </ul>
        </StlTabMenu>
    );
};

const StlTabMenu = styled.nav `    
    ul {
        display: flex;        
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const StlListItem = styled.li`
   
`