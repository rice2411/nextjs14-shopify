export async function shopifyFetch(
  { query, variables }: any,
  isAdmin: boolean = false
) {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN || "";
  const key = process.env.SHOPIFY_STOREFRONT_KEY || "";
  const adminApi = process.env.SHOPIFY_ADMIN_API || "";
  const adminkey = process.env.SHOIFY_ADMIN_KEY || "";
  try {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    requestHeaders.set(
      "X-Shopify-Storefront-Access-Token",
      isAdmin ? adminkey : key
    );
    const result = await fetch(isAdmin ? adminApi : endpoint, {
      method: "POST",
      headers: requestHeaders,
      body: { query, variables } && JSON.stringify({ query, variables }),
    });
    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
