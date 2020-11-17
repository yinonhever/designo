<template>
  <Page title="Locations">
    <LocationWithMap
      v-for="(location, index) in locations"
      :key="location.id"
      v-bind="location"
      :reversed="index % 2 !== 0"
    />
  </Page>
</template>

<script>
import LocationWithMap from "../layout/LocationWithMap";

export default {
  components: { LocationWithMap },
  data() {
    return {
      locations: [
        {
          id: "canada",
          title: "Canada",
          mapLatLong: [43.64818, -79.37575],
          officeName: "Designo Central Office",
          address: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
          phone: "+1 253-863-8967",
          email: "contact@designo.co",
        },
        {
          id: "australia",
          title: "Australia",
          mapLatLong: [-30.32953, 149.78819],
          officeName: "Designo AU Office",
          address: ["19 Balonne Street", "New South Wales 2443"],
          phone: "(02) 6720 9092",
          email: "contact@designo.au",
        },
        {
          id: "uk",
          title: "United Kingdom",
          mapLatLong: [51.93936, -3.88149],
          officeName: "Designo UK Office",
          address: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
          phone: "078 3115 1400",
          email: "contact@designo.uk",
        },
      ],
    };
  },
};
</script>
