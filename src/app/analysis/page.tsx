"use client";

import { color } from "@/styles";
import { flex } from "@/utils";
import { Button, Column, Row, Text } from "@/components/common";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const AnalysisScreen = () => {
  const { push } = useRouter();

  return (
    <StyledAnalysisScreen>
      <Text fontType="H3" color={color.gray900}>
        사용자님을 분석해보았어요!
      </Text>
      <Column width="100%" gap={24} alignItems="center">
        <Row width="100%" alignItems="center" justifyContent="space-between">
          <Text fontType="p2" color={color.gray900}>
            발음
          </Text>
          <GrpahBox>
            <Grpah width="73%" />
          </GrpahBox>
        </Row>
        <Row width="100%" alignItems="center" justifyContent="space-between">
          <Text fontType="p2" color={color.gray900}>
            속도
          </Text>
          <GrpahBox>
            <Grpah width="57%" />
          </GrpahBox>
        </Row>
        <Row width="100%" alignItems="center" justifyContent="space-between">
          <Text fontType="p2" color={color.gray900}>
            어휘
          </Text>
          <GrpahBox>
            <Grpah width="89%" />
          </GrpahBox>
        </Row>
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
            평가
          </Text>
        </Column>
        <Column gap={16} alignItems="flex-start">
          <Text fontType="p2" color={color.gray900}>
            발음이 알아듣기 살짝 힘들 수도 있어요! 좀 더 천천히 또박또박 말하는
            연습을 해봐요!
          </Text>
          <Text fontType="p2" color={color.gray900}>
            속도는 전체적으로 너무 빨라요 좀만 천천히 말해보아요!
          </Text>
          <Text fontType="p2" color={color.gray900}>
            어휘는 전체적으로 너무 좋아요!! 계속 연습해 보아요!
          </Text>
        </Column>
      </Column>
      <Button onClick={() => push("/")} width="100%" size="LARGE">
        홈으로 가기
      </Button>
    </StyledAnalysisScreen>
  );
};

export default AnalysisScreen;

const StyledAnalysisScreen = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })};
  gap: 64px;
  width: 100%;
  height: max-content;
  background-color: ${color.white};
  padding: 10px 16px;
  padding: 64px 16px;
`;

const GrpahBox = styled.div`
  width: 90%;
  height: 25px;
  border: 1px solid ${color.gray200};
  border-radius: 4px;
`;

const Grpah = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${color.primary};
  border-radius: 4px;
`;
