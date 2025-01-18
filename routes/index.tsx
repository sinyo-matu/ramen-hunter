import { ShopCard } from "../components/ShopCard.tsx";
import { define } from "../utils.ts";
import { ramenApiClient } from "../utils.ts";
import { Layout } from "../components/layout.tsx";

export default define.page(async function Shops(ctx) {
  const searchParams = ctx.url.searchParams;
  const page = Number(searchParams.get("page") || 1);
  const shops = await ramenApiClient.getShops({ page, perPage: 10 });
  return (
    <Layout>
      <div>
        <div class="flex flex-col items-center justify-center">
          <div class="flex gap-4 my-4">
            <button
              class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={!shops.pageInfo.prevPage}
            >
              <a href={`?page=${shops.pageInfo.prevPage}`}>
                Previous
              </a>
            </button>
            <span class="py-2">
              Page {shops.pageInfo.currentPage} / {shops.pageInfo.lastPage}
            </span>
            <button
              class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={!shops.pageInfo.nextPage}
            >
              <a href={`?page=${shops.pageInfo.nextPage}`}>Next</a>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shops.shops.map((shop) => <ShopCard shop={shop} />)}
        </div>
      </div>
    </Layout>
  );
});
