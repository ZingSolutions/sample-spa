import { mount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";

import CustomInput from "@/components/CustomInput.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("CustomInput.vue", () => {
  test("test has loaded", () => {
    expect(true).toBe(true);
  });
  test("when passed no registration, still renders form", () => {
    const wrapper = mount(CustomInput, {
      localVue
    });
    expect(wrapper.findAll("input").length).toBeGreaterThan(0);
  });
  test("when an email is entered, it updates the internal registration object", () => {
    const testEmail = "test@test.com";
    const wrapper = mount(CustomInput, { localVue });
    const emailInputWrapper = wrapper.find('input[name="email"]');

    emailInputWrapper.setValue(testEmail);

    expect(wrapper.vm.$data.internalRegistration.email).toBe(testEmail);
  });
  test("when a name is entered, it updates the internal registration object", () => {
    const testName = "test";
    const wrapper = mount(CustomInput, { localVue });
    const nameInputWrapper = wrapper.find('input[name="name"]');

    nameInputWrapper.setValue(testName);

    expect(wrapper.vm.$data.internalRegistration.name).toBe(testName);
  });
  test("when 'what's comming up' is checked, it updates the internal registration object", () => {
    const wrapper = mount(CustomInput, { localVue });
    const allowMarketing = wrapper.find('input[value="allow-marketing"]');

    allowMarketing.setChecked(true);

    expect(wrapper.vm.$data.internalRegistration.checked).toContain(
      "allow-marketing"
    );
  });
  test("when 'about events' is checked, it updates the internal registration object", () => {
    const wrapper = mount(CustomInput, { localVue });
    const allowEvents = wrapper.find('input[value="allow-events"]');

    allowEvents.setChecked(true);

    expect(wrapper.vm.$data.internalRegistration.checked).toContain(
      "allow-events"
    );
  });
  test("when submit is clicked it emits an input event with the form data", () => {
    const data = {
      email: "test@test.com",
      name: "test",
      checked: ["allow-marketing", "allow-events"]
    };
    const wrapper = mount(CustomInput, { localVue });
    wrapper.vm.$data.internalRegistration = data;
    wrapper.find('button[type="submit"]').trigger("submit");
    expect(wrapper.emitted("input")).toHaveLength(1);
    // get the input args out from the event
    const argument = wrapper.emitted("input")[0][0];
    expect(argument.email).toContain(data.email);
    expect(argument.name).toContain(data.name);
    for (const val of data.checked) {
      expect(argument.checked).toContain(val);
    }
  });
  test("when reset is clicked it clears the internal data", () => {
    const data = {
      email: "test@test.com",
      name: "test",
      checked: ["allow-marketing", "allow-events"]
    };
    const wrapper = mount(CustomInput, { localVue });
    wrapper.vm.$data.internalRegistration = data;
    wrapper.find('button[type="reset"]').trigger("reset");
    // internalRegistration should have all fields empty
    const internalRegistration = wrapper.vm.$data.internalRegistration;
    expect(internalRegistration.email).toBe("");
    expect(internalRegistration.name).toBe("");
    expect(internalRegistration.checked).toHaveLength(0);
  });
});
