import { color } from "@/styles";
import { flex } from "@/utils";
import { Text, Button, Row, Column } from "@/components/common";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  onConfirm: () => void;
  onClose: () => void;
  confirmText?: string;
}

const Modal = ({
  isOpen,
  title,
  content,
  onConfirm,
  onClose,
  confirmText = "완료",
}: PropsType) => {
  return (
    <BlurBackground isOpen={isOpen}>
      <StyledModal>
        <Text fontType="H4" color={color.gray900}>
          {title}
        </Text>
        <Column style={{ width: "100%", height: "100%" }}>{content}</Column>
        <Row gap={16} justifyContent="flex-end">
          <Button option="SECONDARY" size="SMALL" onClick={onClose}>
            취소
          </Button>
          <Button size="SMALL" onClick={onConfirm}>
            {confirmText}
          </Button>
        </Row>
      </StyledModal>
    </BlurBackground>
  );
};

export default Modal;

const BlurBackground = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledModal = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  gap: 16px;
  width: 320px;
  height: 220px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${color.white};
`;
