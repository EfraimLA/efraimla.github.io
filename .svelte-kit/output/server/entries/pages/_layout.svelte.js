import { c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { y, O, z, $ } from "../../chunks/runtime.esm.js";
const app = "";
y("en", () => import("../../chunks/en.js"));
y("es", () => import("../../chunks/es.js"));
O({
  fallbackLocale: "en",
  initialLocale: z()
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  $$unsubscribe_isLoading = subscribe($, (value) => $isLoading = value);
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$unsubscribe_isLoading();
  return `${$isLoading ? `Please wait...` : `${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Layout as default
};
