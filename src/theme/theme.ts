// theme.ts
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
  btnPadding: {
    default: "8px 20px",
    small: "10px",
    medium: "20px",
    large: "40px",
    custom: "10px 20px",
  },
  defaultBg:"#000",
  defaultColor:"#fff",
};
