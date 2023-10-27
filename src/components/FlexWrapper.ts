import styled from "styled-components";

type  FlexWrapperPrType = {
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPrType>`
    display: flex;
    flex-direction: ${props=>props.flexDirection || "row"};
    justify-content: ${props=>props.justifyContent || "flex-start"};
    align-items: ${props=>props.alignItems || "stretch"};
    flex-wrap: ${props=>props.flexWrap || "nowrap"};
    height: 100%;

`