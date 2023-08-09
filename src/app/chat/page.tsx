"use client";

import { Column, Text } from "@/components/common";
import { Header } from "@/components/domains";
import { color, font } from "@/styles";
import { flex } from "@/utils";
import { IconMic } from "@/assets/icon";
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
              </Text>
            </Chat>
          ))}
        </Column>
      </StyledChatScreen>
      <Column
        style={{
          backgroundColor: color.white,
          position: "sticky",
          bottom: 0,
          top: 0,
        }}
        height={80}
        alignItems="center"
        justifyContent="center"
      >
        <MikeButton>
          <IconMic width={24} height={24} color={color.gray900} />
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
  max-width: 282px;
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

const MikeButton = styled.button`
  ${flex({ justifyContent: "center", alignItems: "center" })}
  width: 48px;
  height: 48px;
  background-color: ${color.white};
  border: 2px solid ${color.primary};
  border-radius: 50%;
`;
