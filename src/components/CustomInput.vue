<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit" @reset="onReset" :disabled="isDisabled">
      <b-form-group>
        <b-form-input
          v-model="internalRegistration.email"
          type="email"
          name="email"
          required
          placeholder="Email address"
          aria-label="Email address"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="internalRegistration.name"
          type="text"
          name="name"
          required
          placeholder="Name"
          aria-label="Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Would you like to recieve news and updates from us?">
        <b-form-checkbox-group v-model="internalRegistration.checked">
          <b-form-checkbox
            value="allow-marketing"
            aria-label="Tell me about what's comming up"
          >Tell me about what's comming up</b-form-checkbox>
          <b-form-checkbox
            value="allow-events"
            aria-label="Tell me about your events"
          >Tell me about your events</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary" aria-label="Submit">Submit</b-button>
      <b-button type="reset" variant="danger" aria-label="Reset">Reset</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class CustomInput extends Vue {
  @Prop({
    default: () => ({
      email: "",
      name: "",
      checked: []
    })
  })
  public value!: {
    email: string;
    name: string;
    checked: string[];
  };

  protected internalRegistration: {
    email: string;
    name: string;
    checked: string[];
  } = {
    email: "",
    name: "",
    checked: []
  };

  protected isDisabled: boolean = false;

  protected mounted() {
    this.updateInternalStore();
  }

  @Watch("value", { deep: true })
  protected updateInternalStore() {
    this.internalRegistration = Object.assign({}, this.value); // copy the object, we don't want a reference
    // when this watch is triggered, it means the data is either has been submitted or has been reset
    // either way, we should re-enable the form
    this.isDisabled = false;
  }

  protected onSubmit() {
    this.isDisabled = true;
    this.$emit("input", this.internalRegistration);
  }
  protected onReset() {
    // clear the internal data
    this.internalRegistration = {
      email: "",
      name: "",
      checked: []
    };
  }
}
</script>

