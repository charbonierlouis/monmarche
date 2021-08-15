import styled from "styled-components";

import devices from "../../constants/devices";

interface ContainerProps {
  background: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: no-wrap;
  background-color: ${({ background }: ContainerProps) => background};
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow: scroll;
`;

export const SubContainer = styled.div`
  width: 60%;
  @media (max-width: ${devices.tablette}) {
    width: 95%;
  }
`;
