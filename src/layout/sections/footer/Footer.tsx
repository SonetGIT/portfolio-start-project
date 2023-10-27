import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Footer = () => {
    return (
        <StlFooter>
            <FlexWrapper flexDirection={"column"} alignItems={"center"}>
                <StlName>Svetlana</StlName>
                <SocialListUl>
                    <SocialItemLi>
                        <SocialLinkA>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"inst"}/>                    
                        </SocialLinkA>
                    </SocialItemLi>
                    <SocialItemLi>
                        <SocialLinkA>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"tg"}/>                    
                        </SocialLinkA>
                    </SocialItemLi>
                    <SocialItemLi>
                        <SocialLinkA>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>                   
                        </SocialLinkA>
                    </SocialItemLi>
                    <SocialItemLi>
                        <SocialLinkA>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"in"}/>
                        </SocialLinkA>
                    </SocialItemLi>
                </SocialListUl>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
            
        </StlFooter>
    );
}

const StlFooter = styled.section`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
        
`

const StlName = styled.span`
    ${font({family:"'Josefin Sans', sans-serif", weight:700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`

const SocialListUl = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItemLi = styled.li`
        
`

const SocialLinkA = styled.a`
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};    

    &:hover{
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px); //подпрыгивает на 4px вверх
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;   
`