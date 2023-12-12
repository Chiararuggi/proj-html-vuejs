<script>
import AppSlider from "./AppSlider.vue";
import AppAboutUs from "./AppAboutUs.vue";
import AppServices from "./AppServices.vue";
import AppChooseUs from "./AppChooseUs.vue";
export default {
  components: {
    AppSlider,
    AppAboutUs,
    AppServices,
    AppChooseUs
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
    <AppSlider />
    <div class="my-about-container">
      <div class="container">
        <AppAboutUs />
      </div>
    </div>
    <div class="my-services-container">
      <div class="container">
        <AppServices/>
      </div>
    </div>
    <AppChooseUs />
</template>

<style scoped>
.my-services-container{
  background-color: #f5f5f5;
}
</style>