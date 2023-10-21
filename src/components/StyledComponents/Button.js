import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundcolor || "#08836d"};
  padding: 8px;
  border: none;
  cursor: pointer;
  color: inherit;
  transition: all 0.3s ease 0s;
  border-radius: 5px;
  align-self: ${(props) => props.align || "stretch"};
  &:hover {
    background-color: ${(props) => props.backgroundcolorhover || "#03725e"};
  }
  ${(
    props //styles extension -- for login/registration button
  ) =>
    props.loginStyle &&
    css`
      margin-top: 50px;
      width: 100%;
      padding: 15px;
      font-size: 18px;
      font-weight: 600;
    `}
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
