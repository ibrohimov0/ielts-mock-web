import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: Infinity,
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false
        }
    }
});