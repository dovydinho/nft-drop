import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useMetamask, useDisconnect, useAddress } from '@thirdweb-dev/react';

const Navbar = () => {
  const [connected, setConnected] = useState(false);
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();

  useEffect(() => {
    address ? setConnected(true) : setConnected(false);
  }, [address, connected]);

  return (
    <nav className="w-full max-w-7xl right-0 py-4 px-8">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <a className="font-bold text-3xl">NFT Drop</a>
          </Link>
        </div>
        <button
          onClick={() =>
            connected ? disconnectWallet() : connectWithMetamask()
          }
          className={`${
            !connected
              ? 'bg-blue-600 hover:bg-blue-400 focus:bg-blue-700 border-indigo-400'
              : 'bg-red-400 hover:bg-red-500 border-red-300'
          } text-gray-100 w-36 py-2 border shadow-lg  rounded-xl focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out`}
        >
          {connected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
      <hr className="border-gray-300" />
      <p className="text-center animate-pulse py-2">
        {connected
          ? 'Connected with ' +
            address?.slice(0, 6) +
            '-' +
            address?.slice(address?.length - 4, address?.length)
          : 'You are not logged in.'}
      </p>
    </nav>
  );
};

export default Navbar;
