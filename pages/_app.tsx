import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import AppLayout from "@/layouts/AppLayout";
import { TITLE } from "@/config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo title={TITLE} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
