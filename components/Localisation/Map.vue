<template>
  <div class="map-container">
    <div class="map-render">
        <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer
            :url="url"
            :attribution="attribution"
          />
            <div v-if="storedData">
              <l-marker
              v-for="(marker, index) in storedData"
              :key="index"
              :lat-lng="getMarkerCoords(marker)"
              @click="onClick(marker)"
            >
              <l-popup>{{ marker.properties.label }}</l-popup>
            </l-marker>
          </div>
        </l-map>
      </div>
  </div>
</template>
  
<script>
  import { latLng } from "leaflet";
  import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
  
  export default {
    name: "Map",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
    },
    props: ['storedData'],
    data() {
      return {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 5.5,
        center: latLng(46.227638, 2.213749),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        showParagraph: false,
        mapOptions: {
          zoomSnap: 0.5
        },
        currentZoom: 5.5,
        currentCenter: latLng(46.227638, 2.213749),
      };
    },
    methods: {
      zoomUpdate(zoom) {
        this.currentZoom = zoom;
      },
      centerUpdate(center) {
        this.currentCenter = center;
      },
      getMarkerCoords(marker) {
        return latLng(marker.geometry.coordinates[1], marker.geometry.coordinates[0]);
      },
      onClick(data){
        this.$router.push({ path: '/', query: {search: data.properties.label, lat: data.geometry.coordinates[0], lon:data.geometry.coordinates[1] }})
    }
    }
  };
</script>
  
<style>
  .map-container {
    overflow: hidden;
  }

  .map-render {
    height: 500px;
    width: 600px;
  }
</style>
  