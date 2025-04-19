import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'better-sqlite3';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const getGradientColors = (baseColor) => {
      if (!baseColor) {
        return {
          start: "rgba(67, 97, 238, 0.8)",
          end: "rgba(58, 12, 163, 0.6)"
        };
      }
      const hexToRgb = (hex) => {
        hex = hex.replace("#", "");
        if (hex.length === 3) {
          hex = hex.split("").map((char) => char + char).join("");
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b };
      };
      const adjustBrightness = (rgb, factor) => {
        return {
          r: Math.min(255, Math.max(0, Math.round(rgb.r * factor))),
          g: Math.min(255, Math.max(0, Math.round(rgb.g * factor))),
          b: Math.min(255, Math.max(0, Math.round(rgb.b * factor)))
        };
      };
      const rgbToRgba = (rgb, alpha) => {
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
      };
      const baseRgb = hexToRgb(baseColor);
      const startColor = adjustBrightness(baseRgb, 1.2);
      const endColor = adjustBrightness(baseRgb, 0.7);
      return {
        start: rgbToRgba(startColor, 0.8),
        end: rgbToRgba(endColor, 0.6)
      };
    };
    const loading = ref(true);
    const error = ref(null);
    const categories = ref([]);
    try {
      const res = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/tags/blogTagAndarticle", { method: "GET" })), __temp = await __temp, __restore(), __temp);
      categories.value = res.data;
      console.log(articlesList.value, res, "------data");
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "categories-page" }, _attrs))} data-v-b5979fdb><div class="container" data-v-b5979fdb><h1 class="page-title" data-v-b5979fdb>\u6587\u7AE0\u5206\u7C7B</h1>`);
      if (!loading.value) {
        _push(`<div class="categories-grid" data-v-b5979fdb><!--[-->`);
        ssrRenderList(categories.value, (category, index2) => {
          _push(`<div class="category-card" style="${ssrRenderStyle({ "--index": index2 })}" data-v-b5979fdb><div class="card-content" style="${ssrRenderStyle({ "--accent-color": category.tagColor, "--gradient-start": getGradientColors(category.tagColor).start, "--gradient-end": getGradientColors(category.tagColor).end })}" data-v-b5979fdb><div class="category-icon" data-v-b5979fdb><div class="icon-placeholder" style="${ssrRenderStyle({ backgroundColor: category.tagColor })}" data-v-b5979fdb>${ssrInterpolate(category.tagName.toUpperCase())}</div></div><div class="card-body" data-v-b5979fdb><h2 class="category-name" data-v-b5979fdb>${ssrInterpolate(category.tagName)}</h2><p class="article-count" data-v-b5979fdb><span class="count-badge" data-v-b5979fdb>${ssrInterpolate(category.articles.length)}</span> \u7BC7\u6587\u7AE0 </p><p class="category-desc" data-v-b5979fdb>${ssrInterpolate(category.description)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/categories/detail?id=${category.id}`,
            class: "view-more"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u6D4F\u89C8\u6587\u7AE0 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b5979fdb${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-b5979fdb${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-b5979fdb${_scopeId}></polyline></svg>`);
              } else {
                return [
                  createTextVNode(" \u6D4F\u89C8\u6587\u7AE0 "),
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    createVNode("line", {
                      x1: "5",
                      y1: "12",
                      x2: "19",
                      y2: "12"
                    }),
                    createVNode("polyline", { points: "12 5 19 12 12 19" })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5979fdb"]]);

export { index as default };
//# sourceMappingURL=index-TDdHIBid.mjs.map
