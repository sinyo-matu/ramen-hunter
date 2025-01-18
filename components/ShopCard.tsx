import { Shop } from "../types.ts";
export function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div class="bg-white rounded-lg shadow-md p-4">
      <h2 class="text-2xl font-bold">
        <a href={`/shops/${shop.id}`}>{shop.name}</a>
      </h2>
      {shop.photos && shop.photos.length > 0 && (
        <div class="relative group">
          <img
            src={shop.photos[0].url}
            alt={shop.photos[0].name}
            class="w-full h-auto"
          />
          <span class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            photo by {shop.photos[0].authorId}
          </span>
        </div>
      )}
    </div>
  );
}
