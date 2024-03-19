import {defineConfig, InferSchemaValues} from '@sanity-typed/types'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const config = defineConfig({
  name: 'default',
  title: 'rob-o-cop-sanity',

  projectId: 'lthw9cct',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config

export type SanityValues = InferSchemaValues<typeof config>
