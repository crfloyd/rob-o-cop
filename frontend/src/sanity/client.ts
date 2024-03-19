import { createClient } from "@sanity-typed/client";
import { SanityValues } from "@sanity/sanity.config";
import { createClient as client2 } from "@sanity/client";
import comment from "@sanity/schemaTypes/comment";
// import post from "@sanity/schemaTypes/post";

export const client = createClient<SanityValues>({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-05-23",
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});

const baseClient = client2({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-05-23",
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});

export const queryMessagesAsync = async (from = 0, to = 5) =>
  client.fetch(
    //`*[_type == "comment"] | order(_createdAt desc) [${from}...${to}] {body, email, name, _createdAt}`
    `*[_type == "comment"] | order(_createdAt desc) {body, email, name, _createdAt}`
  );

export const addMessageAsync = async (comment: {
  email: string;
  name: string;
  body: string;
  createdAt: Date;
}) => {
  const resp = await baseClient.create({
    _type: "comment",
    _id: `comment-${Date.now()}`,
    body: comment.body,
    email: comment.email,
    name: comment.name,
    publishedAt: new Date().toString(),
  });
  // const resp = await client.create({
  //   _type: "comment",
  //   _id: `comment-${Date.now()}`,
  //   body: comment.body,
  //   email: comment.email,
  //   name: comment.name,
  //   publishedAt: new Date().toString(),
  // });
  return resp;
};
