import {defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string',
    // }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: [{type: 'author' as const}],
    // }),
    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'string',
    }),
  ],

  // preview: {
  //   select: {
  //     name: 'name',
  //     email: 'email',
  //   },
  //   // prepare(selection) {
  //   //   const {author} = selection
  //   //   return {...selection, subtitle: author && `by ${author}`}
  //   // },
  // },
})
