"use client";

import { GlobalStyled } from "@/styles";
import { ReactNode } from "react";
import { OverlayProvider } from "@toss/use-overlay";
import { RecoilRoot } from "recoil";

interface PropsType {
  children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
  return (
    <RecoilRoot>
      <OverlayProvider>
        <GlobalStyled />
        {children}
      </OverlayProvider>
    </RecoilRoot>
  );
};

export default Provider;
