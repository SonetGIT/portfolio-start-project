import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Btn } from '../../../components/Btn';
import { Container } from '../../../components/Container';
import { Stl } from './Contact_Stl';

export const Contact: React.FC = () => {
    return (
        <Stl.Contact>
            <Container>
                {/* <Title>I am ANIMATION</Title> */}
                <SectionTitle>Contact</SectionTitle>
                <Stl.Form>
                    <Stl.Field placeholder={"name"}/>
                    <Stl.Field placeholder={"name"}/>
                    <Stl.Field placeholder={"name"} as={"textarea"}/>
                    <Btn type={"submit"}>Send message</Btn>
                </Stl.Form>
            </Container>
        </Stl.Contact>
    );
};

