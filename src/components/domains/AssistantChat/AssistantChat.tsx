import { flex } from "@/utils";
import { color } from "@/styles";
import { Text, Row } from "@/components/common";
import styled from "styled-components";
import { IconQuestion, IconSpeaker } from "@/assets/icon";
import { useState } from "react";
import { customAxios } from "@/apis/core";

interface PropsType {
  content: string;
}

const AssistantChat = ({ content }: PropsType) => {
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
    <StyledAssistantChat>
      <Text fontType="p3" color={color.gray900}>
        {content}
      </Text>
      {translateText && (
        <Text fontType="p3" color={color.primary}>
          {translateText}
        </Text>
      )}
      <Row style={{ marginTop: "8px" }} gap={8} alignItems="center">
        <IconSpeaker width={16} height={16} color={color.primary} />
        <IconQuestion
          width={16}
          height={16}
          color={color.primary}
          onClick={fetchTranslate}
        />
      </Row>
    </StyledAssistantChat>
  );
};

export default AssistantChat;

const StyledAssistantChat = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  gap: 8px;
  max-width: 220px;
  padding: 8px 12px;
  border-radius: 14px;
  background-color: ${color.gray100};
`;
