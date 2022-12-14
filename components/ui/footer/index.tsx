import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  return (
    <section className="py-8 text-gray-400 tracking-widest">
      <ul className="flex uppercase items-center justify-center gap-8 h-24">
        <li className="hover:text-gray-700 hover:font-bold lg:w-32 xl:w-40 text-center transition-all">
          {router.query.slug ? (
            <div className="group flex items-center justify-center gap-2">
              <img
                src="https://testnets.opensea.io/static/images/logos/opensea.svg"
                className="w-6 grayscale group-hover:grayscale-0"
              />
              <LinkItem
                href={`https://testnets.opensea.io/collection/${router.query.slug}`}
                title="Collection"
              />
            </div>
          ) : (
            <LinkItem
              href="https://www.dovydas.io/blog/my-web3-app-overview-nft-drop"
              title="Overview"
            />
          )}
        </li>
        <li className="hover:text-gray-700 hover:font-bold lg:w-36 xl:w-40 text-center transition-all">
          <LinkItem
            href="https://www.dovydas.io/showcase"
            title="All Projects"
          />
        </li>
        <li className="hover:text-gray-700 hover:font-bold lg:w-32 xl:w-40 text-center transition-all">
          <LinkItem href="https://www.dovydas.io/blog" title="Blog" />
        </li>
      </ul>
      <div className="flex justify-center gap-8">
        <Link href="https://twitter.com/dovydinho">
          <a target="_blank">
            <svg
              className="w-6 h-6 hover:text-blue-300 fill-current transition-all hover:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </Link>
      </div>
    </section>
  );
}

const LinkItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href}>
      <a target="_blank">{title}</a>
    </Link>
  );
};
