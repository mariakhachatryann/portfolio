import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    name: "About",
    class: "relative w-full h-full mb-10"
  }, _attrs))}><div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8"><div class="flex flex-col justify-center items-center mt-24 h-[85%] md:h-full"><h1 class="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">About me and my journey</h1><div class="flex items-center bg-primary-color/20 rounded-md py-2 px-4">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "h-[30px] w-[30px] mr-2 rounded-full",
    src: "/logo/arm.png",
    alt: ""
  }, null, _parent));
  _push(`<h2 class="text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white">Armenian - 18 years old</h2></div><p class="text-md md:text-lg text-gray-300 py-4 max-x-md text-justify"> My journey with HTML and CSS started unexpectedly with curiosity and a desire to blend creativity with technology.I stumbled upon tutorials on YouTube and was instantly drawn in. What began as a curious click soon became a deep dive into the world of web development. I was so hooked that I quickly grasped the ins and outs of HTML and CSS, and my hunger for knowledge urged me to explore JavaScript. While navigating the realm of JavaScript, I stumbled upon an advanced course by one of my favorite programmers (Samvel [Sami] Hayrapetyan) - the same person whose tutorials had kickstarted my coding journey. Without a second thought, I joined his course. His teaching had been invaluable in my knowledge learning, and this new opportunity was too good to pass up.After mastering the basics of JavaScript, I dived into its cooler features and intricate concepts. The advanced course I completed was packed with valuable theory and practical exercises, which deepened my understanding.From theory to practice, I embraced every challenge, eagerly absorbing the complexities. It was a journey that expanded my skills and fueled my passion for using JavaScript creatively. After finishing the course, I discovered Vue.js.Its elegance and functionality immediately captivated me, prompting me to immerse myself in tutorials, documentation, and various resources about Vue. The more I delved into Vue.js, the more I appreciated its simplicity and power in building dynamic and responsive user interfaces. After delving sufficiently into Vue, my curiosity led me to explore Nuxt.js.The transition from Vue to Nuxt felt like discovering a shortcut to efficient and scalable web development. It empowered me to build robust applications while maintaining the flexibility and simplicity that initially drew me to Vue. </p><p class="text-md md:text-lg text-gray-300 max-x-md text-justify">Check out <a href="https://github.com/mariakhachatryann" class="underline underline-offset-4">my github</a> profile to see my projects </p></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-uwjqeTmr.mjs.map
