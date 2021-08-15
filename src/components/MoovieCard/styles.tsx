import styled from "styled-components";

import devices from "../../constants/devices";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  top: 80%;
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
`;

export const Container = styled.div`
  width: 165px;
  position: relative;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
  &:hover ${Overlay} {
    opacity: 1;
  }
  &:hover ${Content} {
    top: 50%;
    left: 50%;
    opacity: 1;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${devices.tablette}) {
    width: 22%;
  }
  @media (max-width: ${devices.phone}) {
    width: 45%;
  }
`;
