import { CollectionConfig, Block } from 'payload/types';
import validateAfterChange from '../hooks/validateAfterChange';

const LevelBlock: Block = {
    slug: "LevelBlock",
    fields: [
        {
            name: "title",
            type: "text"
        },
        {
            name: "text",
            type: "richText"
        }
    ]
}

const Builds: CollectionConfig = {
  slug: 'builds',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
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
      name: "metaTitle",
      type: "text"
    },
    {
      name: "slug",
      type: "text"
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
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
    {
        name: 'shortDescription',
        type: 'text'
    },
    {
      name: "metaDescription",
      type: "text"
    },
    {
        name: "characterConcept",
        type: "richText"
    },
    {
      name: "levelTable",
      type: "array",
      label: "Level Table Row",
      labels: {
        singular: 'Row',
        plural: 'Rows',
      },
      fields: [
        {
          name: "levelTitle",
          type: "text"
        },
        {
          name: "levelNotes",
          type: "text"
        }
      ]
    },
    {
        name: 'levelBlocks',
        type: "blocks",
        blocks: [
            LevelBlock
        ]
    },
    {
      name: 'analysis',
      type: 'richText'
    },
    {
        name: "lastUpdated",
        type: "text"
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    }
  ],
  timestamps: false,
  hooks: {
    afterChange: [
      validateAfterChange
    ]
  }
}

export default Builds;