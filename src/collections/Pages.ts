import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'author'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: "bannerImage",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}

export default Posts;