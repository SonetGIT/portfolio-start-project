import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { theme } from '../../styles/Theme';
import { Stl } from './Slider_Stl';

export const Slider:React.FC = () => {
    return (
        <Stl.Slider>
            <FlexWrapper>
                <Stl.Slide>
                    <Stl.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Stl.Text>
                    <Stl.Name>@ivan ivanow</Stl.Name>
                </Stl.Slide>
            </FlexWrapper>
            <Stl.Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Stl.Pagination>           
        </Stl.Slider>
    );
};