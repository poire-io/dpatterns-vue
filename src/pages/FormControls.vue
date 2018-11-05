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
                  <dpLabel label="Single Controls" id="textInput"/>
                  <dpText type="text" id="textInput" label="Text type" name="Text type" :max=4 placeholder="Input Text Field." :value="value"  v-model="value" />
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblExample2" description="Help text here." label="Text Field With Group" label-for="txtExample2">
                    <b-form-input id="txtExample2"></b-form-input>
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblExample3" label="Field With Error" label-for="txtExample3" invalid-feedback="Validation error">
                    <b-form-input id="txtExample3" :value="invalidValue" v-model="invalidValue" icon="Search" placeholder="Invalid Text Group." :state="false"></b-form-input>
                  </dpFormGroup>
                </div>
              </div>
              <hr>
              <h3>Radios and Checkboxes</h3>
              <div class="form-row">
                <div class="col-4">
                  <dpFormGroup id="lblExample4" label="Radios In Field Group">
                    <b-form-radio-group class="pt-2" :options="['Radio 1', 'Radio 2', 'Radio 3']" />
                  </dpFormGroup>
                </div>
                <div class="col-4">
                  <dpFormGroup id="lblExample4" label="Checkboxes In Field Group">
                    <b-form-checkbox-group class="pt-2" :options="['Check 1', 'Check 2', 'Check 3']" />
                  </dpFormGroup>
                </div>
              </div>
              <hr>
              <h3>Dropdowns</h3>
              <div class="form-row">
                <div class="col-4">
                  <dpFormGroup id="lblExample4" label="Dropdown">
                    <b-form-select :options="options" class="mb-3" />
                  </dpFormGroup>
                </div>
              </div>
              <!-- <div class="form-row">
                <div class="col-4">
                  <dpLabel label="Sample Autocomplete" id="txtAutoComplete" />
                  <dpAutoComplete :items=states placeholder="Testing" />
                </div>
              </div> -->
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
