import type { AppProps } from 'next/app'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import 'antd/dist/reset.css'

import '@/styles/vars.css'
import '@/styles/global.css'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider activeChain="ethereum" queryClient={queryClient}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </QueryClientProvider>
  )
}
