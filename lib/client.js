import { createClient } from '@sanity/client';
import  createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_TOKEN, // Only if you want to update content with the client
  useCdn: true
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
