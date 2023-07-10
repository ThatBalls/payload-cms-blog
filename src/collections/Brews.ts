import { CollectionConfig } from 'payload/types';
import validateAfterChange from '../hooks/validateAfterChange';

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
      name: "metaTitle",
      type: "text"
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "metaDescription",
      type: "text"
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
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
  hooks: {
    afterChange: [
      validateAfterChange
    ]
  }
}

export default Brews;