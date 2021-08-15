import styled from "styled-components";

import devices from "../../constants/devices";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  @media (max-width: ${devices.phone}) {
    flex-direction: column;
  }
`;

interface TextContainerProps {
  color: string;
}

export const TextContainer = styled.div`
  padding: 0 15px;
  color: ${({ color }: TextContainerProps) => color};
`;

export const Title = styled.b``;

export const Description = styled.p`
  text-align: justify;
`;

export const Rate = styled.p``;

export const Image = styled.img`
  width: 150px;
  height: 225px;
  @media (max-width: ${devices.phone}) {
    align-self: center;
    width: 60%;
    height: auto;
  }
`;
