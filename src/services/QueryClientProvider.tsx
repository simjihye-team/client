"use client";

import { ReactNode, useState } from "react";
import {
  QueryClient,
  QueryClientProvider as JihyeQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface PropsType {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: PropsType) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <JihyeQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </JihyeQueryClientProvider>
  );
};

export default QueryClientProvider;
