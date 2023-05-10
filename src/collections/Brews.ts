import { CollectionConfig } from 'payload/types';

const Brews: CollectionConfig = {
  slug: 'brews',
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
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: "externalUrl",
      type: "text",
      required: true,
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

export default Brews;