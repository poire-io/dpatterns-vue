import Vue from "vue";
import DPBanner from "./dp-banner.vue";
import DPText from "./dp-form-inputs/dp-text.vue";
import DPLabel from "./dp-form-inputs/dp-label.vue";
import DPFormGroup from "./dp-form-inputs/dp-form-group.vue";
const Components = {
  DPBanner,
  DPText,
  DPLabel,
  DPFormGroup
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
