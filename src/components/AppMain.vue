<script>
import AppSlider from "./AppSlider.vue";
import AppAboutUs from "./AppAboutUs.vue";
import AppServices from "./AppServices.vue";
import AppChooseUs from "./AppChooseUs.vue";
import AppReview from "./AppReview.vue";
export default {
  components: {
    AppSlider,
    AppAboutUs,
    AppServices,
    AppChooseUs,
    AppReview,
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
    <div class="container">
      <AppReview />
    </div>
</template>

<style scoped>
.my-services-container{
  background-color: #f5f5f5;
}
</style>