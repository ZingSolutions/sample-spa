<template>
  <b-container fluid>
    <b-row>
      <b-col sm="4" offset="4">
        <h1>This is a test page</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4" offset="4">
        <b-card class="mb-2">
          <custom-input v-model="registration"/>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span>{{ registration }}</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomInput from "@/components/CustomInput.vue";

@Component({
  components: {
    "custom-input": CustomInput
  }
})
export default class Test extends Vue {
  protected registration: {
    email: string;
    name: string;
    checked: string[];
  } = {
    email: "",
    name: "",
    checked: []
  };
}
</script>

