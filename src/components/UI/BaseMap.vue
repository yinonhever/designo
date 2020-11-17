<template>
  <div class="location__map" :id="`map-${location}`" />
</template>

<script>
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

export default {
  props: {
    location: {
      type: String,
      required: true,
    },
    center: {
      type: Array,
      required: true,
    },
  },
  methods: {
    createMap() {
      const mapBox = L.map(`map-${this.location}`).setView(this.center, 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoieWlub25oZXZlciIsImEiOiJja2hsZnJhamkwMDRxMzNsOXk5YXZkanppIn0.ivjflWU_Tcq-CMCYUJYszw",
        }
      ).addTo(mapBox);
      L.marker(this.center).addTo(mapBox);
    },
  },
  mounted() {
    this.createMap();
  },
};
</script>
