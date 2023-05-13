import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react';

import 'antd/dist/reset.css'

import '@/styles/vars.css'
import '@/styles/global.css'

const activeChain = 'goerli';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}
