import React from 'react'; //imr
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type SkillPrsType = {
   iconId: string
   title: string
   description: string
}
//slr
export const Skill = (props:SkillPrsType) => {
    return (
        <StlSkill>
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <StlIconWrapper> <Icon iconId={props.iconId}/> </StlIconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillTxt>{props.description}</SkillTxt>
            </FlexWrapper>
        </StlSkill>
);
};

const StlSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;

`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;

`
const SkillTxt = styled.p`
    text-align: center;
`

export const StlIconWrapper = styled.div`
    position: relative;

    &::before{
        content: '';
        display: inline-block;        
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.10);
        transform: rotate(45deg) translate(-50%, -50%); //очень важно

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`