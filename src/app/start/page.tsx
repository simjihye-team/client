"use client";

import { Button, Column, Text } from "@/components/common";
import { color } from "@/styles";
import { flex } from "@/utils";
import SVGHappyFace from "@/assets/svg/happy-face-with-enlarged-eyes.svg";
import Image from "next/image";
import { Header } from "@/components/domains";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const StartScreen = () => {
  const { push } = useRouter();

  return (
    <>
      <Header option="default" />
      <StyledStartScreen>
        <Column width="100%" gap={32} alignItems="center">
          <Column width="100%" gap={16} alignItems="center">
            <Image
              src={SVGHappyFace}
              width={160}
              height={160}
              alt="smirking-face"
            />
            <Text fontType="H2">햄버거 가게에서</Text>
          </Column>

          <Column width="100%">
            <Column
              style={{
                marginBottom: "8px",
                paddingBottom: "4px",
                borderBottom: `1px solid ${color.gray100}`,
              }}
              width="100%"
              alignItems="flex-start"
            >
              <Text fontType="p2" color={color.gray600}>
                시나리오
              </Text>
            </Column>
            <Text fontType="p2" color={color.gray900}>
              일본 휴가 중에 유명한 버거 체인점인 맥도날드에 들어갔어요. 맛있는
              버거를 주문해 볼게요.
            </Text>
          </Column>

          <Column width="100%">
            <Column
              style={{
                marginBottom: "8px",
                paddingBottom: "4px",
                borderBottom: `1px solid ${color.gray100}`,
              }}
              width="100%"
              alignItems="flex-start"
            >
              <Text fontType="p2" color={color.gray600}>
                목표
              </Text>
            </Column>
            <Text fontType="p2" color={color.gray900}>
              음식 주문하기
            </Text>
          </Column>
        </Column>
        <Button onClick={() => push("/chat")} width="100%" size="LARGE">
          시작하기
        </Button>
      </StyledStartScreen>
    </>
  );
};

export default StartScreen;

const StyledStartScreen = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  })}
  gap: 16px;
  width: 100%;
  height: 100vh;
  padding: 0 16px 54px;
`;
