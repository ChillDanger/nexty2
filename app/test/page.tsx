import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const QUERY = defineQuery(`
  *[_id == "singleton-profile"][0]{
    firstName,
    email
  }
`);

export default async function TestPage() {
  const { data } = await sanityFetch({ query: QUERY });

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}