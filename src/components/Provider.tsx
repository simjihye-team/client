"use client";

import { GlobalStyled } from "@/styles";
import { ReactNode } from "react";
import { OverlayProvider } from "@toss/use-overlay";

interface PropsType {
  children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
  return (
    <OverlayProvider>
      <GlobalStyled />
      {children}
    </OverlayProvider>
  );
};

export default Provider;
