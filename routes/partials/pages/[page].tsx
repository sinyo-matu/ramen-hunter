import { define } from "../../../utils.ts";
import { ramenApiClient } from "../../../utils.ts";
import { RouteConfig } from "fresh";
import { PagePartial } from "../../../components/PagePartial.tsx";
// We only want to render the content, so disable
// the `_app.tsx` template as well as any potentially
// inherited layouts
export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default define.page(async function PartialPages(ctx) {
  const page = Number(ctx.params.page);
  const shops = await ramenApiClient.getShops({ page, perPage: 10 });
  return <PagePartial shops={shops} />;
});
