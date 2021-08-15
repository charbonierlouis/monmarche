import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px auto;
  position: relative;
  width: 100%;
  font-size: 30px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border: 2px solid #aaa;
  border-radius: 5px;
`;

interface IconProps {
  display: string;
}

export const Icon = styled.span`
  position: absolute;
  bottom: 8px;
  right: 0px;
  color: #666;
  border: 0;
  display: ${({ display }: IconProps) => display};
  padding: 0 10px;
  border-radius: 50%;
  -webkit-transition: background 200ms;
  transition: background 200ms;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
