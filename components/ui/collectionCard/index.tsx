import { urlFor } from '@base/sanity';
import { Collection } from '@base/typings';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  collection: Collection;
};

const CollectionCard = ({ collection }: Props) => {
  return (
    <>
      <div className="snap-center md:snap-start w-96 flex flex-shrink-0 p-4">
        <Link href={`/collections/${collection.slug.current}`}>
          <article className="w-full overflow-hidden flex flex-col items-center justify-center rounded-xl bg-gray-50 border-b border-x shadow-lg border-gray-300 cursor-pointer hover:scale-105 transition-all">
            <div className="w-full h-2/3 relative">
              <Image
                src={urlFor(collection?.backgroundImage).url()}
                layout="fill"
                className="object-cover"
              />
            </div>
            <section className="w-full flex flex-col justify-between h-1/3">
              <div className="">
                <h1 className="font-medium tracking-widest text-lg sm:text-xl text-center py-1">
                  {collection.title}
                </h1>
                <p className="h-24 px-4 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200/80 scrollbar-thumb-gray-300">
                  {collection.description}
                </p>
              </div>
              <footer className="flex items-center justify-center w-full h-full bg-gray-200/80 gap-2">
                {collection.address?.slice(0, 6) +
                  '-' +
                  collection.address?.slice(
                    collection.address?.length - 4,
                    collection.address?.length
                  )}
              </footer>
            </section>
          </article>
        </Link>
      </div>
    </>
  );
};

export default CollectionCard;
