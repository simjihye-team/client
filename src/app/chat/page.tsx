"use client";

import { IconMic, IconQuestion, IconSpeaker, IconStopMic } from "@/assets/icon";
import { Column, Row, Text } from "@/components/common";
import { Header } from "@/components/domains";
import { CHAT_LIST_DATA } from "@/constants/chat";
import { color } from "@/styles";
import { flex } from "@/utils";
import { MouseEventHandler, useRef, useState } from "react";
import styled, { css } from "styled-components";

const ChatScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const handleRecordButtonClick: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    if (!isRecording) {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      mediaRecorderRef.current = new MediaRecorder(mediaStream);

      const audioArray: Blob[] = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioArray.push(event.data);
      };

      mediaRecorderRef.current.onstop = (event) => {
        const blob = new Blob(audioArray, { type: "audio/ogg codecs=opus" });
        audioArray.splice(0);

        const audioUrl = window.URL.createObjectURL(blob);
        const sound = new File([audioUrl], "soundBlob", {
          lastModified: new Date().getTime(),
          type: "audio",
        });

        console.log(sound);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } else {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <Header />
      <StyledChatScreen>
        <Column gap={16}>
          {CHAT_LIST_DATA.map(({ role, content }) => (
            <Chat isChatGpt={role === "system"}>
              <Text
                fontType="p3"
                color={role === "system" ? color.gray900 : color.white}
              >
                {content}
                {role === "system" && (
                  <Row style={{ marginTop: "8px" }} gap={8} alignItems="center">
                    <IconSpeaker width={16} height={16} color={color.primary} />
                    <IconQuestion
                      width={16}
                      height={16}
                      color={color.primary}
                    />
                  </Row>
                )}
              </Text>
            </Chat>
          ))}
        </Column>
      </StyledChatScreen>
      <Column
        style={{
          borderTop: `1px solid ${color.gray100}`,
          backgroundColor: color.white,
          position: "sticky",
          bottom: 0,
          top: 0,
        }}
        height={80}
        alignItems="center"
        justifyContent="center"
      >
        <MikeButton isRecording={isRecording} onClick={handleRecordButtonClick}>
          {isRecording ? (
            <IconStopMic width={24} height={24} color={color.primary} />
          ) : (
            <IconMic width={24} height={24} color={color.primary} />
          )}
        </MikeButton>
      </Column>
    </>
  );
};

export default ChatScreen;

const StyledChatScreen = styled.div`
  ${flex({ flexDirection: "column" })}
  width: 100%;
  height: max-content;
  background-color: ${color.white};
  padding: 10px 16px;
`;

const Chat = styled.div<{ isChatGpt: boolean }>`
  max-width: 220px;
  padding: 8px 12px;
  border-radius: 14px;
  background-color: ${color.gray100};

  ${(props) =>
    props.isChatGpt !== true &&
    css`
      margin-left: auto;
      background-color: ${color.primary};
    `}
`;

const MikeButton = styled.button<{ isRecording: boolean }>`
  ${flex({ justifyContent: "center", alignItems: "center" })}
  width: 250px;
  height: 48px;
  background-color: ${color.gray200};
  color: ${color.primary};
  border-radius: 16px;
`;
