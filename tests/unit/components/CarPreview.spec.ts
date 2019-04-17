import { shallowMount } from "@vue/test-utils";
import CarPreview from "@/components/CarPreview.vue";

describe("CarPreview.vue", () => {
  test("test has loaded", () => {
    expect(true).toBe(true);
  });
  describe("when passed a car model", () => {
    test("displays make", () => {
      const carData = {
        make: "Ford",
      };
      const wrapper = shallowMount(CarPreview, {
        propsData: {
          carData,
        },
      });
      expect(wrapper.text()).toContain(carData.make);
    });
    test("displays model", () => {
      const carData = {
        model: "Fiesta",
      };
      const wrapper = shallowMount(CarPreview, {
        propsData: {
          carData,
        },
      });
      expect(wrapper.text()).toContain(carData.model);
    });
    test("displays year", () => {
      const carData = {
        year: "2006",
      };
      const wrapper = shallowMount(CarPreview, {
        propsData: {
          carData,
        },
      });
      expect(wrapper.text()).toContain(carData.year);
    });
    test("should not display 'No vehicle found'", () => {
      const carData = {};
      const wrapper = shallowMount(CarPreview, {
        propsData: {
          carData,
        },
      });
      expect(wrapper.text()).not.toContain("No vehicle found");
    });
  });
  test("when passed no car data only shows 'No vehicle found'", () => {
    const wrapper = shallowMount(CarPreview);
    expect(wrapper.text()).toBe("No vehicle found");
  });
  test("when passed car data with an image, shows the image", () => {
    const carData = {
      image: "https://via.placeholder.com/200",
    };
    const wrapper = shallowMount(CarPreview, {
      propsData: {
        carData,
      },
    });
    const image = wrapper.find("img");
    expect(image).not.toBe(null);
    expect(image.attributes().src).toBe(carData.image);
  });
  test("when passed car data without an image, shows 'No image found'", () => {
    const carData = {
      image: "",
    };
    const wrapper = shallowMount(CarPreview, {
      propsData: {
        carData,
      },
    });
    expect(wrapper.text()).toContain("No image found");
  });
});
