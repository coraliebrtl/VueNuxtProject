<template>
  <div>
    <GmapMap :center="center" :zoom="zoom">
      <GmapMarker :position="center" />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 }, // Example center coordinates
      zoom: 12, 
    };
  },
};
</script>

<style>

</style>