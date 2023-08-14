<template>
    <div>
      <ul class="listElements">
        <li v-for="city in cities" :key="city.id" class="listElementBlock">
            <p class="listElementTitle">{{ city.name }}</p>
            <p>{{ city.description }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ListBlock",
    computed: {
    ...mapGetters(['getCities']),
    cities() {
      return this.getCities;
    },
  },
}
</script>

<style>
.listElementBlock {
    background-color: lightgreen;
    border-radius: 0.3em;
    padding: 0.1em 0.5em;
    margin: 0.2em;
}

.listElementTitle {
    color: red
}

.listElements {
    list-style-type: none;
    padding: 0;
}
</style>