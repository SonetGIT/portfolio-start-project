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
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`

const StlListItem = styled.li`
   
`