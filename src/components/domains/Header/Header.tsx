import { IconArrowLeft } from "@/assets/icon";
import { useRouter } from "next/navigation";
import { flex } from "@/utils";
import { color, font } from "@/styles";
import { styled } from "styled-components";
import { Text } from "@/components/common";

interface PropsType {
  title?: string;
  option: "default" | "chat";
  onFinsh?: () => void;
}

const Header = ({ title, option, onFinsh }: PropsType) => {
  const { back } = useRouter();
  return (
    <StyledHeader>
      <IconArrowLeft onClick={() => back()} width={24} height={24} />
      {option === "chat" && (
        <>
          <Text fontType="btn2" color={color.gray900}>
            {title}
          </Text>
          <FinishButton onClick={onFinsh}>끝내기</FinishButton>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${color.white};
  width: 100%;
  height: 54px;
  border: 1px solid ${color.gray100};
  padding: 0 12px;
`;

const FinishButton = styled.button`
  ${font.btn2}
  color: ${color.red};
`;
