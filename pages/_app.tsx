import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
