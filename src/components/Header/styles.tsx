import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  color: string;
}

export const Container = styled.div`
  width: 100%;
  padding: 10px 0px;
  background-color: ${({ backgroundColor }: ContainerProps) => backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  color: ${({ color }: ContainerProps) => color};
`;

export const Title = styled.h1`
  margin: 0px;
`;

export const LeftContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CenterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
