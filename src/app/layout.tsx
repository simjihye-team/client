import type { Metadata } from "next";
import { ReactNode } from "react";
import QueryClientProvider from "@/services/QueryClientProvider";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface PropsType {
  children: ReactNode;
}

const RootLayout = ({ children }: PropsType) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <Provider>{children}</Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
