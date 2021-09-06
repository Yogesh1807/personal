import styled from "styled-components";
import { VARIANT, SIZES } from "./enum";

interface IProps {
  variant?: VARIANT;
  size?: SIZES;
}

export const ButtonComponent = styled.button<IProps>`
  margin: 8px;
  border-radius: ${(props) => props.theme.borderRadius};

  ${(props) => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
          border-color: 'aliceblue';
        `;
      case VARIANT.PRIMARY:
      default:
        return `
          color: ${props.theme.defaultColor};
          background-color: ${props.theme.defaultBg};
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case SIZES.SMALL:
        return `
          padding: ${props.theme.btnPadding.small};
        `;
      case SIZES.MEDIUM:
        return `
          padding: ${props.theme.btnPadding.medium};
        `;
      case SIZES.LARGE:
        return `
          padding: ${props.theme.btnPadding.large};
        `;
      case SIZES.CUSTOM:
        return `
          padding: ${props.theme.btnPadding.custom};
        `;
      default:
        return `
        padding: ${props.theme.btnPadding.default};
         `;
    }
  }}
`;
