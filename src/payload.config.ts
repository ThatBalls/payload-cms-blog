import { buildConfig } from 'payload/config';
import path from 'path';
import Builds from "./collections/Builds";
import Categories from './collections/Categories';
import Media from "./collections/Media";
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';

export default buildConfig({
  serverURL: `http://${process.env.APP_URL}:3001`,
  admin: {
    user: Users.slug,
  },
  collections: [
    Builds,
    Media,
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
