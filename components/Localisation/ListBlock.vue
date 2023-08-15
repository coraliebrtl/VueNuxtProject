<template>
  <div class="list-container">
    <p class="list-title">Address list :</p>
    <div v-if="storedData && storedData.length > 0">
      <ul class="list-elements">
        <li v-for="data in storedData" :key="data.id">
          <button @click="onClick(data)" class="list-element-block">
            <p class="list-element-title">{{ data.properties.name }}</p>
            <p class="list-element-description">{{ data.properties.citycode + ' ' + data.properties.city }}</p>
          </button>
          </li>
      </ul>
    </div>
    <div v-else class="list-elements">
      <p class="list-element-block">No data available.</p></div>
  </div>
</template>

<script>
  export default {
      name: "ListBlock",
      props: ['storedData'],
      methods: {
        onClick(data){
          this.$router.push({ path: '/', query: {search: data.properties.label, lat: data.geometry.coordinates[0], lon:data.geometry.coordinates[1] }})
        } 
      }
  }
</script>

<style>
  .list-title {
    font-size: 1.2em;
    text-align: center;
  }

  .list-element-block {
      background-color: #f6f8f6;
      border: none;
      border-radius: 0.3em;
      flex-grow: 1;
      margin: 0.2em;
      padding: 1em;
      text-align: left;
  }

  .list-element-title {
      color: black;
      font-weight: bold;
      margin: 0;
  }

  .list-element-description {
      margin: 0.5em 0;
  }

  .list-elements {
      list-style-type: none;
      padding: 0;
  }

  .list-elements li {
    display: flex;
    flex-grow: 1;
  }

  .list-container {
    background-color: #b8e0b8;
    border-radius: 0.3em;
    flex-grow: 1;
    margin-bottom: 1em;
    margin-right: 0;
    padding: 0.1em 0.5em;
    
    @media (min-width: 600px) { 
      flex-grow: 0;
      margin-bottom: 0;
      margin-right: 1em;
      width: 30%;
      };
  }
</style>