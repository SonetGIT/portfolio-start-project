import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu:React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    return (
        <StlTabMenu>
            <ul>
                {props.menuItems.map((item:string, index:number)=>{
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