<template>
  <div>
    <div v-if="carData">
      <span>{{ carData.make }} - {{ carData.model }} - {{ carData.year }}</span>
      <img
        v-if="carData.image && carData.image != ''"
        :src="carData.image"
        alt="Image of the vehicle"
      >
      <span v-else>No image found</span>
    </div>
    <div v-else>No vehicle found</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class CarPreview extends Vue {
  @Prop({ default: undefined }) public carData!: {
    make: string;
    model: string;
    year: string;
    image: string; // url to an image
  };
}
</script>
