import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  setup(__props) {
    const skills = ref([
      {
        name: "\u524D\u7AEF\u5F00\u53D1",
        icon: "\u269B\uFE0F",
        color: "#61dafb",
        description: "Vue.js, React, TypeScript, \u73B0\u4EE3\u5316\u524D\u7AEF\u5DE5\u7A0B\u5316"
      },
      {
        name: "\u540E\u7AEF\u5F00\u53D1",
        icon: "\u{1F680}",
        color: "#3eaf7c",
        description: "Node.js, Python, Go, \u5FAE\u670D\u52A1\u67B6\u6784\u8BBE\u8BA1"
      },
      {
        name: "\u6570\u636E\u5E93",
        icon: "\u{1F4BE}",
        color: "#f29111",
        description: "MySQL, MongoDB, Redis, \u6570\u636E\u5E93\u4F18\u5316"
      },
      {
        name: "\u4EBA\u5DE5\u667A\u80FD",
        icon: "\u{1F916}",
        color: "#6b4bb3",
        description: "Machine Learning, Deep Learning, NLP"
      }
    ]);
    const experience = ref([
      {
        position: "\u9AD8\u7EA7\u5168\u6808\u5DE5\u7A0B\u5E08",
        company: "XX\u79D1\u6280\u6709\u9650\u516C\u53F8",
        period: "2020 - \u81F3\u4ECA",
        description: "\u8D1F\u8D23\u516C\u53F8\u6838\u5FC3\u4EA7\u54C1\u7684\u67B6\u6784\u8BBE\u8BA1\u548C\u5F00\u53D1\uFF0C\u5E26\u9886\u56E2\u961F\u5B8C\u6210\u591A\u4E2A\u91CD\u8981\u9879\u76EE"
      },
      {
        position: "\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",
        company: "YY\u4E92\u8054\u7F51\u516C\u53F8",
        period: "2018 - 2020",
        description: "\u53C2\u4E0E\u7535\u5546\u5E73\u53F0\u7684\u5F00\u53D1\uFF0C\u8D1F\u8D23\u6027\u80FD\u4F18\u5316\u548C\u7528\u6237\u4F53\u9A8C\u6539\u8FDB"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-2937f8e7><div class="container" data-v-2937f8e7><h1 class="page-title" data-v-2937f8e7>\u5173\u4E8E\u6211</h1><section class="about-section profile-section" data-v-2937f8e7><div class="section-content" data-v-2937f8e7><div class="avatar" data-v-2937f8e7><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="\u4E2A\u4EBA\u5934\u50CF" data-v-2937f8e7></div><div class="profile-info" data-v-2937f8e7><h2 data-v-2937f8e7>Hi, \u6211\u662F\u4E00\u540D\u5168\u6808\u5F00\u53D1\u8005</h2><p data-v-2937f8e7>\u70ED\u7231\u6280\u672F\uFF0C\u4E13\u6CE8\u4E8EWeb\u5F00\u53D1\u548C\u4EBA\u5DE5\u667A\u80FD\u9886\u57DF\u3002\u559C\u6B22\u63A2\u7D22\u65B0\u6280\u672F\uFF0C\u4EAB\u53D7\u7F16\u7A0B\u5E26\u6765\u7684\u4E50\u8DA3\u3002</p><div class="social-links" data-v-2937f8e7><a href="https://github.com" target="_blank" class="social-link" data-v-2937f8e7><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2937f8e7><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-2937f8e7></path></svg></a><a href="https://twitter.com" target="_blank" class="social-link" data-v-2937f8e7><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2937f8e7><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-2937f8e7></path></svg></a></div></div></div></section><section class="about-section skills-section" data-v-2937f8e7><h2 class="section-title" data-v-2937f8e7>\u6280\u80FD\u4E13\u957F</h2><div class="skills-grid" data-v-2937f8e7><!--[-->`);
      ssrRenderList(skills.value, (skill) => {
        _push(`<div class="skill-card" data-v-2937f8e7><div class="skill-icon" style="${ssrRenderStyle({ backgroundColor: skill.color })}" data-v-2937f8e7><span class="icon-text" data-v-2937f8e7>${ssrInterpolate(skill.icon)}</span></div><h3 data-v-2937f8e7>${ssrInterpolate(skill.name)}</h3><p data-v-2937f8e7>${ssrInterpolate(skill.description)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="about-section experience-section" data-v-2937f8e7><h2 class="section-title" data-v-2937f8e7>\u5DE5\u4F5C\u7ECF\u5386</h2><div class="timeline" data-v-2937f8e7><!--[-->`);
      ssrRenderList(experience.value, (exp) => {
        _push(`<div class="timeline-item" data-v-2937f8e7><div class="timeline-content" data-v-2937f8e7><h3 data-v-2937f8e7>${ssrInterpolate(exp.position)}</h3><h4 data-v-2937f8e7>${ssrInterpolate(exp.company)}</h4><p class="timeline-date" data-v-2937f8e7>${ssrInterpolate(exp.period)}</p><p class="timeline-description" data-v-2937f8e7>${ssrInterpolate(exp.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2937f8e7"]]);

export { index as default };
//# sourceMappingURL=index-ByuWZzqS.mjs.map
