import React from 'react';
import { Menu } from '../menu/Menu';
import { Stl } from '../allMenu_Stl';

export const MobileMenu: React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    return (
        <Stl.MobileMenu>
            <Stl.BurgerBtn isOpen={true}>
                <span></span>
            </Stl.BurgerBtn>
            <Stl.MobileMenuPopUp isOpen={true}>
                <Menu menuItems={props.menuItems}></Menu>                 
            </Stl.MobileMenuPopUp>           
        </Stl.MobileMenu>
    );
};