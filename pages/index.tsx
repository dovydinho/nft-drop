import { Collection } from '@base/typings';
import { CollectionCard, Navbar } from '@components/ui';
import type { GetServerSideProps, NextPage } from 'next';
import { sanityClient, urlFor } from '../sanity';

interface Props {
  collections: Collection[];
}

const Home = ({ collections }: Props) => {
  const avatarImgUrl =
    'https://n6c2y4pgeqt4u3r7th7yyfhjlm4e4llquctqvm7lde6pduuuwjiq.arweave.net/b4WsceYkJ8puP5n_jBTpWzhOLXCgpwqz6xk88dKUslE';
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-between">
        <Navbar />
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-full max-w-sm md:max-w-3xl xl:max-w-7xl h-[36rem] flex-shrink text-gray-600">
            <section className="w-full h-full pb-6 flex overflow-x-scroll overflow-y-hidden xl:space-x-16 snap-x snap-mandatory scroll-smooth scrollbar-thin z-40 scrollbar-track-gray-200 scrollbar-thumb-gray-300">
              {collections.map((collection, index) => {
                return (
                  <CollectionCard
                    key={index}
                    title={collection.title}
                    slug={collection.slug.current}
                    description={collection.description}
                    coverImageUrl={urlFor(collection.backgroundImage).url()}
                  />
                );
              })}
              <CollectionCard
                title="Annon Originals"
                description="Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups."
                coverImageUrl="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <CollectionCard
                title="Annon Originals"
                description="Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups."
                coverImageUrl="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <CollectionCard
                title="Annon Originals"
                description="Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups."
                coverImageUrl="https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <CollectionCard
                title="Annon Originals"
                description="Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups."
                coverImageUrl="https://images.pexels.com/photos/268966/pexels-photo-268966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </section>
          </div>
        </div>
        <footer className="w-full h-44 bg-gradient-to-t from-gray-400 flex items-center justify-center">
          Artist
        </footer>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"]`;
  const collections = await sanityClient.fetch(query);
  return {
    props: {
      collections
    }
  };
};
