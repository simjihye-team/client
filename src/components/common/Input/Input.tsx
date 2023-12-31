import styled from "styled-components";
import { color, font } from "@/styles";
import { InputPropsType } from "./Input.type";

const Input = ({
  width = "320px",
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  readOnly,
  textAlign,
}: InputPropsType) => {
  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        readOnly={readOnly}
        style={{ textAlign }}
      />
    </div>
  );
};

export default Input;

const StyledInput = styled.input`
  ${font.p2}
  color: ${color.gray800};
  height: 48px;
  width: 100%;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &::placeholder {
    color: ${color.gray500};
  }
  &:focus {
    border: 1px solid ${color.primary};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
