import { p as publicAssetsURL, b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, ref, onUnmounted, mergeProps, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { c as cjs, F as FaCode, a as FaTimes, b as FaBars, d as FaGithub, e as FaLinkedin, f as FaQuestion, H as HiMail, B as BsFillPersonLinesFill } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-52e762fb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

// THIS FILE IS AUTO GENERATED
function AiOutlineArrowRight (props) {
  return cjs.GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"}}]})(props);
}

const _sfc_main$6 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        id: 1,
        link: "Home"
      },
      {
        id: 2,
        link: "About"
      },
      {
        id: 3,
        link: "Projects"
      },
      {
        id: 4,
        link: "Technologies"
      },
      {
        id: 5,
        link: "Education"
      },
      {
        id: 6,
        link: "Contact"
      }
    ];
    const isShowNav = ref(false);
    ref(false);
    const handleScroll = () => {
    };
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 flex bg-neutral-900/60 justify-between h-20 items-center py-4 px-4 md:px-6 text-white mx-auto lg:px-24 md:py-0 w-full z-30 transition-colors duration-700" }, _attrs))}><div class="flex flex-row gap-4 items-center"><h1 class="flex items-center text-[1.1rem] lg:text-[1.3rem] hover:text-primary-color hover:scale-125 duration-500">`);
      _push(ssrRenderComponent(unref(FaCode), {
        size: "27",
        class: "mr-2 text-base"
      }, null, _parent));
      _push(` Maria Khachatryan </h1></div><ul class="hidden lg:flex gap-5"><!--[-->`);
      ssrRenderList(links, (linkItem) => {
        _push(`<li class="cursor-pointer hover:scale-105 rounded-lg hover:bg-primary-color p-2 duration-200 hover:text-black text-[1.1rem] lg:text-[1.3rem]">${ssrInterpolate(linkItem.link)}</li>`);
      });
      _push(`<!--]--></ul><div class="cursor-pointer pr-4 z-10 text-gray-100 lg:hidden">`);
      if (unref(isShowNav)) {
        _push(ssrRenderComponent(unref(FaTimes), {
          size: "30",
          class: "hover:text-primary-color"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(FaBars), {
          size: "30",
          class: "hover:text-primary-color"
        }, null, _parent));
      }
      _push(`</div>`);
      if (unref(isShowNav)) {
        _push(`<ul class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-green-950 opacity-90"><!--[-->`);
        ssrRenderList(links, (linkItem) => {
          _push(`<li class="px-4 cursor-pointer py-6 text-4xl opacity-100">${ssrInterpolate(linkItem.link)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "MobileSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        id: 1,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maria-khachatryan1606/"
      },
      {
        id: 2,
        label: "GitHub",
        href: "https://github.com/mariakhachatryann"
      },
      {
        id: 3,
        label: "Mail",
        href: "mailto:mariakhachatryan23@gmail.com"
      },
      {
        id: 4,
        label: "Resume",
        href: "/MariaCv.pdf",
        download: "MariaKhachatryancv"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex mt-4 desktop:hidden" }, _attrs))}><ul class="flex gap-2 flex-wrap justify-center"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li class="flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md"><a href="{href}" class="flex gap-3 items-center w-full text-white text-sm" download="{download}" target="_blank" rel="noreferrer">`);
        if (link.label === "LinkedIn") {
          _push(ssrRenderComponent(unref(FaLinkedin), { size: "20" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (link.label === "GitHub") {
          _push(ssrRenderComponent(unref(FaGithub), { size: "20" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (link.label === "Mail") {
          _push(ssrRenderComponent(unref(HiMail), { size: "20" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (link.label === "Resume") {
          _push(ssrRenderComponent(unref(BsFillPersonLinesFill), { size: "20" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileSocialLinks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$5;
const _imports_0 = "" + publicAssetsURL("mariaKh1.jpg");
const _sfc_main$4 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MobileSocialLinks = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "Home",
        class: "relative w-full md:h-screen h-unset"
      }, _attrs))}><div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8"><div class="flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start"><h1 class="text-4xl md:text-[52px] font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4">I&#39;m Maria Khachatryan</h1><h2 class="rounded-md bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white"> Front End Developer</h2><p class="text-gray-300 py-4 max-x-md text-justify">certified by Platzi, one of the largest online professional education platforms in Latin America, and by Academlo, where I graduated as a Full Stack developer with JavaScript. Welcome to my portfolio, I&#39;m excited to share my journey with you!</p><div class="hidden desktop:flex"><div class="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0"> About me <span class="group-hover:rotate-90 duration-300">`);
      _push(ssrRenderComponent(unref(AiOutlineArrowRight), {
        size: "20",
        class: "ml-2"
      }, null, _parent));
      _push(`</span></div></div>`);
      _push(ssrRenderComponent(_component_MobileSocialLinks, null, null, _parent));
      _push(`</div><div class="flex order-1 md:order-2 mt-8 md:mt-0"><img${ssrRenderAttr("src", _imports_0)} alt="My profile" class="mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20" style="${ssrRenderStyle({ "filter": "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" })}"></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "About",
        class: "relative w-full md:h-screen text-white h-unset"
      }, _attrs))}><div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg"><div class="pb-8"><h2 class="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">About me</h2></div><p class="mb-4 py-6">Hey! I&#39;m based on Bogot\xE1 and I&#39;m Professional in Audiovisual Media with more than 7 years of experience as a video editor. However, I felt that I had the potential for more, so my intellectual curiosity led me to enter into the world of programming. </p><p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` See more <span class=""${_scopeId}>`);
            _push2(ssrRenderComponent(unref(AiOutlineArrowRight), {
              size: "25",
              class: "ml-1"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode(" See more "),
              createVNode("span", { class: "" }, [
                createVNode(unref(AiOutlineArrowRight), {
                  size: "25",
                  class: "ml-1"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const html = "" + buildAssetsURL("html.d20c9482.png");
const css = "" + buildAssetsURL("css.4040bdba.png");
const javascript = "" + buildAssetsURL("javascript.d04a05c4.png");
const typescript = "data:image/png;base64,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";
const vue = "" + buildAssetsURL("vue.7664541d.png");
const nuxt = "" + buildAssetsURL("nuxt.98702951.svg");
const tailwind = "" + buildAssetsURL("tailwind.47f3710a.png");
const git = "" + buildAssetsURL("git.85aa2f9a.png");
const github = "" + buildAssetsURL("github.e59bf158.png");
const npm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAilBMVEXNAADMAADLAADrlpb1zs7ywsLzxMTzxcX////+/Pz9+fn+/v7++/v++vr+/f399/ftpKTsnZ3sn5/snp7soKDrmJj43d366urMBgbIAADJAADKAADGAADspaX66+vQCgrOAQHup6fPBgbupqb66Oj9+PjQBgbyw8PzyMjvtLTPAwPmf3/10dHywcHHIRAjAAACFUlEQVR4Ae3S1XXEMABFQbNlL4aZmfpvLw0Etbya+22Q5rzslyRJkiRJkiRJkiRJkiTlLvuP14uEmlWrKKu6SaK6KotsRqw2dCGJutDOjFWHvkuiPtQzYzXpLKuBBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWrHUJFqxBGAyjG43DwLK+ybIm053dvaj2Dw7DOCWscTg6PjmN6+z8IgzTwrq8yrO4rs9uksO6jcXKTu9gwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxas7cOqQ98tt1G4nwFrGh66qPpQz4zVrmJZj/FYN/HLamfGKqu6WW5Pzy+v0Vhnb+8fTVR1Vc6IlWfFKsqzfBXnzfJZtVZSvuwXI15efqtXliRJkiRJkiRJkiRJkj4BpxzoUNnfQHAAAAAASUVORK5CYII=";
const pinia = "" + buildAssetsURL("pinia.7ed2c830.svg");
const webpack = "" + buildAssetsURL("webpack.0f74db73.png");
const _sfc_main$2 = {
  __name: "Technologies",
  __ssrInlineRender: true,
  setup(__props) {
    const technologies = ref([
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500"
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500"
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-400"
      },
      {
        id: 4,
        src: typescript,
        title: "TypeScript",
        style: "shadow-blue-400"
      },
      {
        id: 5,
        src: vue,
        title: "Vue",
        style: "shadow-emerald-500"
      },
      {
        id: 6,
        src: nuxt,
        title: "Nuxt",
        style: "shadow-emerald-700"
      },
      {
        id: 7,
        src: tailwind,
        title: "Tailwind CSS",
        style: "shadow-cyan-700"
      },
      {
        id: 8,
        src: git,
        title: "Git",
        style: "shadow-orange-600"
      },
      {
        id: 9,
        src: github,
        title: "GitHub",
        style: "shadow-white"
      },
      {
        id: 10,
        src: npm,
        title: "NPM",
        style: "shadow-red-600"
      },
      {
        id: 11,
        src: pinia,
        title: "Pinia",
        style: "shadow-yellow-600"
      },
      {
        id: 12,
        src: webpack,
        title: "Webpack",
        style: "shadow-blue-500"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "Technologies",
        class: "relative w-full md:h-screen h-unset"
      }, _attrs))}><div class="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"><div><h2 class="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl"> Technologies </h2><p class="py-6">These are the technologies I&#39;m working with</p></div><div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0"><!--[-->`);
      ssrRenderList(unref(technologies), (tech) => {
        _push(`<div class="${ssrRenderClass([tech.style, "flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg"])}"><img class="w-20 h-[112px] mx-auto py-2 md:py-4"${ssrRenderAttr("src", tech.src)} alt=""><p class="mt-4 md:mt-2">${ssrInterpolate(tech.title)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technologies.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative mt-auto flex flex-col items-center text-gray-300 pb-6 gap-2 md:flex-row md:justify-evenly" }, _attrs))}><div class="flex gap-x-4 md:order-last"><a class="text-4xl hover:text-primary-color hover:animate-bounce" target="_blank" href="https://github.com/mariakhachatryann">`);
      _push(ssrRenderComponent(unref(FaGithub), null, null, _parent));
      _push(`</a><a class="text-4xl hover:text-primary-color hover:animate-bounce" target="_blank" href="https://www.linkedin.com/in/maria-khachatryan1606/">`);
      _push(ssrRenderComponent(unref(FaLinkedin), null, null, _parent));
      _push(`</a><a class="text-4xl hover:text-primary-color hover:animate-bounce" target="_blank" href="https://users-crud-bydt.netlify.app/">`);
      _push(ssrRenderComponent(unref(FaQuestion), null, null, _parent));
      _push(`</a></div><p class="md:order-2">\u2022 Copyright \xA92023 | All rights reserved \u2022 </p><p>@mariakhachatryann</p></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __nuxt_component_0$1;
  const _component_Main = __nuxt_component_1;
  const _component_About = __nuxt_component_2;
  const _component_Technologies = __nuxt_component_3;
  const _component_Footer = __nuxt_component_4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(ssrRenderComponent(_component_Main, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Technologies, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-7445e209.mjs.map
