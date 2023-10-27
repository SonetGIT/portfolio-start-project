import styled from "styled-components";

//название должна начинатся с ЗАГЛАВНОЙ буквой
const Header = styled.header `
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed; //фиксация header, при прокрутки этот часть будет фиксированный
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

export const Stl = {
    Header
}