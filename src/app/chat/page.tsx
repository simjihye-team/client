"use client";

import { Column, Text } from "@/components/common";
import IconMic from "@/icons/IconMic";
import { color } from "@/styles";
import { flex } from "@/utils";
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
      <Column
        style={{ flex: "1", padding: "24px 32px 0", overflow: "auto" }}
        gap={16}
      >
        {CHAT_LIST_DATA.map(({ role, content }) => (
          <Chat isChatGpt={role === "system"}>
            <Text fontType="btn2">{content}</Text>
          </Chat>
        ))}
      </Column>
      <Column height={80} alignItems="center" justifyContent="center">
        <MikeButton>
          <IconMic />
        </MikeButton>
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

const Chat = styled.div<{ isChatGpt: boolean }>`
  max-width: 282px;
  padding: 14px 22px;
  border-radius: 14px;
  background-color: #e5e6e8;

  ${(props) =>
    !props.isChatGpt &&
    css`
      margin-left: auto;
      background-color: white;
    `}
`;

const MikeButton = styled.button`
  ${flex({ justifyContent: "center", alignItems: "center" })}
  width: 48px;
  height: 48px;
  background-color: ${color.primary};
  border-radius: 999px;
`;
