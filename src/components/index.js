import Vue from "vue";
import DPBanner from "./dp-banner";
import DPText from "./dp-form-inputs/dp-text";
import DPLabel from "./dp-form-inputs/dp-label";
import DPFormGroup from "./dp-form-inputs/dp-form-group";
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
