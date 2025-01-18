export type Photo = {
  name: string;
  url: string;
  width: number;
  height: number;
  authorId?: string;
  author?: Author;
};

export type Shop = {
  id: string;
  name?: string;
  photos?: Photo[];
};

export type Author = {
  id: string;
  name: string;
  url: string;
};

export const RAMEN_API_URL = "https://ramen-api.dev";

export type getShopsParams = {
  page?: number;
  perPage?: number;
};

export interface ShopsResponse {
  shops: Shop[];
  totalCount: number;
  pageInfo: {
    nextPage: number | null;
    prevPage: number | null;
    lastPage: number;
    currentPage: number;
    currentPerPage: number;
  };
}

export type GetShopParams = {
  shopId: string;
};

export interface ShopResponse {
  shop: Shop;
}

export class RamenApiClient {
  #ramenApiUrl = RAMEN_API_URL;

  async getShops(params: getShopsParams = {
    page: 1,
    perPage: 10,
  }): Promise<ShopsResponse> {
    const url = new URL(`${this.#ramenApiUrl}/shops`);
    url.searchParams.set("page", params.page?.toString() || "1");
    url.searchParams.set("perPage", params.perPage?.toString() || "10");
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }

  async getShop(params: GetShopParams): Promise<ShopResponse> {
    const response = await fetch(
      `${this.#ramenApiUrl}/shops/${params.shopId}`,
    );
    const data = await response.json();
    return data;
  }
}
