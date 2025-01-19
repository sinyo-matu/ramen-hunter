import { define } from "../utils.ts";
import { ramenApiClient } from "../utils.ts";
import { Layout } from "../components/layout.tsx";
import { PagePartial } from "../components/PagePartial.tsx";

export default define.page(async function Shops(ctx) {
  const searchParams = ctx.url.searchParams;
  const page = Number(searchParams.get("page") || 1);
  const shops = await ramenApiClient.getShops({ page, perPage: 10 });
  return (
    <Layout>
      <div class="rtl flex gap-2 flex-grow p-4">
        <PagePartial shops={shops} />
      </div>
    </Layout>
  );
});
