import { createDefine } from "fresh";
import { RamenApiClient } from "./ramen_api.ts";

// deno-lint-ignore no-empty-interface
export interface State {}

export const define = createDefine<State>();

export const ramenApiClient = new RamenApiClient();
