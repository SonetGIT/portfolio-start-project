import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props:{menuItmsM:Array<string>}) => {
    return (
        <StlTabMenu>
            <ul>
                {props.menuItmsM.map((item:string, index:number)=>{
                    return (
                        <StlListItem key={index}>
                            <Link href='#'>{item}</Link>
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