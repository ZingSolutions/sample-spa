import { shallowMount } from "@vue/test-utils";
import CarPreview from "@/components/CarPreview.vue";

describe("CarPreview.vue", () => {
  test("test has loaded", () => {
    expect(true).toBe(true);
  });
  test("when passed a car model displays make, model and year", () => {
    const carData = {
      make: "Ford",
      model: "Fiesta",
      year: "2006",
    };
    const wrapper = shallowMount(CarPreview, {
      propsData: {
        carData,
      },
    });
    expect(wrapper.text()).toContain(carData.make);
    expect(wrapper.text()).toContain(carData.model);
    expect(wrapper.text()).toContain(carData.year);
  });
});
