"use client";

import { IconMic, IconQuestion, IconSpeaker, IconStopMic } from "@/assets/icon";
import { Column, Row, Text } from "@/components/common";
import { Header } from "@/components/domains";
import Modal from "@/components/domains/Modal/Modal";
import { CHAT_LIST_DATA } from "@/constants/chat";
import { situationAtomState } from "@/store/situation";
import { color } from "@/styles";
import { flex } from "@/utils";
import { useOverlay } from "@toss/use-overlay";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";

const ChatScreen = () => {
  const overlay = useOverlay();
  const { push } = useRouter();
  const situation = useRecoilValue(situationAtomState);
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

  const openFinishModal = () => {
    overlay.open(({ isOpen, close }) => (
      <Modal
        isOpen={isOpen}
        title="정말 끝내겠습니까?"
        content={
          <>
            <Text fontType="p3" color={color.gray900}>
              당신의 퍼포먼스는 정말 대단했습니다!
            </Text>
            <Text fontType="p3" color={color.gray900}>
              이제 당신의 실력을 보여 줄 시간입니다!
            </Text>
          </>
        }
        confirmText="나가기"
        onConfirm={() => {
          push("/");
          close();
        }}
        onClose={close}
      />
    ));
  };

  return (
    <>
      <Header option="chat" title={situation} onFinsh={openFinishModal} />
      <StyledChatScreen>
        <Column gap={16}>
          {CHAT_LIST_DATA.map(({ role, content }) =>
            role === "system" ? (
              <Chat isChatGpt={role === "system"}>
                <Text fontType="p3" color={color.gray900}>
                  {content}
                </Text>
                <Text fontType="p3" color={color.primary}>
                  번역번역번역번역번역번역번역번역번역번역번역번역
                </Text>
                <Row style={{ marginTop: "8px" }} gap={8} alignItems="center">
                  <IconSpeaker width={16} height={16} color={color.primary} />
                  <IconQuestion width={16} height={16} color={color.primary} />
                </Row>
              </Chat>
            ) : (
              <Chat isChatGpt={role === "system"}>
                <Text fontType="p3" color={color.white}>
                  {content}
                </Text>
              </Chat>
            )
          )}
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
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  gap: 8px;
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
  width: 200px;
  height: 48px;
  background-color: ${color.gray200};
  color: ${color.primary};
  border-radius: 16px;
`;
