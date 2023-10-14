import styled from "styled-components";
import { device } from "./Device";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: var(--main-color);
  padding: 0 15px;
  @media ${device.laptop} {
    padding: 0 7px;
  }
  @media ${device.tablet} {
    max-width: 768px;
    padding: 0 7px;
  }
`;

export const WrapperContent = styled.div`
  background-color: var(--main-bgColor);
  color: var(--main-color);
  font-weight: bold;
`;
