<template>
  <div>
    <span>{{ carData.make }} - {{ carData.model }} - {{ carData.year }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class CarPreview extends Vue {
  @Prop({ default: {} }) public carData!: {
    make: string;
    model: string;
    year: string;
  };
}
</script>
