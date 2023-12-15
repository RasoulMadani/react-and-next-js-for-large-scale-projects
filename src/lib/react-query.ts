import { QueryCache, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // برای مدیریت کش استفاده می شود ولی مدیریت خطاها را هم می توانیم با آن شخصی سازی کنیم
    onError: (error) => {
      // خطاها اینجا می آید و می توانیم مدیریت کنیم
      // show notification
    },
  }),

  defaultOptions: {
    queries: {
      retry: false, // زمانی که درخواست شکست خورد به صورت خودبه خود درخواست نزند
      refetchOnWindowFocus: false, // زمانی که تب مرورگر رو عوض می کنیم و یا مرورگر رو اندازه اش رو تغییر می دهیم دوباره خودبه خود کویری نزند
      useErrorBoundary: false, // استفاده از مدیریت خطاهای پیش فرض ری اکت کویری رو خاموش می کنیم
      cacheTime: 1000 * 60 * 60 * 24, // زمانی که نیاز داریم تا داده ها رو از کش بخواند و دوباره فچ نکند
    },
  },
});
