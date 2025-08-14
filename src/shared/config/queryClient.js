import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60000 * 2.4,
            casheTime: Infinity,
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false
        }
    }
})