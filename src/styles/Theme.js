import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./ComponentStiled/GlobalStyle";

const house = {
  Gryffindor: {
    house: "Gryffindor",
    colorshadow: "#6F6F6F",
    colorbg1: "#600808",
    colorbg2: "#9b091e",
    bgcolor: "#fdaf17de",
    bg: "griffindor",
  },
  Slytherin: {
    house: "Slytherin",
    color: "rgb(240, 240, 240)",
    colorbg1: "#076531",
    colorbg2: "#003612",
    bgcolor: "#14181b",
    bg: "slytherin",
  },
  Hufflepuff: {
    house: "Hufflepuff",
    color: "rgb(240, 240, 240)",
    colorbg2: "#28292e",
    colorbg1: "#edae01",
    bgcolor: "#232323",
    bg: "hufflepuff",
  },
  Ravenclaw: {
    house: "Ravenclaw",
    color: "rgb(240, 240, 240)",
    colorbg1: "#083c61",
    colorbg2: "#1371b1",
    bgcolor: "#BBBBBB",
    bg: "ravenclaw",
  },
};
export const HouseTheme = (props) => (
  <ThemeProvider theme={house[props.house]}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
