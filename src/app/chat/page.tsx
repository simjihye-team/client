"use client";

import { customAxios } from "@/api/core";
import { IconMic, IconQuestion, IconSpeaker, IconStopMic } from "@/assets/icon";
import { Column, Row, Text } from "@/components/common";
import { Header } from "@/components/domains";
import AssistantChat from "@/components/domains/AssistantChat/AssistantChat";
import Chat from "@/components/domains/Chat/Chat";
import Modal from "@/components/domains/Modal/Modal";
import { situationAtomState } from "@/store/situation";
import { color } from "@/styles";
import { flex } from "@/utils";
import { useOverlay } from "@toss/use-overlay";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface Chat {
  content: string;
  role: string;
}

const ChatScreen = () => {
  const overlay = useOverlay();
  const { push } = useRouter();
  const situation = useRecoilValue(situationAtomState);
  const [isRecording, setIsRecording] = useState(false);
  const [firstChat, setFirstChat] = useState("");
  const [chatId, setChatId] = useState("");
  const [chatList, setChatList] = useState<Chat[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

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

      mediaRecorderRef.current.onstop = async (event) => {
        const blob = new Blob(audioArray, { type: "audio/ogg" });

        audioArray.splice(0);

        const audioUrl = window.URL.createObjectURL(blob);

        const sound = await fetch(audioUrl)
          .then((r) => r.blob())
          .then((r) => new File([r], "filename", { type: "audio/ogg" }));

        console.log(audioUrl);
        console.log(sound);

        const formData = new FormData();

        formData.append("audio", sound);
        formData.append("data", JSON.stringify({ chatId }));

        // api
        try {
          const { data } = await customAxios.post("/api/voice/text", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              enctype: "multipart/form-data",
            },
          });
          setChatList((prev) => [...prev, ...data.result]);
          overlay.open(({ isOpen, close }) => (
            <Modal
              isOpen={isOpen}
              title="잘 대답하셨어요!"
              content={
                <>
                  <Text fontType="p3" color={color.gray900}>
                    잘 대답하셨어요!! 솔루션을 드릴게요!
                  </Text>
                  <Text fontType="p3" color={color.gray900}>
                    말이 너무 빨라요 천천히 또박또박 말해보아요!
                  </Text>
                  <Text fontType="p3" color={color.red}>
                    번역을 하여 자세하게 보아요!
                  </Text>
                </>
              }
              onConfirm={close}
              onClose={close}
            />
          ));
        } catch (err) {
          console.log(err);
          alert("에러");
        }
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } else {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    }
  };

  const fetchFirstQuestion = async () => {
    try {
      const { data } = await customAxios.post("/api/question/first", {
        situation,
      });
      setFirstChat(data.result.content);
      setChatId(data.ChatId);
    } catch (err) {
      console.log(err);
      alert("뭔가가 안돼느데?");
    }
  };

  useEffect(() => {
    fetchFirstQuestion();
  }, []);

  return (
    <>
      <Header option="chat" title="햄버거 가게에서" onFinsh={openFinishModal} />
      <StyledChatScreen>
        <Column gap={16}>
          {firstChat && <AssistantChat content={firstChat} />}
          {chatList.map(({ role, content }) =>
            role === "assistant" ? (
              <AssistantChat content={content} />
            ) : (
              <Chat content={content} />
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
  min-height: 100vh;
  max-height: max-content;
  background-color: ${color.white};
  padding: 10px 16px;
`;

const MikeButton = styled.button<{ isRecording: boolean }>`
  position: sticky;
  bottom: 0;
  ${flex({ justifyContent: "center", alignItems: "center" })}
  width: 200px;
  height: 48px;
  background-color: ${color.gray200};
  color: ${color.primary};
  border-radius: 16px;
`;
