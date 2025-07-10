import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export const queryClient = new QueryClient();

export const TanstackQueryClient = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
