import { sanityClient } from '@base/sanity';
import { Collection } from '@base/typings';
import { Hero } from '@components/ui';
import { useAddress, useNFTDrop } from '@thirdweb-dev/react';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
interface Props {
  collection: Collection;
}
type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

const Collection = ({ collection }: Props) => {
  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<BigNumber>(0);
  const [price, setPrice] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [minting, setMinting] = useState<boolean>(false);
  const [mintedNFT, setMintedNFT] = useState<any>();
  const [display, setDisplay] = useState<any>({ height: 0, width: 0 });
  const nftDrop = useNFTDrop(collection.address);
  const { width, height } = useWindowDimensions();
  const address = useAddress();

  useEffect(() => {
    setDisplay({ height: height, width: width });
  }, [height, width, display.width, display.height]);

  useEffect(() => {
    if (!nftDrop) return;
    (async function () {
      setLoading(true);
      const claimConditions = await nftDrop.claimConditions.getAll();
      const claimed = await nftDrop.getAllClaimed();
      const total = await nftDrop.totalSupply();
      setPrice(claimConditions?.[0].currencyMetadata.displayValue);
      setClaimedSupply(claimed.length);
      setTotalSupply(total);
      setLoading(false);
    })();
  }, [nftDrop]);

  const mintNft = () => {
    if (!nftDrop || !address) return;
    const quantity = 1;
    setMinting(true);
    nftDrop
      .claimTo(address, quantity)
      .then(async (tx) => {
        // const receipt = tx[0].receipt;
        // const claimedTokenId = tx[0].id;
        const claimedNFT = await tx[0].data();
        setMintedNFT(claimedNFT);
        console.log(claimedNFT);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setMinting(false);
      });
  };

  return (
    <>
      {mintedNFT ? (
        <div className="fixed w-full h-screen z-40 bg-gray-900/80">
          <div className="flex w-full h-full items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.5, 1, 1.25, 1],
                rotate: [270, 0]
              }}
              className="flex flex-col items-center justify-center text-center uppercase rounded-xl bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-200 max-w-[36rem] p-8 shadow-2xl shadow-gray-50/50"
            >
              <h1 className="text-2xl">Congratulations!</h1>
              <h1 className="flex w-full flex-col font-bold">
                <span className="text-5xl">You have</span>
                <span className="text-5xl">minted </span>
                <span className="flex items-end justify-center">
                  <span className="text-3xl pb-1">an</span>
                  <span className="text-7xl">NFT</span>
                </span>
              </h1>
              <a
                href="https://testnets.opensea.io/account"
                className="cursor-pointer w-full mt-8 bg-blue-500 hover:bg-blue-400 text-gray-100 border border-blue-400 rounded-xl px-8 py-2 text-lg uppercase"
              >
                Preview
              </a>
              <hr className="w-full my-4 border-gray-300" />
              <div className="opacity-50 font-bold">
                <p className="text-xs">Your NFT is available on</p>
                <div className="flex items-center gap-2">
                  <img
                    src="https://testnets.opensea.io/static/images/logos/opensea.svg"
                    className="w-9"
                  />
                  <h1 className="text-2xl">OpenSea</h1>
                </div>
              </div>
            </motion.div>
          </div>
          <Confetti width={display.width} height={display.height} />
        </div>
      ) : null}

      <div className="lg:h-screen lg:overflow-hidden z-0">
        <section className="mx-auto">
          <Hero
            collection={collection}
            claimedSupply={claimedSupply}
            totalSupply={totalSupply}
            price={price}
            mintNft={mintNft}
            loading={loading}
            minting={minting}
          />
        </section>
      </div>
    </>
  );
};

export default Collection;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.params?.slug;
  const query = `*[_type == "collection" && slug.current == "${slug}"][0]`;
  const collection = await sanityClient.fetch(query);

  if (!collection) {
    return { notFound: true };
  }

  return {
    props: { collection }
  };
};

const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};
