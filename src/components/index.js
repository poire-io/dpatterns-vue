import Vue from "vue";
import DPText from "./dp-form-inputs/dp-text";
import DPLabel from "./dp-form-inputs/dp-label";
import DPFormGroup from "./dp-form-inputs/dp-form-group";
import DPNavSide from "./nav/dp-nav-side";
import '../styles.scss'

const Components = {
  DPText,
  DPLabel,
  DPFormGroup,
  DPNavSide
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
