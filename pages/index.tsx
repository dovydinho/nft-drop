import { Hero } from '@components/ui';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (event) => setScrollX(event.currentTarget.scrollLeft);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-thumb-[#FF5F6D] scrollbar-track-gray-50">
        <section className="snap-center mx-auto">
          <Hero />
        </section>
        <section
          id="test2"
          className="snap-center bg-gray-50/10 max-w-7xl mx-auto"
        >
          <div className="h-screen">
            <div className="max-w-3xl m-auto py-24 text-center">
              <h1 className="text-4xl font-bold my-4">
                About the <span className="text-[#FF5F6D]">collection</span>
              </h1>
              <p className="my-4">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <p className="my-4">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-gray-100 w-36 py-2 border shadow-md  rounded-lg border-indigo-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Learn more
              </button>
            </div>
          </div>
        </section>
        <section className="relative snap-center mx-auto h-screen flex items-end justify-center">
          <div className="flex flex-col overflow-hidden text-left md:flex-row justify-evenly mx-auto items-end px-12 pb-24">
            <div
              id="test3"
              onScroll={handleScroll}
              className="nft-collections max-w-7xl flex snap-mandatory snap-x scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-50 gap-12 py-24"
            >
              <Card scrollX={scrollX} id="first" />
              <Card scrollX={scrollX} id="second" />
              <Card scrollX={scrollX} id="third" />
              <Card scrollX={scrollX} id="fourth" />
              <Card scrollX={scrollX} id="fifth" className="pr-[55.5rem]" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

const Card = ({ id, scrollX, className }) => {
  const [color, setColor] = useState('bg-gray-800');
  const WIDTH = 432;

  useEffect(() => {
    console.log(scrollX);
    if (scrollX < WIDTH) {
      setColor('bg-gray-900');
    } else if (scrollX < WIDTH * 2) {
      setColor('bg-gray-800');
    } else if (scrollX < WIDTH * 3) {
      setColor('bg-gray-700');
    } else if (scrollX < WIDTH * 4) {
      setColor('bg-gray-600');
    } else if (scrollX < WIDTH * 5) {
      setColor('bg-gray-500');
    } else {
      setColor('bg-gray-400');
    }
  }, [scrollX]);

  return (
    <>
      <div
        className={`flex-shrink-0 snap-start flex flex-col space-y-5 items-center justify-center ${className}`}
        id={id}
      >
        <div className="relative w-96 h-72 flex items-center justify-center bg-gray-50 rounded-xl">
          <div className="absolute -top-12">
            <Image
              src="https://n6c2y4pgeqt4u3r7th7yyfhjlm4e4llquctqvm7lde6pduuuwjiq.arweave.net/b4WsceYkJ8puP5n_jBTpWzhOLXCgpwqz6xk88dKUslE"
              width={120}
              height={120}
              className="rounded-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className={`absolute ${color} w-full h-full top-0 left-0 -z-10`} />
    </>
  );
};
