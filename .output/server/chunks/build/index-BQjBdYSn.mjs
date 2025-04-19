import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './ArticleCard-DiPSKTJc.mjs';
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
import 'dayjs';

const _sfc_main$2 = {
  __name: "FeaturedSlider",
  __ssrInlineRender: true,
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5e3
    }
  },
  setup(__props) {
    const currentIndex = ref(0);
    ref(null);
    const featuredArticles = ref([]);
    const loading = ref(true);
    $fetch("/api/articles/carousel", {
      method: "GET"
    }).then((res) => {
      featuredArticles.value = res.data;
    }).catch((data) => {
      console.error("Error:", data);
    }).finally(() => {
      loading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (!loading.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "featured-slider" }, _attrs))} data-v-2fb85dbe><div class="slider-container" data-v-2fb85dbe><!--[-->`);
        ssrRenderList(featuredArticles.value, (article, index2) => {
          _push(`<div class="${ssrRenderClass([{ "active": currentIndex.value === index2 }, "slide"])}" style="${ssrRenderStyle({ backgroundImage: `url(${"/api" + article.coverImage})` })}" data-v-2fb85dbe><div class="slide-overlay" data-v-2fb85dbe><div class="slide-content" data-v-2fb85dbe><div class="tag-container" data-v-2fb85dbe><!--[-->`);
          ssrRenderList(article.tags, (tag) => {
            _push(`<span class="tag" style="${ssrRenderStyle({ backgroundColor: tag.tagColor })}" data-v-2fb85dbe>${ssrInterpolate(tag.tagName)}</span>`);
          });
          _push(`<!--]--></div><h2 class="title" data-v-2fb85dbe>${ssrInterpolate(article.title)}</h2><p class="excerpt" data-v-2fb85dbe>${ssrInterpolate(article.summary)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/articles/${article.id}`,
            class: "btn read-btn"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u9605\u8BFB\u6587\u7AE0`);
              } else {
                return [
                  createTextVNode("\u9605\u8BFB\u6587\u7AE0")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div><button class="nav-btn prev-btn" aria-label="\u4E0A\u4E00\u7BC7" data-v-2fb85dbe><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2fb85dbe><polyline points="15 18 9 12 15 6" data-v-2fb85dbe></polyline></svg></button><button class="nav-btn next-btn" aria-label="\u4E0B\u4E00\u7BC7" data-v-2fb85dbe><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2fb85dbe><polyline points="9 18 15 12 9 6" data-v-2fb85dbe></polyline></svg></button><div class="indicators" data-v-2fb85dbe><!--[-->`);
        ssrRenderList(featuredArticles.value, (article, index2) => {
          _push(`<button class="${ssrRenderClass([{ "active": currentIndex.value === index2 }, "indicator"])}"${ssrRenderAttr("aria-label", `\u8F6C\u5230\u7B2C${index2 + 1}\u5F20\u5E7B\u706F\u7247`)} data-v-2fb85dbe></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturedSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2fb85dbe"]]);
const _sfc_main$1 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    profile: {
      type: Object,
      default: () => ({
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
        name: "\u6280\u672F\u535A\u4E3B",
        bio: "\u4E13\u6CE8\u524D\u7AEF\u6280\u672F\u5206\u4EAB\uFF0C\u70ED\u7231Vue\u548CWebGL\uFF0C\u63A2\u7D22\u4EA4\u4E92\u8BBE\u8BA1\u4E0E\u7528\u6237\u4F53\u9A8C\u7684\u65E0\u9650\u53EF\u80FD\u3002",
        links: [
          { name: "GitHub", url: "https://github.com" },
          { name: "\u6398\u91D1", url: "https://juejin.cn" },
          { name: "\u77E5\u4E4E", url: "https://zhihu.com" }
        ]
      })
    }
  },
  async setup(__props) {
    let __temp, __restore;
    ref([
      { name: "Nuxt", count: 12, size: 1.4 },
      { name: "Vue", count: 18, size: 1.6 },
      { name: "Three.js", count: 8, size: 1.2 },
      { name: "JavaScript", count: 24, size: 1.8 },
      { name: "CSS", count: 15, size: 1.5 },
      { name: "HTML", count: 10, size: 1.3 },
      { name: "WebGL", count: 6, size: 1.1 },
      { name: "TypeScript", count: 14, size: 1.4 }
    ]);
    const tagsList = ref([]);
    const loading = ref(true);
    const error = ref(null);
    try {
      const response = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/tags/blogIndex", {
        method: "GET"
      })), __temp = await __temp, __restore(), __temp);
      console.log(response);
      if ((response == null ? void 0 : response.code) === 200) {
        tagsList.value = response.data;
      }
    } catch (err) {
      error.value = err;
      console.error("\u83B7\u53D6\u6807\u7B7E\u5217\u8868\u5931\u8D25:", err);
    } finally {
      loading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-f6202044><div class="profile-card card" data-v-f6202044><img${ssrRenderAttr("src", __props.profile.avatar)} class="avatar" alt="Profile Avatar" data-v-f6202044><h2 class="name" data-v-f6202044>${ssrInterpolate(__props.profile.name)}</h2><p class="bio" data-v-f6202044>${ssrInterpolate(__props.profile.bio)}</p><div class="social-links" data-v-f6202044><!--[-->`);
      ssrRenderList(__props.profile.links, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="social-link" data-v-f6202044>${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></div></div><div class="tags-card card" data-v-f6202044><h3 class="card-title" data-v-f6202044>\u70ED\u95E8\u6807\u7B7E</h3>`);
      if (!loading.value) {
        _push(`<div class="tags-cloud" data-v-f6202044><!--[-->`);
        ssrRenderList(tagsList.value, (tag) => {
          _push(`<a href="#" class="tag-item" style="${ssrRenderStyle({ backgroundColor: tag.tagColor })}" data-v-f6202044>${ssrInterpolate(tag.tagName)}</a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f6202044"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    console.log(1111);
    const profile = ref({
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      name: "\u6280\u672F\u535A\u4E3B",
      bio: "\u4E13\u6CE8\u524D\u7AEF\u6280\u672F\u5206\u4EAB\uFF0C\u70ED\u7231Vue\u548CWebGL\uFF0C\u63A2\u7D22\u4EA4\u4E92\u8BBE\u8BA1\u4E0E\u7528\u6237\u4F53\u9A8C\u7684\u65E0\u9650\u53EF\u80FD\u3002",
      links: [
        { name: "GitHub", url: "https://github.com" },
        { name: "\u6398\u91D1", url: "https://juejin.cn" },
        { name: "\u77E5\u4E4E", url: "https://zhihu.com" }
      ]
    });
    ref([
      { name: "Vue", icon: "\u26A1", color: "#42b883" },
      { name: "React", icon: "\u269B\uFE0F", color: "#61dafb" },
      { name: "TypeScript", icon: "TS", color: "#3178c6" },
      { name: "Node.js", icon: "\u{1F7E2}", color: "#68a063" },
      { name: "Three.js", icon: "3D", color: "#6b4bb3" },
      { name: "CSS", icon: "\u{1F3A8}", color: "#2965f1" },
      { name: "WebGL", icon: "\u{1F310}", color: "#990000" },
      { name: "Nuxt", icon: "N", color: "#00dc82" }
    ]);
    const loading = ref(true);
    const error = ref(null);
    const articlesList = ref([]);
    try {
      const data = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/articles/blogIndex", { method: "GET" })), __temp = await __temp, __restore(), __temp);
      articlesList.value = data.data;
      console.log(articlesList.value, data, "------data");
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeaturedSlider = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArticleCard = __nuxt_component_2;
      const _component_Sidebar = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-f221cc07><div class="featured-section" data-v-f221cc07><div style="${ssrRenderStyle({ "padding": "15px 30px" })}" data-v-f221cc07>`);
      _push(ssrRenderComponent(_component_FeaturedSlider, null, null, _parent));
      _push(`</div></div><div class="container" data-v-f221cc07><div class="home-content" data-v-f221cc07><div data-v-f221cc07><div class="section-header main-section-header" data-v-f221cc07><h2 class="section-title" data-v-f221cc07>\u6700\u65B0\u6587\u7AE0</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "view-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u67E5\u770B\u5168\u90E8 <span class="arrow" data-v-f221cc07${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode("\u67E5\u770B\u5168\u90E8 "),
              createVNode("span", { class: "arrow" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!loading.value) {
        _push(`<div class="articles-grid" data-v-f221cc07><!--[-->`);
        ssrRenderList(articlesList.value, (article) => {
          _push(ssrRenderComponent(_component_ArticleCard, {
            key: article.id,
            article,
            class: "article-card-wrapper"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="content-layout" data-v-f221cc07><div class="sidebar-area" data-v-f221cc07>`);
      _push(ssrRenderComponent(_component_Sidebar, { profile: profile.value }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f221cc07"]]);

export { index as default };
//# sourceMappingURL=index-BQjBdYSn.mjs.map
