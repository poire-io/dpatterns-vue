import Vue from "vue";
import DPBanner from "./dp-banner.vue";

const Components = {
  DPBanner
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
