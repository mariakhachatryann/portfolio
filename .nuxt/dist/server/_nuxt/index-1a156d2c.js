import { ref, onUnmounted, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode, getCurrentScope, onScopeDispose, watch } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { FaCode, FaTimes, FaBars, FaLinkedin, FaGithub, FaQuestion } from "vue3-icons/fa/index.esm.js";
import { HiMail } from "vue3-icons/hi/index.esm.js";
import { BsFillPersonLinesFill } from "vue3-icons/bs/index.esm.js";
import { AiOutlineArrowRight } from "vue3-icons/ai/index.esm.js";
import { _ as __nuxt_component_0$3 } from "./nuxt-link-52e762fb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "devalue";
const _sfc_main$a = {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$a;
const _sfc_main$9 = {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileSocialLinks.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$9;
const _imports_0 = "" + __publicAssetsURL("mariaKh1.jpg");
const _sfc_main$8 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MobileSocialLinks = __nuxt_component_0$1;
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "About",
        class: "relative w-full md:h-screen text-white h-unset"
      }, _attrs))}><div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg"><div class="pb-8"><h2 class="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">About me</h2></div><p class="mb-4 py-6">Hey! I&#39;m based on Bogotá and I&#39;m Professional in Audiovisual Media with more than 7 years of experience as a video editor. However, I felt that I had the potential for more, so my intellectual curiosity led me to enter into the world of programming. </p><p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>`);
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: ["project"],
  emits: ["handleModalInfo"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 max-w-md mx-auto" }, _attrs))}><img${ssrRenderAttr("src", props.project.src)} alt="project card" class="rounded-md cursor-pointer"><div class="flex items-center justify-center"><button class="text-gray-400 hover:text-white w-1/2 px-6 py-2 m-4 cursor-pointer"> Demo </button><button class="text-gray-400 hover:text-white w-1/2 px-6 py-2 m-4 cursor-pointer"> Code </button></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$6;
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = false;
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
    window2.document.documentElement.addEventListener("click", noop);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
const _sfc_main$5 = {
  __name: "ModalInfo",
  __ssrInlineRender: true,
  props: ["SelectedProject"],
  emits: ["handleClickCloseButton"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function handleClickCloseButton() {
      emit("handleClickCloseButton");
    }
    let modal = ref();
    onClickOutside(modal, handleClickCloseButton);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex items-center justify-center bg-opacity-70 bg-black z-40 over" }, _attrs))}><div class="relative bg-white/20 p-2 rounded-lg w-[70%] sm:w-[60%] max-w-[800px] modalCard max-h-[80vh] flex flex-col overflow-y-auto lg:text-lg lg:w-[90%]"><div><img class="w-full rounded-tl-lg rounded-tr-lg md:object-cover"${ssrRenderAttr("src", props.SelectedProject.src)} alt="Resident image"></div><div class="w-full text-white p-8 flex flex-col bg-black/80 border-opacity-70 border-primary-color rounded-bl-lg rounded-br-lg"><h3 class="text-2xl font-semibold self-center pb-1 inline border-b-4 border-primary-color/60 mb-6">${ssrInterpolate(props.SelectedProject.title)}</h3><ul><li><span class="text-primary-color">Description: </span><span>${ssrInterpolate(props.SelectedProject.description)}</span></li><li><span class="text-primary-color">Technologies: </span><span>${ssrInterpolate(props.SelectedProject.technologies)}</span></li><li><span class="text-primary-color">Demo: </span><a target="_blank" class="hover:underline hover:underline-offset-4 hover:text-dark-green transition-all duration-500"${ssrRenderAttr("href", props.SelectedProject.demo)}> Click here to see the project </a></li><li><span class="text-primary-color">Code: </span><a target="_blank" class="hover:underline hover:underline-offset-4 hover:text-dark-green transition-all duration-500"${ssrRenderAttr("href", props.SelectedProject.code)}> Click here to see the repository </a></li></ul></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalInfo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const tourScreen = "" + __buildAssetsURL("tour-screen.363938b7.png");
const quizScreen = "" + __buildAssetsURL("quiz-screen.abc039cc.png");
const weatherScreen = "" + __buildAssetsURL("weather-screen.7d15e592.png");
const editorScreen = "" + __buildAssetsURL("editor-screen.f323422a.png");
const projects = [
  {
    id: 1,
    title: "Quiz Game",
    description: "A quiz game to test your knowledge in various fields",
    technologies: "Javascript, Vue, Vuex, Vue-Router Tailwind CSS",
    src: quizScreen,
    demo: "https://quiz-81t079x8n-mariakhachatryann.vercel.app/#/main",
    code: "https://github.com/mariakhachatryann/quiz"
  },
  {
    id: 2,
    title: "Tour Agency",
    description: "Tour Agency website created with Nuxt 3",
    technologies: "Javascript, Vue, Nuxt, Tailwind CSS",
    src: tourScreen,
    demo: "https://tour-page-lovat.vercel.app/",
    code: "https://github.com/mariakhachatryann/tour-page"
  },
  {
    id: 3,
    title: "Weather Forecast",
    description: "Weather forecasr website created with Vue",
    technologies: "Javascript, Vue, Vuex",
    src: weatherScreen,
    demo: "https://weather-forecast-sigma-ashen.vercel.app/",
    code: "https://github.com/mariakhachatryann/weather-forecast/"
  },
  {
    id: 4,
    title: "Image Editor",
    description: "Image editor to edit size, colors and other",
    technologies: "Pure Javascript",
    src: editorScreen,
    demo: "https://editor-lemon-rho.vercel.app/",
    code: "https://github.com/mariakhachatryann/editor/"
  }
];
const _sfc_main$4 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const modalIsOpen = ref(false);
    const SelectedProject = ref({});
    const handleModalInfo = (project) => {
      modalIsOpen.value = true;
      SelectedProject.value = project;
      console.log(SelectedProject.value);
    };
    const closeModal = () => {
      modalIsOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = __nuxt_component_0;
      const _component_ModalInfo = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "Projects",
        class: "relative w-full text-white md:h-screen h-unset"
      }, _attrs))}><div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"><div class="mb-4"><h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1"> Projects </h2><p class="py-6">Check out some of my work here</p></div><div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: project.id,
          project,
          onHandleModalInfo: handleModalInfo
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(modalIsOpen)) {
        _push(ssrRenderComponent(_component_ModalInfo, {
          SelectedProject: unref(SelectedProject),
          onHandleClickCloseButton: closeModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const html = "" + __buildAssetsURL("html.d20c9482.png");
const css = "" + __buildAssetsURL("css.4040bdba.png");
const javascript = "" + __buildAssetsURL("javascript.d04a05c4.png");
const typescript = "data:image/png;base64,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";
const vue = "" + __buildAssetsURL("vue.7664541d.png");
const nuxt = "" + __buildAssetsURL("nuxt.98702951.svg");
const tailwind = "" + __buildAssetsURL("tailwind.47f3710a.png");
const git = "" + __buildAssetsURL("git.85aa2f9a.png");
const github = "" + __buildAssetsURL("github.e59bf158.png");
const npm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAilBMVEXNAADMAADLAADrlpb1zs7ywsLzxMTzxcX////+/Pz9+fn+/v7++/v++vr+/f399/ftpKTsnZ3sn5/snp7soKDrmJj43d366urMBgbIAADJAADKAADGAADspaX66+vQCgrOAQHup6fPBgbupqb66Oj9+PjQBgbyw8PzyMjvtLTPAwPmf3/10dHywcHHIRAjAAACFUlEQVR4Ae3S1XXEMABFQbNlL4aZmfpvLw0Etbya+22Q5rzslyRJkiRJkiRJkiRJkiTlLvuP14uEmlWrKKu6SaK6KotsRqw2dCGJutDOjFWHvkuiPtQzYzXpLKuBBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWLFiwYMGCBQsWrHUJFqxBGAyjG43DwLK+ybIm053dvaj2Dw7DOCWscTg6PjmN6+z8IgzTwrq8yrO4rs9uksO6jcXKTu9gwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxas7cOqQ98tt1G4nwFrGh66qPpQz4zVrmJZj/FYN/HLamfGKqu6WW5Pzy+v0Vhnb+8fTVR1Vc6IlWfFKsqzfBXnzfJZtVZSvuwXI15efqtXliRJkiRJkiRJkiRJkj4BpxzoUNnfQHAAAAAASUVORK5CYII=";
const pinia = "" + __buildAssetsURL("pinia.7ed2c830.svg");
const webpack = "" + __buildAssetsURL("webpack.0f74db73.png");
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technologies.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    name: "Contact",
    class: "relative w-full md:h-screen p-4 text-white h-unset"
  }, _attrs))}><div class="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"><div class="pb-8"><h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">Contact</h2><p class="py-6">Submit the form below to get in touch with me</p></div><div class="flex justify-center items-center"><form class="flex flex-col w-full md:w-1/2"><input type="text" name="name" placeholder="Enter your name" class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required><input type="email" name="email" placeholder="Enter your email" class="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required><textarea name="message" rows="10" placeholder="Enter your message" class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required></textarea><button class="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Contact me </button></form></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
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
      _push(`</a></div><p class="md:order-2">• Copyright ©2023 | All rights reserved • </p><p>@mariakhachatryann</p></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __nuxt_component_0$2;
  const _component_Main = __nuxt_component_1$1;
  const _component_About = __nuxt_component_2;
  const _component_Projects = __nuxt_component_3;
  const _component_Technologies = __nuxt_component_4;
  const _component_Contact = __nuxt_component_5;
  const _component_Footer = __nuxt_component_6;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(ssrRenderComponent(_component_Main, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(ssrRenderComponent(_component_Technologies, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
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
export {
  index as default
};
//# sourceMappingURL=index-1a156d2c.js.map
