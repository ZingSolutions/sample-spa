<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CarPreview :carData="carData"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CarPreview from "@/components/CarPreview.vue";

@Component({
  components: {
    CarPreview
  }
})
export default class Home extends Vue {
  protected carData = {
    make: "Ford",
    model: "Fiesta",
    year: "2018",
    image: "https://via.placeholder.com/150"
  };
}
</script>
