import { _ as __nuxt_component_2 } from './ArticleCard-DiPSKTJc.mjs';
import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import 'dayjs';
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

const _sfc_main = {
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const loading = ref(true);
    const error = ref(null);
    const articles = ref([]);
    ref(1);
    const sortBy = ref("newest");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleCard = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-articles-page" }, _attrs))} data-v-52461745><div class="container" data-v-52461745>`);
      if (!loading.value) {
        _push(`<div data-v-52461745><div class="articles-section" data-v-52461745><div class="section-header" data-v-52461745><h2 class="section-title" data-v-52461745>\u6587\u7AE0\u5217\u8868</h2><div class="sort-options" data-v-52461745><button class="${ssrRenderClass([{ "active": sortBy.value === "newest" }, "sort-btn"])}" data-v-52461745> \u6700\u65B0 </button><button class="${ssrRenderClass([{ "active": sortBy.value === "popular" }, "sort-btn"])}" data-v-52461745> \u70ED\u95E8 </button></div></div>`);
        if (articles.value.length > 0) {
          _push(`<div class="articles-grid" data-v-52461745><!--[-->`);
          ssrRenderList(articles.value, (article) => {
            _push(ssrRenderComponent(_component_ArticleCard, {
              key: article.id,
              article,
              class: "article-card-wrapper"
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="empty-state" data-v-52461745><div class="empty-icon" data-v-52461745><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-52461745><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-52461745></path><polyline points="14 2 14 8 20 8" data-v-52461745></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-52461745></line><line x1="16" y1="17" x2="8" y2="17" data-v-52461745></line><polyline points="10 9 9 9 8 9" data-v-52461745></polyline></svg></div><p class="empty-text" data-v-52461745>\u8BE5\u5206\u7C7B\u4E0B\u6682\u65E0\u6587\u7AE0</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "back-btn"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u8FD4\u56DE\u9996\u9875`);
              } else {
                return [
                  createTextVNode("\u8FD4\u56DE\u9996\u9875")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value) {
        _push(`<div class="loading-state" data-v-52461745><div class="spinner" data-v-52461745></div><p data-v-52461745>\u52A0\u8F7D\u4E2D...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value && !loading.value) {
        _push(`<div class="error-state" data-v-52461745><div class="error-icon" data-v-52461745><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-52461745><circle cx="12" cy="12" r="10" data-v-52461745></circle><line x1="12" y1="8" x2="12" y2="12" data-v-52461745></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-52461745></line></svg></div><h2 class="error-title" data-v-52461745>\u51FA\u9519\u4E86</h2><p class="error-message" data-v-52461745>\u65E0\u6CD5\u52A0\u8F7D\u8BE5\u5206\u7C7B\u7684\u6587\u7AE0\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "back-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8FD4\u56DE\u5206\u7C7B\u9875`);
            } else {
              return [
                createTextVNode("\u8FD4\u56DE\u5206\u7C7B\u9875")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52461745"]]);

export { detail as default };
//# sourceMappingURL=detail-DWOHDpEg.mjs.map
