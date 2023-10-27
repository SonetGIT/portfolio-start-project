import React from 'react';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Stl } from './Footer_Stl';


const socialItemsData = [
    {
        iconId:'inst'
    },
    {
        iconId:'tg'
    },
    {
        iconId:'vk'
    },
    {
        iconId:'in'
    }
]

export const Footer: React.FC = () => {
    return (
        <Stl.Footer>
            <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                <Stl.Name>Svetlana</Stl.Name>
                <Stl.SocialListUl>
                    
                    {socialItemsData.map((par, index)=>{
                        return (
                            <Stl.SocialItemLi key={index}>
                                <Stl.SocialLinkA>
                                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={par.iconId}/>
                                </Stl.SocialLinkA>
                            </Stl.SocialItemLi>
                        )
                    })}
                    
                </Stl.SocialListUl>
                <Stl.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Stl.Copyright>
            </FlexWrapper>            
        </Stl.Footer>
    );
}