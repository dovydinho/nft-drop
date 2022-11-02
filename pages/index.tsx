import { Collection } from '@base/typings';
import { CollectionCard, Footer, Navbar } from '@components/ui';
import type { GetServerSideProps, NextPage } from 'next';
import { sanityClient, urlFor } from '../sanity';

interface Props {
  collections: Collection[];
}

const Home = ({ collections }: Props) => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-between">
        <Navbar />
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-full max-w-sm md:max-w-3xl xl:max-w-7xl h-[36rem] flex-shrink text-gray-600">
            <section className="w-full h-full pb-6 flex overflow-x-scroll overflow-y-hidden xl:space-x-16 snap-x snap-mandatory scroll-smooth scrollbar-thin z-40 scrollbar-track-gray-200 scrollbar-thumb-gray-300">
              {collections.map((collection, index) => {
                return <CollectionCard collection={collection} key={index} />;
              })}
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"] | order(publishedAt desc)`;
  const collections = await sanityClient.fetch(query);
  return {
    props: {
      collections
    }
  };
};
