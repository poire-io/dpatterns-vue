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
              <div class="form-row">
                <div class="col-4">
                  <dpLabel label="Label Sample" id="textInput"/>
                  <dpText type="text" id="textInput" label="Text type" name="Text type" :max=4 placeholder="Input Text Field." :value="value"  v-model="value" icon="Search" />
                </div>
                <div class="col-4">
                  <dpFormGroup type="text" id="txtType" label="Text type" name="Text type" :max=5 placeholder="Valid Text Group." :value="validValue"  v-model="validValue" icon="Search" helpTxt="Help Text display" :state="true"/>
                </div>
                <div class="col-4">
                  <dpFormGroup type="text" id="txtType2"  label="Text type" name="Text type" :max=6 placeholder="Invalid Text Group." :value="invalidValue"  v-model="invalidValue" icon="Search" errorMsg="Validation error" helpTxt="Help Text display" :state="false"/>
                </div>
              </div>
              <div class="form-row">
                <div class="col-4">
                  <dpLabel label="Sample Autocomplete" id="txtAutoComplete" />
                  <dpAutoComplete :items=states placeholder="Testing" />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-4">
                  <dpBtnGroup>
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
        states: this.states
      }
    }
  }
</script>
