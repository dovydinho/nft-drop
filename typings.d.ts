import { NextPage } from 'next';

export interface NextPageWithLayout extends NextPage {
  Layout: any;
}

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
}

interface Creator {
  _ref: string;
  _type: 'reference';
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Collection extends SanityBody {
  _type: 'collection';
  title: string;
  description: string;
  address: string;
  slug: { current: string };
  creator: Creator;
  mainImage: Image;
  backgroundImage: Image;
}

export interface Creator extends SanityBody {
  _type: 'creator';
  name: string;
  bio: string;
  address: string;
  slug: { current: string };
  avatar: Image;
}
