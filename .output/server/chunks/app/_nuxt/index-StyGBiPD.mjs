import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode, onUnmounted, watch, getCurrentScope, onScopeDispose } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { d as defineStore, _ as _export_sfc, A as AiOutlineArrowRight, b as __nuxt_component_0$2$1, a as __nuxt_component_0$3, c as __nuxt_component_1$3, F as FaLinkedin, e as FaGithub, H as HiMail, B as BsFillPersonLinesFill } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$a = {
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
        _push(`<li class="flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md"><a${ssrRenderAttr("href", link.href)} class="flex gap-3 items-center w-full text-white text-sm"${ssrRenderAttr("download", link.download)} target="_blank" rel="noreferrer">`);
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileSocialLinks.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$a;
const _imports_0 = "" + publicAssetsURL("mariaKh1.jpg");
const _sfc_main$9 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MobileSocialLinks = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "Home",
        class: "relative md:h-screen h-unset"
      }, _attrs))}><div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8"><div class="flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start"><h1 class="text-4xl md:text-[50px] font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4 mini:text-[24px]">I&#39;m Maria Khachatryan</h1><h2 class="rounded-md mx-none bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white">Front End Developer</h2><p class="text-gray-300 py-4 max-x-md text-justify"> specialized with Vue.js / Nuxt, I am focused on creating visually appealing and user-friendly websites. I love creating websites that not only catch the eye but also make navigating a breeze. Welcome to my portfolio, I&#39;m excited to share my work with you and dive into the world of user-friendly web applications! </p><div class="hidden desktop:flex"><div class="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0"> About me <span class="group-hover:rotate-90 duration-300">`);
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$9;
const _sfc_main$8 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "About",
        class: "relative w-full text-white"
      }, _attrs))}><div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg"><div class="pb-8"><h2 class="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">About me</h2></div><p class="mb-4 py-6"> \u{1F44B} Hi there! I&#39;m a motivated and hardworking front-end developer with a focus on Vue.js and Nuxt.js. I quickly perceive new information, have a desire to learn, ability to solve problems and creative thinking\u2024 I am confident that I can quickly adapt to new technologies, trends and team. I enjoy turning cool ideas into awesome digital stuff using neat code. <br><br> \u{1F680} Proficient in HTML, CSS, JavaScript, and Vue.js/Nuxt.js, I&#39;m adept at translating design concepts into functional interfaces. I believe in writing clean, maintainable code that prioritizes readability and scalability. <br><br> \u{1F4A1} I thrive on learning and adapting, constantly seeking new challenges to expand my skill set. Whether it&#39;s mastering responsive design principles or diving into the latest frameworks, I&#39;m always eager to grow and evolve in this dynamic field. <br><br> \u{1F31F} I&#39;m deeply committed to my work, ensuring every task is approached with responsibility and dedication. My ability to quickly grasp new concepts allows me to adapt and learn on the go, consistently enhancing my skills to deliver high-quality results. </p><p> \u{1F4EB} Let&#39;s connect and create something amazing ! Feel free to reach out\u2014I&#39;m excited to collaborate and contribute to innovative web experiences. </p><br><br>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end mr-4"${_scopeId}><div class="hover:underline hover:underline-offset-4 hover:text-primary-color/60 cursor-pointer text-gray-300 flex items-center"${_scopeId}> See more about me `);
            _push2(ssrRenderComponent(unref(AiOutlineArrowRight), { class: "ml-2" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end mr-4" }, [
                createVNode("div", { class: "hover:underline hover:underline-offset-4 hover:text-primary-color/60 cursor-pointer text-gray-300 flex items-center" }, [
                  createTextVNode(" See more about me "),
                  createVNode(unref(AiOutlineArrowRight), { class: "ml-2" })
                ])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$2 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: ["project"],
  emits: ["handleModalInfo"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleModalInfo = (project) => {
      emit("handleModalInfo", project);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 max-w-md mx-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        onClick: ($event) => handleModalInfo(props.project),
        src: props.project.src,
        alt: "project card",
        class: "rounded-md cursor-pointer"
      }, null, _parent));
      _push(`<div class="flex items-center justify-center"><button class="text-gray-400 hover:text-white w-1/2 px-6 py-2 m-4 cursor-pointer">Demo</button><button class="text-gray-400 hover:text-white w-1/2 px-6 py-2 m-4 cursor-pointer">Code</button></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$7;
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
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
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
        ...events2.flatMap((event) => {
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
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
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
const _sfc_main$6 = {
  __name: "ModalInfo",
  __ssrInlineRender: true,
  props: ["SelectedProject"],
  emits: ["handleClickCloseButton"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleClickCloseButton = () => {
      emit("handleClickCloseButton");
    };
    let modal = ref();
    onClickOutside(modal, handleClickCloseButton);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex items-center justify-center bg-opacity-70 bg-black z-40 over" }, _attrs))}><div class="relative bg-white/20 p-2 rounded-lg w-[70%] sm:w-[60%] max-w-[800px] modalCard max-h-[80vh] flex flex-col overflow-y-auto lg:text-lg lg:w-[90%]"><div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-full rounded-tl-lg rounded-tr-lg md:object-cover",
        src: props.SelectedProject.src,
        alt: "Resident image"
      }, null, _parent));
      _push(`</div><div class="w-full text-white p-8 flex flex-col bg-black/80 border-opacity-70 border-primary-color rounded-bl-lg rounded-br-lg"><h3 class="text-2xl font-semibold self-center pb-1 inline border-b-4 border-primary-color/60 mb-6">${ssrInterpolate(props.SelectedProject.title)}</h3><ul><li><span class="text-primary-color">Description: </span><span>${ssrInterpolate(props.SelectedProject.description)}</span></li><li><span class="text-primary-color">Technologies: </span><span>${ssrInterpolate(props.SelectedProject.technologies)}</span></li><li><span class="text-primary-color">Demo: </span><a target="_blank" class="hover:underline hover:underline-offset-4 hover:text-dark-green transition-all duration-500"${ssrRenderAttr("href", props.SelectedProject.demo)}> Click here to see the project </a></li><li><span class="text-primary-color">Code: </span><a target="_blank" class="hover:underline hover:underline-offset-4 hover:text-dark-green transition-all duration-500"${ssrRenderAttr("href", props.SelectedProject.code)}> Click here to see the repository </a></li></ul></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalInfo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$6;
const usePortfolioStore = defineStore("portfolio", () => {
  const projects = ref([
    {
      id: 1,
      title: "Quiz Game",
      description: "A quiz game to test your knowledge in various fields",
      technologies: "Javascript, Vue, Vuex, Vue-Router Tailwind CSS",
      src: "/projects/quiz-screen.png",
      demo: "https://quiz-81t079x8n-mariakhachatryann.vercel.app/#/main",
      code: "https://github.com/mariakhachatryann/quiz"
    },
    {
      id: 2,
      title: "Tour Agency",
      description: "Tour Agency website created with Nuxt 3",
      technologies: "Javascript, Vue, Nuxt, Tailwind CSS",
      src: "/projects/tour-screen.png",
      demo: "https://tour-page-lovat.vercel.app/",
      code: "https://github.com/mariakhachatryann/tour-page"
    },
    {
      id: 3,
      title: "Weather Forecast",
      description: "Weather forecasr website created with Vue",
      technologies: "Javascript, Vue, Vuex",
      src: "/projects/weather-screen.png",
      demo: "https://weather-forecast-sigma-ashen.vercel.app/",
      code: "https://github.com/mariakhachatryann/weather-forecast/"
    },
    {
      id: 4,
      title: "Image Editor",
      description: "Image editor to edit size, colors and other",
      technologies: "Pure Javascript",
      src: "/projects/editor-screen.png",
      demo: "https://editor-lemon-rho.vercel.app/",
      code: "https://github.com/mariakhachatryann/editor/"
    }
  ]);
  const technologies = ref([
    {
      id: 1,
      src: "logo/html.png",
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: "logo/css.png",
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: "logo/javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-400"
    },
    {
      id: 4,
      src: "logo/ts.png",
      title: "TypeScript",
      style: "shadow-blue-400"
    },
    {
      id: 5,
      src: "logo/vue.png",
      title: "Vue",
      style: "shadow-emerald-500"
    },
    {
      id: 6,
      src: "logo/nuxt.svg",
      title: "Nuxt",
      style: "shadow-emerald-700"
    },
    {
      id: 7,
      src: "logo/tailwind.png",
      title: "Tailwind CSS",
      style: "shadow-cyan-700"
    },
    {
      id: 8,
      src: "logo/git.png",
      title: "Git",
      style: "shadow-orange-600"
    },
    {
      id: 9,
      src: "logo/github.png",
      title: "GitHub",
      style: "shadow-white"
    },
    {
      id: 10,
      src: "logo/npm.png",
      title: "NPM",
      style: "shadow-red-600"
    },
    {
      id: 11,
      src: "logo/pinia.svg",
      title: "Pinia",
      style: "shadow-yellow-600"
    },
    {
      id: 12,
      src: "logo/vite.png",
      title: "Vite",
      style: "shadow-purple-500"
    },
    {
      id: 13,
      src: "logo/json-logo.png",
      title: "JSON",
      style: "shadow-white"
    },
    {
      id: 14,
      src: "logo/sass.svg",
      title: "Sass",
      style: "shadow-pink-500"
    },
    {
      id: 15,
      src: "logo/vue.png",
      title: "VUEX",
      style: "shadow-emerald-500"
    },
    {
      id: 16,
      src: "logo/webpack.png",
      title: "Webpack",
      style: "shadow-blue-500"
    },
    {
      id: 17,
      src: "logo/gulp.jpg",
      title: "Gulp",
      style: "shadow-red-500"
    },
    {
      id: 18,
      src: "logo/axios.svg",
      title: "Axios",
      style: "shadow-blue-800"
    }
  ]);
  const certificates = ref([
    { id: 1, img: "certificates/html-cert.png" },
    { id: 2, img: "certificates/js-cert-sam.png" },
    { id: 3, img: "certificates/css-cert.png" },
    { id: 4, img: "certificates/git-cert.jpg", otherSize: true },
    { id: 5, img: "certificates/js-cert.png" },
    { id: 6, img: "certificates/responsive-cert.png" },
    { id: 7, img: "certificates/jsInter-cert.png" },
    { id: 8, img: "certificates/web-dev-cert.png" }
  ]);
  return { projects, technologies, certificates };
});
const _sfc_main$5 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { projects } = usePortfolioStore();
    const modalIsOpen = ref(false);
    const SelectedProject = ref({});
    const handleModalInfo = (project) => {
      modalIsOpen.value = true;
      SelectedProject.value = project;
    };
    const closeModal = () => {
      modalIsOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = __nuxt_component_0;
      const _component_ModalInfo = __nuxt_component_1$1;
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Technologies",
  __ssrInlineRender: true,
  setup(__props) {
    const { technologies } = usePortfolioStore();
    let sliceNum = ref(12);
    let isShowed = ref(false);
    let isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$3;
      const _component_Loader = __nuxt_component_1$3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "Technologies",
        class: "relative w-full"
      }, _attrs))}><div class="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"><div><h2 class="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl"> Technologies </h2><p class="py-6">These are the technologies I&#39;m working with</p></div><div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0"><!--[-->`);
      ssrRenderList(unref(technologies).slice(0, unref(sliceNum)), (tech) => {
        _push(`<div class="${ssrRenderClass([tech.style, "flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg"])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "w-20 h-[112px] mx-auto py-2 md:py-4",
          src: tech.src,
          alt: ""
        }, null, _parent));
        _push(`<p class="mt-4 md:mt-2">${ssrInterpolate(tech.title)}</p></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(isLoading)) {
        _push(`<div class="w-full my-5 flex justify-center items-center">`);
        _push(ssrRenderComponent(_component_Loader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isLoading)) {
        _push(`<button class="text-black font-semibold w-fit px-6 py-2 mx-auto rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer hover:scale-110 duration-300">${ssrInterpolate(unref(isShowed) ? "Show less" : "Show more")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technologies.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "CertificateModal",
  __ssrInlineRender: true,
  props: ["selectedImage"],
  emits: ["handleCloseButton"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleCloseButton = () => {
      emit("handleCloseButton");
    };
    let modal = ref(null);
    onClickOutside(modal, handleCloseButton);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["fixed inset-0 flex items-center justify-center z-50 bg-black/60 duration-300", props.selectedImage.img ? "opacity-100" : "opacity-0 pointer-events-none"]
      }, _attrs))}><div class="bg-white/20 p-2 rounded-lg max-w-[800px] relative shadow-md shadow-gray-600 miniModal">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: ["rounded-md w-full object-contain miniModal", props.selectedImage.otherSize ? "h-[700px]" : "h-full"],
        src: props.selectedImage.img,
        alt: "Selected Certificate"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CertificateModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Certificates",
  __ssrInlineRender: true,
  setup(__props) {
    const { certificates } = usePortfolioStore();
    const destroySplide = () => {
    };
    let selectedImage = ref(null);
    let modalIsOpen = ref(false);
    const closeModal = () => {
      modalIsOpen.value = false;
    };
    onUnmounted(destroySplide);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$3;
      const _component_CertificateModal = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "Education",
        class: "relative w-full my-10 text-white overflow-hidden"
      }, _attrs))}><div class="max-w-screen-lg p-4 md:mx-auto mx-4 flex flex-col justify-center w-full h-full"><div class="mb-2"><h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">Education</h2><p class="py-6">Check out some of my certificates</p></div><section class="splide w-full h-[300px] text-black" aria-label="Basic Structure Example"><div class="splide__track"><ul class="splide__list cursor-zoom-in"><!--[-->`);
      ssrRenderList(unref(certificates), (cert) => {
        _push(`<li class="splide__slide">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "w-full h-[300px] rounded-md",
          src: cert.img
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section></div>`);
      if (unref(modalIsOpen)) {
        _push(ssrRenderComponent(_component_CertificateModal, {
          selectedImage: unref(selectedImage),
          onHandleCloseButton: closeModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Certificates.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        name: "Contact",
        class: "relative w-full p-4 text-white"
      }, _attrs))}><div class="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"><div class="pb-8"><h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">Contact</h2><p class="py-6">Submit the form below to get in touch with me</p></div><div class="flex justify-center items-center"><form class="flex flex-col w-full md:w-1/2"><input type="text" name="name" placeholder="Enter your name" class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required><input type="email" name="email" placeholder="Enter your email" class="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required><textarea name="message" rows="10" placeholder="Enter your message" class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required></textarea><button class="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Contact me</button></form></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Main = __nuxt_component_0$1;
  const _component_About = __nuxt_component_1$2;
  const _component_Projects = __nuxt_component_2;
  const _component_Technologies = __nuxt_component_3;
  const _component_Certificates = __nuxt_component_4;
  const _component_Contact = __nuxt_component_5;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Main, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(ssrRenderComponent(_component_Technologies, null, null, _parent));
  _push(ssrRenderComponent(_component_Certificates, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
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
//# sourceMappingURL=index-StyGBiPD.mjs.map
