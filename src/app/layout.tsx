import Provider from "@/components/Provider";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "실화",
  description: "실제 상황처럼 대화를 하자, 실화",
};

interface PropsType {
  children: ReactNode;
}

const RootLayout = ({ children }: PropsType) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
