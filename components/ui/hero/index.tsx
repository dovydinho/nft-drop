import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="h-screen relative">
        <nav className="absolute w-full">
          <div className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-bold text-3xl">NFT Drop</span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="lg:flex-grow lg:text-right mr-8 text-gray-400">
                <a
                  className="block lg:inline-block px-2 hover:text-gray-50"
                  href="#responsive-header"
                >
                  About
                </a>
                <a
                  className="block lg:inline-block px-2 hover:text-gray-50"
                  href="#responsive-header"
                >
                  Roadmap
                </a>
                <a
                  className="block lg:inline-block px-2 hover:text-gray-50"
                  href="#responsive-header"
                >
                  Team
                </a>
                <a
                  className="block lg:inline-block px-2 hover:text-gray-50"
                  href="#responsive-header"
                >
                  FAQ
                </a>
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-gray-100 w-36 py-2 border shadow-md  rounded-xl border-indigo-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <div className="w-1/2 h-screen">
            <div className="flex items-center justify-end h-full relative p-24">
              <div className="flex bg-gray-50 p-2 rounded-2xl bg-gradient-to-br from-violet-700/50 to-indigo-900/90 relative">
                <Image
                  src="https://stashh.mypinata.cloud/ipfs/bafybeib3ilpc3llxotwuuswczgd3r2yn5pp27pqmhqrjzx2hgrddmg2awu/807ae21462.jpeg"
                  width={400}
                  height={400}
                  className="rounded-xl object-contain"
                />
                <div className="w-72 h-24 absolute -bottom-12 -right-16 flex">
                  <div className="relative w-full py-2 overflow-hidden bg-gradient-to-tr from-gray-50/50 to-gray-50/60 border border-gray-400 flex flex-col items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
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
                      <p>"This is the best NFT Collection."</p>
                      <p className="text-sm text-right">- Nobody</p>
                    </blockquote>
                  </div>
                  <div className="w-full h-full bg-gray-300/50 blur-lg absolute z-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-gray-900/80 h-screen">
            <div className="flex flex-col justify-center h-full max-w-3xl px-8">
              <h1 className="text-6xl">Monster NFT</h1>
              <h1 className="text-7xl font-bold text-[#FF5F6D]">Collection</h1>
              <p className="my-6 text-gray-300">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <button className="border border-blue-300 w-56 py-3 tracking-widest uppercase rounded-xl hover:bg-blue-500 bg-blue-600">
                Mint
              </button>

              <div className="flex mt-12 items-center justify-center">
                <div className="flex w-full">
                  <div className="relative py-2 overflow-hidden w-1/3 bg-gradient-to-tr from-gray-900/80 to-gray-900/90 border border-gray-600 flex flex-col font-bold items-center justify-center shadow-lg rounded-l-xl">
                    <div className="z-10 text-center">
                      <h1 className="text-5xl">11</h1>
                      <p>Minted</p>
                    </div>
                    <div className="w-full h-full bg-gray-600/50 blur-lg absolute z-0" />
                  </div>
                  <div className="relative py-2 overflow-hidden w-1/3 bg-gradient-to-tr from-gray-900/80 to-gray-900/90 border-y border-gray-600 flex flex-col font-bold items-center justify-center shadow-lg">
                    <div className="z-10 text-center">
                      <h1 className="text-5xl">20</h1>
                      <p>Total NFTs</p>
                    </div>
                    <div className="w-full h-full bg-gray-600/50 blur-lg absolute z-0" />
                  </div>
                  <div className="relative py-2 overflow-hidden w-1/3 bg-gradient-to-tr from-gray-900/80 to-gray-900/90 border border-gray-600 flex flex-col font-bold items-center justify-center shadow-lg rounded-r-xl">
                    <div className="z-10 text-center">
                      <h1 className="text-5xl">0</h1>
                      <p>Owned</p>
                    </div>
                    <div className="w-full h-full bg-gray-600/50 blur-lg absolute z-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="absolute flex w-full items-center justify-center bottom-16">
            <div className="flex w-[36rem] gap-8">
              <div className="relative py-2 overflow-hidden w-1/2 bg-gradient-to-tr from-gray-50/90 to-gray-50/80 border border-gray-400 flex flex-col font-bold items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
                <div className="z-10 text-center">
                  <h1 className="text-5xl">11</h1>
                  <p>Minted</p>
                </div>
                <div className="w-full h-full bg-gray-600/50 blur-lg absolute z-0" />
              </div>
              <div className="relative py-2 overflow-hidden w-1/2 bg-gradient-to-tr from-gray-900/80 to-gray-900/90 border border-gray-600 flex flex-col font-bold items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
                <div className="z-10 text-center">
                  <h1 className="text-5xl">20</h1>
                  <p>Total NFTs</p>
                </div>
                <div className="w-full h-full bg-gray-600/50 blur-lg absolute z-0" />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex flex-col md:grid grid-cols-10 content-center p-8 lg:p-0 gap-8 mx-auto h-full">
          <div className="col-span-6">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-6xl">Monster NFT</h1>
              <h1 className="text-7xl font-bold text-[#FF5F6D]">Collection</h1>
              <p className="my-6 text-gray-300">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <button className="border border-blue-300 w-56 py-3 tracking-widest uppercase rounded-xl hover:bg-blue-500 bg-blue-600">
                Mint
              </button>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex items-center justify-center h-full relative">
              <div className="flex bg-gray-50 p-2 rounded-2xl bg-gradient-to-br from-violet-700/50 to-indigo-900/90">
                <Image
                  src="https://stashh.mypinata.cloud/ipfs/bafybeib3ilpc3llxotwuuswczgd3r2yn5pp27pqmhqrjzx2hgrddmg2awu/807ae21462.jpeg"
                  width={400}
                  height={400}
                  className="rounded-xl object-contain"
                />
              </div>
              <div className="w-72 h-24 absolute -bottom-12 -left-28 flex">
                <div className="relative w-full py-2 overflow-hidden bg-gradient-to-tr from-gray-50/50 to-gray-50/60 border border-gray-400 flex flex-col items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
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
                    <p>"This is the best NFT Collection."</p>
                    <p className="text-sm text-right">- Nobody</p>
                  </blockquote>
                </div>
                <div className="w-full h-full bg-gray-300/50 blur-lg absolute z-0" />
              </div>
            </div>
          </div>
          <div className="col-span-10 mt-24">
            <div className="flex max-w-3xl items-center justify-center mx-auto gap-4">
              <div className="relative py-2 overflow-hidden w-1/3 bg-gradient-to-tr from-gray-50/25 to-gray-500/50 border border-gray-400 flex flex-col font-bold items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
                <div className="z-10 text-center">
                  <h1 className="text-5xl">11</h1>
                  <p>Minted</p>
                </div>
                <div className="w-full h-full bg-gray-600/50 blur-lg absolute z-0" />
              </div>
              <div className="relative py-2 overflow-hidden w-1/3 bg-gradient-to-tr from-gray-50/25 to-gray-500/50 border border-gray-400 flex flex-col font-bold items-center justify-center shadow-lg shadow-gray-50/20 rounded-xl">
                <div className="z-10 text-center">
                  <h1 className="text-5xl">20</h1>
                  <p>Total NFTs</p>
                </div>
                <div className="w-full h-full bg-gray-600/50 blur-lg absolute z-0" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="animate-pulse absolute blur -top-96 -left-72 h-[48rem] w-[48rem] rounded-full bg-gray-50/25 -z-10" />
        <div className="animate-pulse absolute blur top-20 left-[28rem] h-80 w-80 rounded-full bg-gray-50/25 -z-10" />
        <div className="animate-pulse absolute blur top-96 left-24 h-96 w-96 rounded-full bg-gray-50/25 -z-10" />
        <div className="animate-pulse absolute blur top-[26rem] left-[31rem] h-48 w-48 rounded-full bg-gray-50/25 -z-10" />
        <div className="animate-pulse absolute blur top-[42rem] -left-48 h-96 w-96 rounded-full bg-gray-50/25 -z-10" />
      </div>
    </>
  );
};

export default Hero;
