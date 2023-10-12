import React from "react";
import styled from "styled-components";
import { device } from "./Device";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  @media ${device.tablet} {
    flex-direction: ${(props) => props.direction || "column"};
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
  }
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};
