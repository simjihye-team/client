import { color } from "@/styles";
import { flex } from "@/utils";
import { Row, Text } from "@/components/common";
import { styled } from "styled-components";
import { IconQuestion, IconSpeaker } from "@/assets/icon";
import { customAxios } from "@/api/core";
import { useState } from "react";

interface PropsType {
  content: string;
}

const Chat = ({ content }: PropsType) => {
  const [translateText, setTranslateText] = useState("");

  const fetchTranslate = async () => {
    console.log("click");
    try {
      const { data } = await customAxios.post("/api/trans", { japen: content });
      console.log(data);
      setTranslateText(data.result.translatedText);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledChat>
      <Text fontType="p3" color={color.white}>
        {content}
      </Text>
      {translateText && (
        <Text fontType="p3" color={color.white}>
          {translateText}
        </Text>
      )}
      <Row style={{ marginTop: "8px" }} gap={8} alignItems="center">
        <IconSpeaker width={16} height={16} color={color.white} />
        <IconQuestion
          width={16}
          height={16}
          color={color.white}
          onClick={fetchTranslate}
        />
      </Row>
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
