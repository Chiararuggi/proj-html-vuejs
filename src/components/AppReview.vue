<script>
import AppReviewSlider from "./AppReviewSlider.vue";
export default {
  components: {
    AppReviewSlider,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="my-review-container">
    <div class="row">
      <div class="col-4">
        <div class="d-flex my-title-container">
          <img src="/assets/dog-icon.png" class="my-review-img" />
          <span class="my-review-title">Review & Rating</span>
        </div>
        <h2>Over 8000 Customers With 5 Star Review</h2>
        <p>
          It is a long estabilished fact that a reader will be distructed by the
          readable content of a page when looking at its layout
        </p>
        <div class="my-star">stelline</div>
      </div>
      <div class="col-8">
        <AppReviewSlider />
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-review-container {
  margin-top: 5rem;
  margin-bottom: 1rem;
}

.my-title-container {
  margin-bottom: 1rem;
}
.my-review-title {
  color: #7d7564;
  font-weight: 500;
  margin-left: 1rem;
}

.my-review-img {
  width: 2rem;
}

h2 {
  margin-bottom: 2rem;
}

p{
  margin-bottom: 1.5rem;
}
</style>
