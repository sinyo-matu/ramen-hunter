import { define } from "../../utils.ts";
import { ramenApiClient } from "../../utils.ts";
import Layout from "../../components/layout.tsx";
export default define.page(async function Shop({ params }) {
  const shop = await ramenApiClient.getShop({ shopId: params.shopId });
  return (
    <Layout>
      <div>
        <h1 class="text-2xl font-bold">{shop.shop.name}</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shop.shop.photos?.map((photo) => (
            <div class="relative group">
              <img
                src={photo.url}
                alt={photo.name}
                class="w-full h-auto"
              />
              <span class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                photo by {photo.author?.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
});
