<template>
  <HomePage />
</template>

<script lang="ts">
import Vue from 'vue';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

export default Vue.extend({
  name: 'IndexPage',
})
</script>
