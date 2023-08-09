import { customAxios } from "@/api/core";
import { IconQuestion, IconSpeaker } from "@/assets/icon";
import { Row, Text } from "@/components/common";
import { color } from "@/styles";
import { flex } from "@/utils";
import { useRef, useState } from "react";
import styled from "styled-components";

interface PropsType {
  content: string;
  pronun: string;
}

const AssistantChat = ({ content, pronun }: PropsType) => {
  const [translateText, setTranslateText] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const playSound = () => audioRef.current?.play();

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
        <IconSpeaker
          width={16}
          height={16}
          color={color.primary}
          onClick={playSound}
        />
        <IconQuestion
          width={16}
          height={16}
          color={color.primary}
          onClick={fetchTranslate}
        />
      </Row>
      <audio
        ref={audioRef}
        src={`http://172.30.1.66:8088/api/voice/${pronun}`}
        autoPlay={true}
        hidden
      />
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
