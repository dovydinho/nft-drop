import Image from 'next/image';
import { useAddress } from '@thirdweb-dev/react';
import { BigNumber } from 'ethers';
import { motion } from 'framer-motion';

import { Footer, Navbar } from '@components/ui';
import { urlFor } from '@base/sanity';
import { Collection } from '@base/typings';

interface Props {
  collection: Collection;
  claimedSupply: number;
  totalSupply: BigNumber;
  price: string;
  mintNft: any;
  loading: boolean;
  minting: boolean;
}

const Hero = (props: Props) => {
  const address = useAddress();

  return (
    <>
      <div className="relative flex flex-col lg:flex-row">
        <motion.div
          initial={{ x: -500, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:block lg:h-screen w-full lg:w-1/2 xl:w-2/5 bg-gray-900/10"
        >
          <div className="flex items-center justify-end h-full relative p-24">
            <div className="flex bg-gray-50 p-2 rounded-2xl bg-gradient-to-br from-violet-700/50 to-indigo-900/90 relative">
              <Image
                alt="Main Image"
                src={urlFor(props.collection.mainImage).url()}
                width={400}
                height={400}
                className="rounded-xl object-contain"
              />
              <div className="max-w-xs absolute -bottom-12 -right-16 flex">
                <div className="relative w-full p-2 overflow-hidden bg-gradient-to-tr from-gray-50/50 to-gray-50/60 border border-gray-400 flex flex-col items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
                  <blockquote className="italic z-10">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p>{props.collection.quote}</p>
                  </blockquote>
                </div>
                <div className="w-full h-full bg-gray-300/90 blur-lg absolute z-0" />
              </div>
            </div>
            <Image
              alt="Background Image"
              src={urlFor(props.collection.backgroundImage).url()}
              layout="fill"
              className="object-cover -z-10"
            />
            <div className="absolute -z-10 right-0 w-full h-full bg-gray-900/50 blur" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:h-screen overflow-y-auto w-full lg:w-1/2 xl:w-3/5 flex flex-col items-center justify-between"
        >
          <Navbar />
          <section className="px-2 sm:px-10">
            <div className="text-center max-w-3xl">
              <div className="block lg:hidden">
                <div className="flex items-center justify-center h-full relative pb-20">
                  <div className="flex p-2 rounded-2xl bg-gradient-to-br from-violet-700/50 to-indigo-900/90 relative">
                    <Image
                      alt="Main Image"
                      src={urlFor(props.collection.mainImage).url()}
                      width={400}
                      height={400}
                      className="rounded-xl object-contain"
                    />
                    <div className="w-60 sm:w-72 h-24 absolute -bottom-12 right-4 sm:-right-4 flex">
                      <div className="relative w-full p-2 overflow-hidden bg-gradient-to-tr from-gray-50/50 to-gray-50/60 border border-gray-400 flex flex-col items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
                        <blockquote className="italic z-10">
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm sm:text-base">
                            {props.collection.quote}
                          </p>
                        </blockquote>
                      </div>
                      <div className="w-full h-full bg-gray-300/50 blur-lg absolute z-0" />
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                {props.collection.title}
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF5F6D]">
                Collection
              </h1>
              <p className="my-6 text-gray-500">
                {props.collection.description}
              </p>
              <div className="flex mt-12 items-center justify-center">
                <div className="flex flex-col sm:flex-row w-full text-gray-700">
                  {props.loading ? (
                    <div className="flex w-full justify-center">
                      <svg className="animate-spin rounded-full border-t-gray-700 border-4 border-black/10 h-10 w-10" />
                    </div>
                  ) : (
                    <>
                      <div className="flex sm:w-2/3">
                        <div className="relative py-2 overflow-hidden w-1/2 bg-gradient-to-tr from-gray-400/50 to-gray-400/50 border border-gray-400 flex flex-col font-bold items-center justify-center shadow-lg rounded-tl-xl sm:rounded-l-xl">
                          <div className="z-10 text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl">
                              {props.claimedSupply}
                            </h1>
                            <p className="text-sm sm:text-base">Minted</p>
                          </div>
                          <div className="w-full h-full bg-gray-200 blur-lg absolute z-0" />
                        </div>
                        <div className="relative py-2 overflow-hidden w-1/2 bg-gradient-to-tr from-gray-400/50 to-gray-400/50 border-t border-r sm:border-r-0 sm:border-y rounded-tr-xl sm:rounded-none border-gray-400 flex flex-col font-bold items-center justify-center shadow-lg">
                          <div className="z-10 text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl">
                              {props.totalSupply?.toString()}
                            </h1>
                            <p className="text-sm sm:text-base">Total NFTs</p>
                          </div>
                          <div className="w-full h-full bg-gray-200 blur-lg absolute z-0" />
                        </div>
                      </div>
                      <div className="relative overflow-hidden w-full sm:w-1/3 flex flex-col font-bold items-center justify-center shadow-lg text-gray-100">
                        <button
                          onClick={props.mintNft}
                          disabled={
                            props.minting ||
                            props.loading ||
                            props.totalSupply?.toNumber() ===
                              props.claimedSupply ||
                            !address
                          }
                          className="w-full h-full flex flex-col py-2 font-bold items-center justify-center hover:bg-blue-500 bg-blue-600 border border-gray-600 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {props.totalSupply?.toNumber() ===
                          props.claimedSupply ? (
                            <>Sold Out</>
                          ) : !address ? (
                            <>
                              <span className="flex py-2 flex-col uppercase tracking-widest">
                                <span>Connect</span>
                                <span className="text-xl">to Mint</span>
                              </span>
                            </>
                          ) : (
                            <>
                              {props.minting ? (
                                <>
                                  <span className="py-2 flex flex-col items-center space-y-2">
                                    <svg className="animate-spin rounded-full border-t-transparent border-4 h-5 w-5" />
                                    <span className="tracking-widest uppercase">
                                      Minting
                                    </span>
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="tracking-widest uppercase text-2xl">
                                    Mint
                                  </span>
                                  <span className="text-sm sm:text-base">
                                    {props.price} ETH
                                  </span>
                                </>
                              )}
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <a
                href={`https://goerli.etherscan.io/address/${props.collection.address}`}
                className="flex items-center justify-center pt-4 gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://goerli.etherscan.io/assets/svg/logos/logo-etherscan.svg"
                  width={107}
                  height={24}
                />
                {props.collection.address?.slice(0, 6) +
                  '-' +
                  props.collection.address?.slice(
                    props.collection.address?.length - 4,
                    props.collection.address?.length
                  )}
              </a>
            </div>
          </section>
          <Footer />
        </motion.div>

        <div className="hidden lg:block animate-pulse absolute blur -top-96 -left-72 h-[48rem] w-[48rem] rounded-full bg-gray-50/25 -z-10" />
        <div className="hidden lg:block animate-pulse absolute blur top-20 left-[28rem] h-80 w-80 rounded-full bg-gray-50/25 -z-10" />
        <div className="hidden lg:block animate-pulse absolute blur top-96 left-24 h-96 w-96 rounded-full bg-gray-50/25 -z-10" />
        <div className="hidden lg:block animate-pulse absolute blur top-[26rem] left-[31rem] h-48 w-48 rounded-full bg-gray-50/25 -z-10" />
        <div className="hidden lg:block animate-pulse absolute blur top-[42rem] -left-48 h-96 w-96 rounded-full bg-gray-50/25 -z-10" />
      </div>
    </>
  );
};

export default Hero;
