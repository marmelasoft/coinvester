import type { AppProps } from 'next/app'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import Store from "@/store/Store";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeSettings } from "@/theme/Theme";
import createEmotionCache from "@/createEmotionCache";
import RTL from "@/layouts/full/shared/customizer/RTL";
import { useSelector } from "@/store/Store";
import { AppState } from "@/store/Store";

import BlankLayout from "@/layouts/blank/BlankLayout";
import FullLayout from "@/layouts/full/FullLayout";

import "@/_mockApis";
import "@/utils/i18n";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'antd/dist/reset.css'

import '@/styles/vars.css'
import '@/styles/global.css'

const queryClient = new QueryClient();
const clientSideEmotionCache = createEmotionCache();

const layouts: any = {
  Blank: BlankLayout,
};

function App({ Component, pageProps }: AppProps) {
  const theme = ThemeSettings();
  const customizer = useSelector((state: AppState) => state.customizer);
  const Layout = layouts[Component.layout] || FullLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider activeChain="ethereum" queryClient={queryClient}>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <RTL direction={customizer.activeDir}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </RTL>
          </ThemeProvider>
        </CacheProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  )
}

export default function MyApp(props: AppProps) {
  return (
    <ReduxProvider store={Store}>
      <App {...props} />
    </ReduxProvider>
  )
}

