import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout";
import {useState} from "react";
import { Amplify } from 'aws-amplify';
import awsconfig from 'src/aws-exports';

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
    const [auth, setAuth] = useState(false)
    Amplify.configure(awsconfig);
  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable)}>
            <Layout setAuth={setAuth} auth={auth}>
                <Component {...pageProps} auth={auth} setAuth={setAuth} />
            </Layout>
        </div>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}
