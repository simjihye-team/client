import type { CSSProperties } from "react";
import { css } from "styled-components";

interface PropsType {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
}

const flex = ({ flexDirection, justifyContent, alignItems }: PropsType) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};

export default flex;
