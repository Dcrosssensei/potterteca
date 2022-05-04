import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./ComponentStiled/GlobalStyle";

const house = {
  griffindor: {
    color: "red",
    bg: "griffindor",
  },
  slytherin: {
    color: "green",
    bg: "slytherin",
  },
  hufflepuff: {
    color: "yellow",
    bg: "hufflepuff",
  },
  ravenclaw: {
    color: "blue",
    bg: "ravenclaw",
  },
};

export const HouseTheme = (props) => (
  <ThemeProvider theme={house[props.house]}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
