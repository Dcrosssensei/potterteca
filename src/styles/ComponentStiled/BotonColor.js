import styled from "styled-components";

export const BotonColor = styled.button`
  color: ${(props) => props.theme.colorbg1};
  background: ${(props) => props.theme.bgcolor};
  border: 1px solid ${(props) => props.theme.colorbg1};
  border-radius: 15px;
`;

export default BotonColor;
