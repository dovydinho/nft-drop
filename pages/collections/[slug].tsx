import { Hero } from '@components/ui';
import React from 'react';

type Props = {};

const Collection = (props: Props) => {
  return (
    <>
      <div className="lg:h-screen snap-y lg:snap-mandatory z-0 scrollbar scrollbar-thumb-[#FF5F6D] scrollbar-track-gray-50 scroll-smooth">
        <section className="snap-center mx-auto">
          <Hero />
        </section>
        <section id="test2" className="snap-center">
          <div className="h-screen max-w-7xl mx-auto flex items-center justify-center">
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
      </div>
    </>
  );
};

export default Collection;
