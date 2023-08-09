import { color } from "@/styles";
import { flex } from "@/utils";
import { Text } from "@/components/common";
import { styled } from "styled-components";

interface PropsType {
  content: string;
}

const Chat = ({ content }: PropsType) => {
  return (
    <StyledChat>
      <Text fontType="p3" color={color.white}>
        {content}
      </Text>
    </StyledChat>
  );
};

export default Chat;

const StyledChat = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  gap: 8px;
  max-width: 220px;
  padding: 8px 12px;
  border-radius: 14px;
  background-color: ${color.gray100};

  margin-left: auto;
  background-color: ${color.primary};
`;
