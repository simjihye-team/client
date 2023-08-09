"use client";

import { Text } from "@/components/common";
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
      <ContinueBox>
        <ContinueButton>
          <Text fontType="btn2" color="white">
            말하기
          </Text>
        </ContinueButton>
      </ContinueBox>
    </StyledChatScreen>
  );
};

export default ChatScreen;

const StyledChatScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0 32px;
  background-color: #f3f3f3;
`;

const ChatList = styled.div`
  flex: 1;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const ContinueBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  height: 38px;
  border-radius: 999px;
  background-color: #1c49ff;
`;
