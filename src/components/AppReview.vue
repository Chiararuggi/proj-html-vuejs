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
    <div class="row">
        <div class="col-4">
            <div class="d-flex">
                <img src="/assets/dog-icon.png">
                <h6>Review & Rating</h6>
            </div>
            <h2>Over 8000 Customers With 5 Star Review</h2>
            <p>It is a long estabilished fact that a reader will be distructed by the readable content of a page when looking at its layout</p>
            <div class="my-star">
                stelline
            </div>
        </div>
        <div class="col-8">
            <AppReviewSlider />
        </div>
    </div>

</template>

<style scoped></style>