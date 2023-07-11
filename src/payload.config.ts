import { buildConfig } from 'payload/config';
import path from 'path';
import Brews from './collections/Brews';
import Builds from "./collections/Builds";
import Categories from './collections/Categories';
import Media from "./collections/Media";
import Pages from "./collections/Pages";
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import seo from '@payloadcms/plugin-seo';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Brews,
    Builds,
    Media,
    Pages,
    Categories,
    Posts,
    Tags,
    Users,
  ],
  plugins: [
    seo({
      collections: [
        "pages",
        "brews",
        "builds",
      ],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `Dire Dice — ${doc.title.value}`,
      generateDescription: ({ doc }) => doc.shortDescription.value,
      generateImage: ({ doc }) => doc.bannerImage.value,
      generateURL: ({ doc }) => `https://www.diredice.com/${doc.collection.slug}${doc.slug.value}`,
    })
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
