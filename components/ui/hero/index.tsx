import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../navbar';

const Hero = () => {
  return (
    <>
      <div className="relative lg:h-screen flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:h-screen w-full lg:w-1/2 xl:w-2/5 bg-gray-900/10">
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
            <Image
              src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              layout="fill"
              className="object-cover -z-10"
            />
          </div>
        </div>
        <div className="lg:h-screen w-full lg:w-1/2 xl:w-3/5 flex flex-col items-center justify-between px-2 sm:px-10">
          <Navbar />
          <div className="text-center max-w-3xl">
            <div className="block lg:hidden">
              <div className="flex items-center justify-center h-full relative pb-20">
                <div className="flex p-2 rounded-2xl bg-gradient-to-br from-violet-700/50 to-indigo-900/90 relative">
                  <Image
                    src="https://stashh.mypinata.cloud/ipfs/bafybeib3ilpc3llxotwuuswczgd3r2yn5pp27pqmhqrjzx2hgrddmg2awu/807ae21462.jpeg"
                    width={400}
                    height={400}
                    className="rounded-xl object-contain"
                  />
                  <div className="w-60 sm:w-72 h-24 absolute -bottom-12 right-4 sm:-right-4 flex">
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
                        <p className="text-sm sm:text-base">
                          "This is the best NFT Collection."
                        </p>
                        <p className="text-sm text-right">- Nobody</p>
                      </blockquote>
                    </div>
                    <div className="w-full h-full bg-gray-300/50 blur-lg absolute z-0" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Monster NFT</h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF5F6D]">
              Collection
            </h1>
            <p className="my-6 text-gray-500">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="flex mt-12 items-center justify-center">
              <div className="flex flex-col sm:flex-row w-full text-gray-700">
                <div className="flex sm:w-2/3">
                  <div className="relative py-2 overflow-hidden w-1/2 bg-gradient-to-tr from-gray-400/50 to-gray-400/50 border border-gray-400 flex flex-col font-bold items-center justify-center shadow-lg rounded-tl-xl sm:rounded-l-xl">
                    <div className="z-10 text-center">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl">11</h1>
                      <p className="text-sm sm:text-base">Minted</p>
                    </div>
                    <div className="w-full h-full bg-gray-200 blur-lg absolute z-0" />
                  </div>
                  <div className="relative py-2 overflow-hidden w-1/2 bg-gradient-to-tr from-gray-400/50 to-gray-400/50 border-t border-r sm:border-r-0 sm:border-y rounded-tr-xl sm:rounded-none border-gray-400 flex flex-col font-bold items-center justify-center shadow-lg">
                    <div className="z-10 text-center">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl">20</h1>
                      <p className="text-sm sm:text-base">Total NFTs</p>
                    </div>
                    <div className="w-full h-full bg-gray-200 blur-lg absolute z-0" />
                  </div>
                </div>
                <div className="relative overflow-hidden w-full sm:w-1/3 flex flex-col font-bold items-center justify-center shadow-lg text-gray-100">
                  <button className="w-full h-full py-4 tracking-widest uppercase hover:bg-blue-500 bg-blue-600 border border-gray-600 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl">
                    Mint
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a href="#test2" className="hidden lg:block pb-8">
            Down
          </a>
        </div>

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
