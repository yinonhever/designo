<template>
  <div id="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import L from "leaflet";

export default {
  name: "Map",
  data() {
    return {
      center: [43.64818, -79.37575],
    };
  },
  methods: {
    setupLeafletMap: function() {
      const mapDiv = L.map("mapContainer").setView(this.center, 15);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoieWlub25oZXZlciIsImEiOiJja2hsZnJhamkwMDRxMzNsOXk5YXZkanppIn0.ivjflWU_Tcq-CMCYUJYszw",
        }
      ).addTo(mapDiv);
      var marker = L.marker([43.64818, -79.37575]).addTo(mapDiv);
      console.log(marker);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  width: 80vw;
  height: 100vh;
}
</style>
