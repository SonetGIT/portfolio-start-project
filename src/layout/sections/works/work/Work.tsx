import React from 'react';
import { Link } from '../../../../components/Link';
import { Btn } from '../../../../components/Btn';
import { Stl } from './Works_Stl';

type WorkPrsType = {
    titleType: string
    textType: string
    srcType: string
}
export const Work: React.FC<WorkPrsType> = (props:WorkPrsType) => {
    return (
        <Stl.Work>
            <Stl.ImageWrapper>
                <Stl.Img src={props.srcType} alt=''/>
                <Btn>view project</Btn>
            </Stl.ImageWrapper>  
                   
            <Stl.Description>
                <Stl.Title>{props.titleType}</Stl.Title>
                <Stl.Txt>{props.textType}</Stl.Txt>
                <Link active
                      href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Stl.Description>
        </Stl.Work>               
    );
};