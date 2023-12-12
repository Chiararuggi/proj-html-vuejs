<script>
import AppSlider from "./AppSlider.vue";
import AppAboutUs from "./AppAboutUs.vue";
export default {
  components: {
    AppSlider,
    AppAboutUs,
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
    <div class="my-container">
      <div class="container">
        <AppAboutUs />
      </div>
    </div>
</template>

<style scoped></style>