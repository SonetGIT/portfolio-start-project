import React from 'react';
import styled from 'styled-components';
import { Menu } from '../menu/Menu';
import { Stl } from '../allMenu_Stl';

export const DesctopMenu: React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    return (
        <Stl.DesctopMenu>
            <Menu menuItems={props.menuItems}/>
        </Stl.DesctopMenu>
    );
};