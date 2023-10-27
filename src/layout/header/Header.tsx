import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo'
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { Stl } from './Header_Stl';
import { DesctopMenu } from './headerMenu/desctopMenu/DesctopMenu';

const menuItemsH = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);    
        
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
    return (
        <Stl.Header>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo />
                    
                    {/* использовали тернарный оператор */}
                    {width < breakpoint ? <MobileMenu menuItems={menuItemsH}/> : <DesctopMenu menuItems={menuItemsH}/>}
                </FlexWrapper>
            </Container>
        </Stl.Header>
    );
};

