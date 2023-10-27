import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from '../../../styles/Common';


const Footer = styled.section`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
        
`

const Name = styled.span`
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

export const Stl = {
    Footer,
    Name,
    SocialListUl,
    SocialItemLi,
    SocialLinkA,
    Copyright
}