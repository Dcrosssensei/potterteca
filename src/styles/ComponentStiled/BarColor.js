import styled from "styled-components";

export const BarColor = styled.div`
  background: linear-gradient(
    121deg,
    ${(props) => props.theme.colorbg1} 0%,
    ${(props) => props.theme.colorbg2} 6%,
    ${(props) => props.theme.colorbg1} 6%
  );
`;
