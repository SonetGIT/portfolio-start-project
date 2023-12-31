import styled from "styled-components"
import { theme } from "../../styles/Theme"


const Slider = styled.div`
    /* border: 1px solid red; */
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: 2px solid red;
`

const Slide = styled.div`
    max-width: 500px;
    text-align: center;    
`

const Text = styled.p`
    
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 20px 0 42px;
    display: inline-block;
    
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color:${theme.colors.accent};
            width: 20px;
        }
    }    
`

export const Stl = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}