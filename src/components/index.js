import Vue from "vue";
import dpText from "./dp-form-inputs/dp-text";
import dpLabel from "./dp-form-inputs/dp-label";
import dpFormGroup from "./dp-form-inputs/dp-form-group";
import dpAutoComplete from "./dp-form-inputs/dp-autocomplete";
import dpNavSide from "./nav/dp-nav-side";
import '../styles.scss'

const Components = {
  dpText,
  dpLabel,
  dpFormGroup,
  dpAutoComplete,
  dpNavSide
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
