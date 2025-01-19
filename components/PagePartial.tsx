import { Partial } from "fresh/runtime";
import { ShopsResponse } from "../ramen_api.ts";
import { ShopCard } from "./ShopCard.tsx";

export function PagePartial({ shops }: { shops: ShopsResponse }) {
  const linkButtonClasses = "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ";
  const linkButtonDisabledClasses =
    "opacity-50 select-none pointer-events-none";
  return (
    <Partial name="pages">
      <div class="flex justify-end mb-4">
        <div class="flex flex-col justify-center items-center gap-2">
          <div class="flex flex-col gap-2">
            <a
              class={`${linkButtonClasses} ${
                shops.pageInfo.nextPage === null
                  ? linkButtonDisabledClasses
                  : ""
              }`}
              href={`?page=${shops.pageInfo.nextPage}`}
              f-partial={`/partials/pages/${shops.pageInfo.nextPage}`}
            >
              ←
            </a>
            <div class="flex flex-col gap-2">
              <span class="text-2xl text-center">
                {shops.pageInfo.currentPage}
              </span>
              <span class="text-sm text-center">
                /
              </span>
              <span class="text-2xl text-center">
                {shops.pageInfo.lastPage}
              </span>
            </div>
            <a
              class={`${linkButtonClasses} ${
                shops.pageInfo.prevPage === null
                  ? linkButtonDisabledClasses
                  : ""
              }`}
              href={`?page=${shops.pageInfo.prevPage}`}
              f-partial={`/partials/pages/${shops.pageInfo.prevPage}`}
            >
              →
            </a>
          </div>
        </div>
      </div>
      <div class="rtl">
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {shops.shops.map((shop) => (
            <div class="break-inside-avoid mb-4 ltr" f-client-nav={false}>
              <ShopCard shop={shop} />
            </div>
          ))}
        </div>
      </div>
    </Partial>
  );
}
