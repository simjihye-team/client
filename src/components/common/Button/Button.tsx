import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import {
  ButtonIconType,
  ButtonOptionType,
  ButtonSizeType,
} from "./Button.type";
import { getButtonSize, getButtonStyle } from "./Button.style";
import { flex } from "@/utils";
import styled from "styled-components";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option?: ButtonOptionType;
  icon?: ButtonIconType;
  size?: ButtonSizeType;
  width?: CSSProperties["width"];
}

const Button = ({
  onClick,
  children,
  option = "PRIMARY",
  size = "MEDIUM",
  width,
}: PropsType) => {
  return (
    <StyledButton
      style={{ width }}
      onClick={onClick}
      option={option}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  option: ButtonOptionType;
  size: ButtonSizeType;
}>`
  ${flex({ justifyContent: "center", alignItems: "center" })}
  border-radius: 6px;
  cursor: pointer;
  padding: 0px 16px;

  ${({ option }) => option && getButtonStyle[option]};
  ${({ size }) => size && getButtonSize[size]};
`;
