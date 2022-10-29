import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ConnectWallet, useMetamask, useAddress } from '@thirdweb-dev/react';

type Props = {};

const Navbar = (props: Props) => {
  const [connected, setConnected] = useState(false);
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  useEffect(() => {
    address ? setConnected(true) : setConnected(false);
    console.log(address);
    console.log(connected);
  }, [address, connected]);

  return (
    <nav className="w-full max-w-7xl right-0 py-4">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <a className="font-bold text-3xl">NFT Drop</a>
          </Link>
        </div>
        <div>
          <ConnectWallet colorMode="light" accentColor="#F213A4" />
        </div>
        {/* <button
          onClick={() => connectWithMetamask()}
          className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-gray-100 w-36 py-2 border shadow-md  rounded-xl border-indigo-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Connect
        </button> */}
      </div>
      <hr className="border-gray-300" />
      {!connected ? (
        <p className="text-center animate-pulse py-2">You are not logged in.</p>
      ) : null}
    </nav>
  );
};

export default Navbar;
