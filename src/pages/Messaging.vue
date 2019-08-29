<template>
  <div class="row">
    <div class="col-12">
      <h1>Messages.</h1>
      <p>This is where you can come to see all messaging types. Messages are used to show information about errors, successes, and other information that a user should see.</p>
      <b-card title="Page-Level Messages" title-tag="h2">
        <div class="row">
          <div class="col-12">
            <b-alert variant="success" show>
              <h4>Success</h4>
              <ul>
                <li>This is a success message.</li>
              </ul>
            </b-alert>
          </div>
          <div class="col-12">
            <b-alert variant="warning" show>
              <h4>Warning</h4>
              <ul>
                <li>This is a warning message.</li>
              </ul>
            </b-alert>
          </div>
          <div class="col-12">
            <b-alert variant="info" show>
              <h4>Info</h4>
              <ul>
                <li>This is an info message.</li>
              </ul>
            </b-alert>
          </div>
          <div class="col-12">
            <b-alert variant="danger" show>
              <h4>Error</h4>
              <ul>
                <li>This is an error message.</li>
              </ul>
            </b-alert>
          </div>
        </div>
      </b-card>
    </div>
    <div class="col-12">
      <b-card title="Field-Level Messages" title-tag="h2">
        <div class="row">
          <div class="col-4">
            <dpFormGroup id="lblExample3" label="Field With Error" label-for="txtExample3" invalid-feedback="Validation error">
              <b-form-input id="txtExample3" :value="invalidValue" v-model="invalidValue" placeholder="Invalid Text Group." :state="false"></b-form-input>
              {{invalidValue}}
            </dpFormGroup>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
