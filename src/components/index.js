import Vue from "vue";
import DPBanner from "./dp-banner.vue";
import DPText from "./dp-text.vue";

const Components = {
  DPBanner,
  DPText
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
