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
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
