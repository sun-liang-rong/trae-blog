import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { marked } from 'marked';
import hljs from 'highlight.js';
import dayjs from 'dayjs';
import { _ as _export_sfc, u as useRoute, b as useRouter } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const formatDate = (date) => {
      return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
    };
    hljs.configure({
      ignoreUnescapedHTML: true,
      // 避免高亮库与 marked 的 sanitize 冲突
      languages: ["javascript", "html", "css"]
      // 预加载语言
    });
    const article = ref({});
    const loading = ref(true);
    $fetch("/api/articles/detail?articleId=" + route.params.id, {
      method: "GET"
    }).then((res) => {
      if ((res == null ? void 0 : res.code) === 200) {
        console.log(res, "res");
        hljs.initHighlighting();
        const render = new marked.Renderer();
        render.code = function(code, language) {
          console.log(code, language, "1code");
          const validLanguage = hljs.getLanguage(code.lang) ? code.lang : "plaintext";
          const uniqueId = "code-" + Math.random().toString(36).substr(2, 9);
          const highlighted = hljs.highlight(validLanguage, code.text).value;
          return `
      <div class="code-block-wrapper">
        <div class="copy-button" id="${"btn-" + uniqueId}" onclick="copyCode('${uniqueId}')">\u590D\u5236</div>
        <pre id="${uniqueId}" class="hljs ${validLanguage}">${highlighted}</pre>
      </div>
      `;
        };
        marked.setOptions({
          highlight: function(code) {
            console.log(code, "code");
            return hljs.highlightAuto(code).value;
          },
          renderer: render,
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
        });
        article.value = res.data;
        article.value.content = marked(article.value.content);
      }
    }).finally(() => {
      loading.value = false;
    });
    const readingProgress = ref(0);
    ref(null);
    ref(false);
    ref(0);
    ref({
      id: parseInt(route.params.id) - 1 > 0 ? parseInt(route.params.id) - 1 : null,
      title: "\u4E0A\u4E00\u7BC7\u6587\u7AE0\u6807\u9898"
    });
    ref({
      id: parseInt(route.params.id) + 1,
      title: "\u4E0B\u4E00\u7BC7\u6587\u7AE0\u6807\u9898"
    });
    ref([
      {
        id: 3,
        title: "\u73B0\u4EE3CSS\u5E03\u5C40\u6280\u5DE7",
        tag: "CSS",
        coverImage: "/images/featured-css.jpg"
      },
      {
        id: 4,
        title: "Vue3\u7EC4\u5408\u5F0FAPI\u6700\u4F73\u5B9E\u8DF5",
        tag: "Vue",
        coverImage: "/images/vue3-api.jpg"
      },
      {
        id: 5,
        title: "JavaScript\u5F02\u6B65\u7F16\u7A0B\u8FDB\u9636",
        tag: "JavaScript",
        coverImage: "/images/js-async.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "article-detail" }, _attrs))} data-v-1c897a66><div class="reading-progress" style="${ssrRenderStyle({ width: readingProgress.value + "%" })}" data-v-1c897a66></div><div class="container" data-v-1c897a66><button class="back-button" data-v-1c897a66>\u2190 \u8FD4\u56DE\u5217\u8868</button><div class="article-main" data-v-1c897a66><h1 class="title" data-v-1c897a66>${ssrInterpolate(article.value.title)}</h1><div class="meta" data-v-1c897a66><div class="meta-tags" data-v-1c897a66><!--[-->`);
      ssrRenderList(_ctx.tags, (item) => {
        _push(`<span class="tag" style="${ssrRenderStyle({ backgroundColor: item.tagC })}" data-v-1c897a66>${ssrInterpolate(item.tagName)}</span>`);
      });
      _push(`<!--]--></div><div class="meta-info" data-v-1c897a66><span class="date" data-v-1c897a66><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1c897a66><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-1c897a66></rect><line x1="16" y1="2" x2="16" y2="6" data-v-1c897a66></line><line x1="8" y1="2" x2="8" y2="6" data-v-1c897a66></line><line x1="3" y1="10" x2="21" y2="10" data-v-1c897a66></line></svg> ${ssrInterpolate(formatDate(article.value.createTime0))}</span><span class="views" data-v-1c897a66><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1c897a66><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-v-1c897a66></path><circle cx="12" cy="12" r="3" data-v-1c897a66></circle></svg> ${ssrInterpolate(article.value.readingNum)}\u6B21\u9605\u8BFB </span></div></div>`);
      if (!loading.value) {
        _push(`<div class="content" data-v-1c897a66>${(_a = article.value.content) != null ? _a : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="share-buttons" data-v-1c897a66><button class="share-btn" aria-label="\u5206\u4EAB\u5230\u5FAE\u4FE1" data-v-1c897a66><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1c897a66><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" data-v-1c897a66></path></svg></button><button class="share-btn" aria-label="\u5206\u4EAB\u5230\u5FAE\u535A" data-v-1c897a66><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1c897a66><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-1c897a66></path></svg></button><button class="share-btn" aria-label="\u590D\u5236\u94FE\u63A5" data-v-1c897a66><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1c897a66><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" data-v-1c897a66></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" data-v-1c897a66></path></svg></button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c897a66"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D8AvW7Eo.mjs.map
