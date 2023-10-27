import React from 'react'; //imr
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { theme } from '../../../../styles/Theme';
import { Stl } from '../Skills_Stl';

type SkillPrsType = {
   iconId: string
   title: string
   description: string
}

export const Skill: React.FC<SkillPrsType> = (props:SkillPrsType) => {
    return (
        <Stl.Skill>
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <Stl.IconWrapper> <Icon iconId={props.iconId}/> </Stl.IconWrapper>
                <Stl.SkillTitle>{props.title}</Stl.SkillTitle>
                <Stl.SkillTxt>{props.description}</Stl.SkillTxt>
            </FlexWrapper>
        </Stl.Skill>
);
};
