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
            <div className="w-full h-1/3 px-4 pb-4 overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
              <h1 className="font-medium tracking-widest text-lg sm:text-xl text-center py-1">
                {collection.title}
              </h1>
              <p className="">{collection.description}</p>
            </div>
          </article>
        </Link>
      </div>
    </>
  );
};

export default CollectionCard;
