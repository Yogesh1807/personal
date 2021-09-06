// import React, { useContext } from "react";
// import { ThemeContext } from "styled-components";
import { ButtonComponent } from "./style";
// import { VARIANT, SIZES } from "./enum";

interface ButtonProps {
  text: string;
}

export default function Button(props: ButtonProps) {
  const { text } = props;
//   const themeContext = useContext(ThemeContext);
//   console.log("Current theme: ", props, themeContext);

  return <ButtonComponent>{text}</ButtonComponent>;
}
