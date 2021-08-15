import styled from "styled-components";

import devices from "../../constants/devices";

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Left = styled.div`
  margin-right: 10px;
  align-items: center;
  @media (max-width: ${devices.tablette}) {
    margin-right: 5px;
  }
  @media (max-width: ${devices.phone}) {
    margin-right: 2px;
  }
`;
export const Right = styled.div`
  margin-left: 10px;
  align-items: center;
  @media (max-width: ${devices.tablette}) {
    margin-left: 5px;
  }
  @media (max-width: ${devices.phone}) {
    margin-left: 2px;
  }
`;

export const Icon = styled.span`
  font-size: 22px;
  @media (max-width: ${devices.tablette}) {
    font-size: 18px;
  }
  @media (max-width: ${devices.phone}) {
    font-size: 14px;
  }
`;
