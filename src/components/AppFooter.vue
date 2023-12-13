<script>
import AppNewsletter from "./AppNewsletter.vue";

export default {
  components: {
    AppNewsletter,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="container">
    <AppNewsletter />
  </div>
  <div class="my-footer-container">
    <div class="container">ciao</div>
  </div>
</template>

<style scoped>
.my-footer-container {
  background-color: black;
}
</style>
