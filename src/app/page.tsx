"use client";

import { color } from "@/styles";
import { Button, Column, Text } from "@/components/common";
import { flex } from "@/utils";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import Image from "next/image";
import SVGSmirkingFace from "@/assets/svg/smirking-face.svg";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { situationAtomState } from "@/store/situation";

const MainScreen = () => {
  const { push } = useRouter();
  const [situation, setSituation] = useRecoilState(situationAtomState);

  const handleSituationDataChange = useCallback(
    (data: string) => {
      setSituation(data);
    },
    [setSituation]
  );

  return (
    <StyledMainScreen>
      <Column
        width="100%"
        height="100%"
        gap={32}
        alignItems="center"
        justifyContent="space-between"
      >
        <Column gap={24} width="100%" alignItems="center">
          <Text fontType="H2" color={color.gray900}>
            대화의 상황을 선택해주세요.
          </Text>
          <Image
            src={SVGSmirkingFace}
            width={160}
            height={160}
            alt="smirking-face"
          />
          <Dropdown
            data={["음식점", "편의점", "지하철"]}
            placeholder="상황을 선택해주세요."
            onChange={(data) => handleSituationDataChange(data)}
            name="situation"
            value={situation}
            width="100%"
          />
        </Column>
        <Button onClick={() => push("/start")} size="LARGE" width="100%">
          다음
        </Button>
      </Column>
    </StyledMainScreen>
  );
};

export default MainScreen;

const StyledMainScreen = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  width: 100%;
  height: 100vh;
  padding: 54px 16px;
`;
