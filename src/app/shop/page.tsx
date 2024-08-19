import { shopifyFetch } from "@/service/api/shopify";

export async function getAllProducts() {
  return shopifyFetch(
    {
      query: `{
customers(first: 10) {
  nodes {
    displayName
  }
}
}`,
    },
    true
  );
}

export default async function Shop() {
  const res = await getAllProducts();
  return <div>{JSON.stringify(res)}</div>;
}
