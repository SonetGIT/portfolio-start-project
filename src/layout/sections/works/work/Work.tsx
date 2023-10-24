import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Btn } from '../../../../components/Btn';

type WorkPrsType = {
    titleType: string
    textType: string
    srcType: string
}
export const Work = (props:WorkPrsType) => {
    return (
        <StlWork>
            <StlImageWrapper>
                <Img src={props.srcType} alt=''/>
                <Btn>view project</Btn>
            </StlImageWrapper>  
                   
            <Description>
                <Title>{props.titleType}</Title>
                <Txt>{props.textType}</Txt>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>
        </StlWork>               
    );
};


const StlWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;
    
    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`

const StlImageWrapper = styled.div`
    position: relative;  
    
    &:hover {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px) //blure
        }

        ${Btn} {
            opacity: 1;
        }
    }

    /*view project*/
    ${Btn} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }
`

const Img = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`
    
`

const Txt = styled.p`
    margin: 14px 0 10px;
    
`