import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createCommentVNode, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import dayjs from 'dayjs';

const _sfc_main = {
  __name: "ArticleCard",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const formatDate = (date) => {
      return dayjs(date).format("YYYY-MM-DD");
    };
    const isBookmarked = ref(false);
    const toggleBookmark = () => {
      isBookmarked.value = !isBookmarked.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/articles/${__props.article.id}`,
        class: "article-card"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-content" data-v-7cf85ed1${_scopeId}><div class="cover-image" style="${ssrRenderStyle({ backgroundImage: `url(${"http://localhost:3000/api" + __props.article.coverImage})` })}" data-v-7cf85ed1${_scopeId}><div class="overlay" data-v-7cf85ed1${_scopeId}><!--[-->`);
            ssrRenderList(__props.article.tags, (item) => {
              _push2(`<span class="tag" style="${ssrRenderStyle({ backgroundColor: item.tagColor })}" data-v-7cf85ed1${_scopeId}>${ssrInterpolate(item.tagName)}</span>`);
            });
            _push2(`<!--]--></div></div><div class="content-body" data-v-7cf85ed1${_scopeId}><h3 class="title" data-v-7cf85ed1${_scopeId}><!--[-->`);
            ssrRenderList(__props.article.categories, (self) => {
              _push2(`<span class="title-tag" data-v-7cf85ed1${_scopeId}>${ssrInterpolate(self.categoryName)}</span>`);
            });
            _push2(`<!--]--> ${ssrInterpolate(__props.article.title)}</h3>`);
            if (__props.article.summary) {
              _push2(`<p class="excerpt" data-v-7cf85ed1${_scopeId}>${ssrInterpolate(__props.article.summary)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="meta-info" data-v-7cf85ed1${_scopeId}><div class="left" data-v-7cf85ed1${_scopeId}><span class="date" data-v-7cf85ed1${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7cf85ed1${_scopeId}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-7cf85ed1${_scopeId}></rect><line x1="16" y1="2" x2="16" y2="6" data-v-7cf85ed1${_scopeId}></line><line x1="8" y1="2" x2="8" y2="6" data-v-7cf85ed1${_scopeId}></line><line x1="3" y1="10" x2="21" y2="10" data-v-7cf85ed1${_scopeId}></line></svg> ${ssrInterpolate(formatDate(__props.article.createTime))}</span></div><span class="views" data-v-7cf85ed1${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7cf85ed1${_scopeId}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-v-7cf85ed1${_scopeId}></path><circle cx="12" cy="12" r="3" data-v-7cf85ed1${_scopeId}></circle></svg> ${ssrInterpolate(__props.article.readingNum)}\u6B21 </span></div></div><button class="${ssrRenderClass([{ "bookmarked": isBookmarked.value }, "bookmark-btn"])}" aria-label="\u6536\u85CF\u6587\u7AE0" data-v-7cf85ed1${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7cf85ed1${_scopeId}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" data-v-7cf85ed1${_scopeId}></path></svg></button></div>`);
          } else {
            return [
              createVNode("div", { class: "card-content" }, [
                createVNode("div", {
                  class: "cover-image",
                  style: { backgroundImage: `url(${"http://localhost:3000/api" + __props.article.coverImage})` }
                }, [
                  createVNode("div", { class: "overlay" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.article.tags, (item) => {
                      return openBlock(), createBlock("span", {
                        class: "tag",
                        key: item.id,
                        style: { backgroundColor: item.tagColor }
                      }, toDisplayString(item.tagName), 5);
                    }), 128))
                  ])
                ], 4),
                createVNode("div", { class: "content-body" }, [
                  createVNode("h3", { class: "title" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.article.categories, (self) => {
                      return openBlock(), createBlock("span", {
                        class: "title-tag",
                        key: self.id
                      }, toDisplayString(self.categoryName), 1);
                    }), 128)),
                    createTextVNode(" " + toDisplayString(__props.article.title), 1)
                  ]),
                  __props.article.summary ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "excerpt"
                  }, toDisplayString(__props.article.summary), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "meta-info" }, [
                    createVNode("div", { class: "left" }, [
                      createVNode("span", { class: "date" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("rect", {
                            x: "3",
                            y: "4",
                            width: "18",
                            height: "18",
                            rx: "2",
                            ry: "2"
                          }),
                          createVNode("line", {
                            x1: "16",
                            y1: "2",
                            x2: "16",
                            y2: "6"
                          }),
                          createVNode("line", {
                            x1: "8",
                            y1: "2",
                            x2: "8",
                            y2: "6"
                          }),
                          createVNode("line", {
                            x1: "3",
                            y1: "10",
                            x2: "21",
                            y2: "10"
                          })
                        ])),
                        createTextVNode(" " + toDisplayString(formatDate(__props.article.createTime)), 1)
                      ])
                    ]),
                    createVNode("span", { class: "views" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                        createVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "3"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(__props.article.readingNum) + "\u6B21 ", 1)
                    ])
                  ])
                ]),
                createVNode("button", {
                  class: ["bookmark-btn", { "bookmarked": isBookmarked.value }],
                  onClick: withModifiers(toggleBookmark, ["prevent"]),
                  "aria-label": "\u6536\u85CF\u6587\u7AE0"
                }, [
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
                    createVNode("path", { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" })
                  ]))
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cf85ed1"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=ArticleCard-DiPSKTJc.mjs.map
