import styled from "styled-components";

export const InfoChart = styled.div`
  color: ${(props) => props.theme.colorbg1};
  box-shadow: 2px 1px 2px ${(props) => props.theme.colorshadow};
  border-left: 5px solid ${(props) => props.theme.colorbg2};
  background: ${(props) => props.theme.bgcolor};
`;
