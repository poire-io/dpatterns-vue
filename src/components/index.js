import Vue from "vue";
import dpText from "./dp-form-inputs/dp-text";
import dpLabel from "./dp-form-inputs/dp-label";
import dpFormGroup from "./dp-form-inputs/dp-form-group";
import dpInputGroup from "./dp-form-inputs/dp-input-group";
import dpRadioGroup from "./dp-form-inputs/dp-radio-group";
import dpCheckboxGroup from "./dp-form-inputs/dp-checkbox-group";
import dpAutoComplete from "./dp-form-inputs/dp-autocomplete";
import dpDateRangePicker from "./dp-form-inputs/dp-date-range-picker";
import dpNavSide from "./nav/dp-nav-side";
import dpBtnGroup from "./dp-actions/dp-btn-group";
import dpButton from "./dp-actions/dp-button";
import '../styles.scss'

const Components = {
  dpText,
  dpLabel,
  dpFormGroup,
  dpInputGroup,
  dpRadioGroup,
  dpCheckboxGroup,
  dpAutoComplete,
  dpNavSide,
  dpDateRangePicker,
  dpBtnGroup,
  dpButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
