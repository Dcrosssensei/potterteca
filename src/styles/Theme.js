import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./ComponentStiled/GlobalStyle";

const house = {
  Gryffindor: {
    house: "Gryffindor",
    color: "white",
    colorbg1: "#600808",
    colorbg2: "#9b091e",
    bg: "griffindor",
  },
  Slytherin: {
    house: "Slytherin",
    color: "white",
    colorbg1: "#093a1b",
    colorbg2: "#018345",
    bg: "slytherin",
  },
  Hufflepuff: {
    house: "Hufflepuff",
    color: "black",
    colorbg1: "#edae01",
    colorbg2: "#28292e",
    bg: "hufflepuff",
  },
  Ravenclaw: {
    house: "Ravenclaw",
    color: "white",
    colorbg1: "#083c61",
    colorbg2: "#1371b1",
    bg: "ravenclaw",
  },
};

export const HouseTheme = (props) => (
  <ThemeProvider theme={house[props.house]}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
