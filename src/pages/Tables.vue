<template>
  <div class="row">
    <div class="col-12">
      <h1>Tables.</h1>
      <p>This is where you can come to see all tables. Tables are used to show tabular data. You can use tables to build robust pages.</p>
      <b-card title="Basic Table" title-tag="h2">
        <div class="row">
          <div class="col-12">
            <b-table striped hover :items="items"></b-table>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>  
  export default {
    data(){
      return{
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>
