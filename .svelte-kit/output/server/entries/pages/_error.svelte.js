import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { X } from "../../chunks/runtime.esm.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1vm90d1{margin:0px;min-height:100vh;overflow:hidden;padding:0.5rem\n}@media(prefers-color-scheme: dark){section.svelte-1vm90d1{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n    }}section.svelte-1vm90d1{display:flex;flex-direction:column;align-items:center;justify-content:center\n}img.svelte-1vm90d1{margin-bottom:1.25rem;width:100%\n}@media(min-width: 768px){img.svelte-1vm90d1{width:33.333333%\n    }}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<section id="not-found" class="svelte-1vm90d1"><img src="/images/not_found.jpeg" alt="not found figurative image" class="svelte-1vm90d1"> <h1 class="text-4xl">${escape($_("not_found.title"))}</h1> <h2>${escape($_("not_found.subtitle"))}</h2> <br> <a href="/">${escape($_("not_found.home_link"))}</a> </section>`;
});
export {
  Error as default
};
