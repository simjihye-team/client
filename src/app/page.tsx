"use client";

import { color } from "@/styles";
import { Button, Column, Row, Text } from "@/components/common";
import { flex } from "@/utils";
import styled from "styled-components";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import Image from "next/image";
import SVGSmirkingFace from "@/assets/svg/smirking-face.svg";
import { useCallback, useState } from "react";

const MainScreen = () => {
  const [situation, setSituation] = useState("");

  const handleSituationDataChange = useCallback(
    (data: string) => {
      setSituation(data);
    },
    [setSituation]
  );

  return (
    <StyledMainScreen>
      <Column
        style={{ height: "100%", padding: "0 32px" }}
        gap={32}
        alignItems="center"
        justifyContent="space-between"
        width={400}
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
            onChange={(data) => handleSituationDataChange(data)}
            name="situation"
            value={situation}
            width="100%"
          />
        </Column>

        <Button width="100%" size="MEDIUM">
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
  padding: 64px 0;
`;
