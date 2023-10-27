import React from 'react';
import Photo from '../../../assets/img/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Stl } from './Main_Stl';

export const Main: React.FC = () => {
    return (
        <Stl.Main>
            <Container>
                <FlexWrapper alignItems={"center" } justifyContent={"space-around"} flexWrap='wrap'>
                    <div>
                        <Stl.SmallTxt> Hi There </Stl.SmallTxt>
                        <Stl.Name>I am <span>Svetlana Dyablo</span></Stl.Name>
                        <Stl.MainTitle>A Web Developer</Stl.MainTitle>
                    </div>
                    <Stl.PhotoWrapper>
                        <Stl.Photo src={Photo} alt="" />                              
                    </Stl.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </Stl.Main>
    );
};
