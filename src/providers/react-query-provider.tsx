"use client";

import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function QueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />{" "}
      {/* چون نمی خواهیم در بارگزاری اول دیده شود این رو فالس می کنیم 
      ReactQueryDEvtools برای این استفاده می شود که بتوانیم در کانسول تنظیمات و کارهاش رو ببینیم
      
      */}
    </QueryClientProvider>
  );
}
export default QueryProvider;
