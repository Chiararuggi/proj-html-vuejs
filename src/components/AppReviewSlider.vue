<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><div class="my-slider-box d-flex flex-column">
        <div class="my-star">stelline</div>
        <div class="my-review">
          <h5>Great Place</h5>
          <p class="my-review-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            aperiam accusantium fuga eius sit minima, provident, odit maxime
            impedit, consequuntur ipsa tempora id?
          </p>
        </div>
        <div class="my-user d-flex">
          <img src="/assets/t1.png" />
          <div class="my-userinfo d-flex flex-column">
            <h6>Tobias May</h6>
            <p class="my-usertext">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="my-slider-box d-flex flex-column">
        <div class="my-star">stelline</div>
        <div class="my-review">
          <h5>Great Place</h5>
          <p class="my-review-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            aperiam accusantium fuga eius sit minima, provident, odit maxime
            impedit, consequuntur ipsa tempora id?
          </p>
        </div>
        <div class="my-user d-flex">
          <img src="/assets/t1.png" />
          <div class="my-userinfo d-flex flex-column">
            <h6>Tobias May</h6>
            <p class="my-usertext">UI/UX Designer</p>
          </div>
        </div>
      </div></swiper-slide
    >
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.my-slider-box {
  background-color: #f4f4f4;
}

.my-star {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

h5 {
  margin-left: 1rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
}

h6 {
  margin: 0;
}
.my-review {
  margin-bottom: 1rem;
}
.my-review-text {
  margin-left: 1rem;
  margin-right: 1rem;
}

.my-user {
  margin-bottom: 1rem;
}

.my-userinfo {
  margin-left: 0.6rem;
}

.my-usertext {
  font-size: 12px;
}

.my-user img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  margin-left: 1rem;
}
</style>
