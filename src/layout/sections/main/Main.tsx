import React from 'react';
import Photo from '../../../assets/img/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Stl } from './Main_Stl';

//импортированные библиотеки
import Typewriter from 'typewriter-effect'; //yarn add typewriter-effect - эффект печатающего текста
import Tilt from 'react-parallax-tilt'; //yarn add react-parallax-tilt - эфект при наведении на картинку

export const Main: React.FC = () => {
    return (
        <Stl.Main>
            <Container>
                <FlexWrapper alignItems={"center" } justifyContent={"space-around"} flexWrap='wrap'>
                    <div>
                        <Stl.SmallTxt> Hi There </Stl.SmallTxt>
                        <Stl.Name>I am <span>Svetlana Dyablo</span></Stl.Name>
                        <Stl.MainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', 'A Frontend Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Stl.MainTitle>
                    </div>
                    <Tilt 
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <Stl.PhotoWrapper>
                            <Stl.Photo src={Photo} alt="" />                                            
                        </Stl.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </Stl.Main>
    );
};
