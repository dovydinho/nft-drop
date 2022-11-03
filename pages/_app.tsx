import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Head from 'next/head';

const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  const meta = {
    title: 'NFT Drop - Web3 Application Demo',
    description: `Open-source NFT Drop web3 application built with Next.js, Tailwind CSS and Thirdweb powered by Ethereum Test Network. Visit dovydas.io for more info.`,
    type: 'website'
  };
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content="https://nft-drop.dovydas.io" />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="NFT Drop" />
        <meta property="og:description" content={meta.description} />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
