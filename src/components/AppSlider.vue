<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide><img src="/assets/b.png" /></swiper-slide>
    <swiper-slide><img src="/assets/b.png" /></swiper-slide>
    <swiper-slide><img src="/assets/b.png" /></swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 35rem;
  object-fit:cover;
}
</style>