"use client";

import { IconArrowLeft } from "@/assets/icon";
import { Button, Column, Text } from "@/components/common";
import { color } from "@/styles";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import SVGSmirkingFace from "@/assets/svg/smirking-face.svg";
import Image from "next/image";
import styled from "styled-components";

const StartScreen = () => {
  const { push } = useRouter();

  return (
    <>
      <Header>
        <IconArrowLeft onClick={() => push("/")} width={24} height={24} />
      </Header>
      <StyledStartScreen>
        <Column width="100%" gap={32} alignItems="center">
          <Column width="100%" gap={16} alignItems="center">
            <Image
              src={SVGSmirkingFace}
              width={160}
              height={160}
              alt="smirking-face"
            />
            <Text fontType="H2">햄버거 체인점에서</Text>
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
              안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
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
              안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            </Text>
          </Column>
        </Column>

        <Button width="100%" size="LARGE">
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
  padding: 0 16px 32px;
`;

const Header = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  width: 100%;
  height: 54px;
  border: 1px solid ${color.gray100};
  padding: 0 8px;
  margin-bottom: 16px;
`;
