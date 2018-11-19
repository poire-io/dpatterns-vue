<template>
  <div class="row">
    <div class="col-12">
      <h1>Forms.</h1>
      <p>This is where you can come to see all Form Controls. Form controls are used to build web forms. You can use these controls and build robust pages.</p>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Input Controls</h2>
              <h3>Text Fields</h3>
              <div class="form-row">
                <div class="col-4">
                  <dpLabel label="Single Controls" id="lblTextInput" for="textInput"/>
                  <dpText type="text" id="textInput" label="Text type" name="Text type" placeholder="Input Text Field." :value="value"  v-model="value" />
                  {{value}}
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblExample2" description="Help text here." label="Text Field With Group" label-for="txtExample2">
                    <dpText id="txtExample2" type="text"></dpText>
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblMoney" label="Money Field" label-for="txtMoney">
                    <dpInputGroup prepend="$" append=".00">
                      <dpText id="txtMoney" type="number"></dpText>
                    </dpInputGroup>
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblDate" label="Date Field" label-for="txtDate">
                    <dpInputGroup append="<a href='Javascript:;'><i class='fa fa-calendar' /></a>">
                      <dpText id="txtDate" type="number"></dpText>
                    </dpInputGroup>
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblEmail" label="Email Field" label-for="txtEmail">
                    <dpInputGroup prepend="<i class='fa fa-at' />">
                      <dpText id="txtEmail" type="email"></dpText>
                    </dpInputGroup>
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblNumber" label="Number Field" label-for="txtNumber">
                    <dpText id="txtNumber" type="number"></dpText>
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblPassword" label="Password Field" label-for="txtPassword">
                    <dpText id="txtPassword" type="password"></dpText>
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblExample3" label="Field With Error" label-for="txtExample3" invalid-feedback="Validation error">
                    <b-form-input id="txtExample3" :value="invalidValue" v-model="invalidValue" placeholder="Invalid Text Group." :state="false"></b-form-input>
                    {{invalidValue}}
                  </dpFormGroup>
                </div>
              </div>
              <hr>
              <h3>Radios and Checkboxes</h3>
              <div class="form-row">
                <div class="col-4">
                  <dpFormGroup id="lblRadiosInFieldGroup" label="Radios In Field Group">
                    <dpRadioGroup class="pt-2" :options="['Radio 1', 'Radio 2', 'Radio 3']" />
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblCheckboxesInFieldGroup" label="Checkboxes In Field Group">
                    <dpCheckboxGroup class="pt-2" :options="['Check 1', 'Check 2', 'Check 3']" />
                  </dpFormGroup>
                </div>
              </div>
              <hr>
              <h3>Dropdowns</h3>
              <div class="form-row">
                <div class="col-4">
                  <dpFormGroup id="lblDropdown" label="Dropdown">
                    <b-form-select :options="options" class="mb-3" />
                  </dpFormGroup>
                </div>
              </div>
              <div class="form-row">
                <div class="col-4">
                  <dpFormGroup id="lblAutoComplete" label="Sample Autocomplete" label-for="txtAutoComplete">
                    <dpAutoComplete :items=states id="txtAutoComplete" />
                  </dpFormGroup>
                  {{states}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Actions</h2>
              <h3>Button Types</h3>
              <div class="row">
                <div class="col-12">
                  <dpButton variant="primary">Primary Button</dpButton>
                  <dpButton variant="danger">Danger Button</dpButton>
                  <dpButton variant="warning">Warning Button</dpButton>
                  <dpButton variant="success">Success Button</dpButton>
                  <dpButton variant="outline-success">Success Outline Button</dpButton>
                  <dpButton variant="outline-primary">Primary Outline Button</dpButton>
                </div>
              </div>
              <hr>
              <h3>Buttons Inside Button Bar</h3>
              <div class="row">
                <div class="col-12">
                  <dpBtnGroup class="action-bar">
                    <dpButton variant="primary">Primary Button</dpButton>
                    <dpButton variant="warning">Warning Button</dpButton>
                    <dpButton variant="danger">Danger Button</dpButton>
                  </dpBtnGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>  
  import axios from 'axios';

  export default {
    mounted() {
      axios
        .get('states.json')
        .then((response) => {
            this.states = response.data;
            // console.log(this.states);
        })
        .catch((err) => {
            this.error = err.data;
        });
    },
    data(){
      return{
        value: null,
        validValue: null,
        invalidValue: null,
        states: this.states,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: {'C': '3PO'}, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }
</script>
