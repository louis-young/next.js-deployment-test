import type { AppProps } from "next/app";

import { ApplicationProviders } from "@/components/ApplicationProviders";
import "@/stylesheets/index.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link href="/images/favicon.ico" rel="icon" />
      </Head>

      <ApplicationProviders>
        <Component {...pageProps} />
      </ApplicationProviders>
    </>
  );
};

export default App;
