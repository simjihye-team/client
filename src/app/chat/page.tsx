"use client";

import { Column, Text } from "@/components/common";
import IconMic from "@/icons/IconMic";
import { color } from "@/styles";
import styled, { css } from "styled-components";

const CHAT_LIST_DATA = [
  {
    role: "user",
    content: "Hello!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },

  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
  {
    role: "system",
    content:
      "HelloHello! Nice to meet you! asdfjasdifjaiewuh aoif aweiof wefwjeofijwe d",
  },
  {
    role: "user",
    content: "You too!",
  },
];

const ChatScreen = () => {
  return (
    <StyledChatScreen>
      <ChatList>
        {CHAT_LIST_DATA.map((item) => (
          <Chat isAIChat={item.role === "system"}>
            <Text fontType="btn2">{item.content}</Text>
          </Chat>
        ))}
      </ChatList>
      <Column height={80} alignItems="center" justifyContent="center">
        <ContinueButton>
          <IconMic />
        </ContinueButton>
      </Column>
    </StyledChatScreen>
  );
};

export default ChatScreen;

const StyledChatScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
`;

const ChatList = styled.div`
  flex: 1;
  padding: 24px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

const Chat = styled.div<{ isAIChat?: boolean }>`
  max-width: 282px;

  padding: 14px 22px;
  border-radius: 14px;
  background-color: #e5e6e8;

  ${(props) =>
    !props.isAIChat &&
    css`
      margin-left: auto;
      background-color: white;
    `}
`;

const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${color.primary};
  border-radius: 999px;
`;
