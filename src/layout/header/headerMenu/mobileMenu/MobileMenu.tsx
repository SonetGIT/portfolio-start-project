import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { Stl } from '../allMenu_Stl';

export const MobileMenu: React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false) //значение по умолчанию false

    //стрелочная ф-я
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)} //уст-м новый state
    
    return (
        <Stl.MobileMenu>
            <Stl.BurgerBtn isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </Stl.BurgerBtn>
            
            {/* меню закрывается пр клике в любом месте */}
            <Stl.MobileMenuPopUp isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}></Menu>                 
            </Stl.MobileMenuPopUp>           
        </Stl.MobileMenu>
    );
};