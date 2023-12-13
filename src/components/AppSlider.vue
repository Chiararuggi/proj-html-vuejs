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
    <swiper-slide
      ><div class="my-container">
        <img src="/assets/b.png" class="my-sliderimg" />
        <div class="my-slider-text">
          <h2>Welcome to <br>DogMilo Pets</h2>
          <p>
            Lorem ipsum is simply dummy text of the printing <br>and typesetting industry</p>
            <div class="my-button-container d-flex justify-content-start">
              <div class="my-firstbutton">Get Started</div>
              <div class="my-secondbutton"><img src="/assets/play.png" class="my-play-img"></div>
            </div>
        </div>
      </div></swiper-slide
    >

    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
}

.my-sliderimg {
  display: block;
  width: 100%;
  height: 35rem;
  object-fit: cover;
}

.my-container {
  width: 100%; 
}

.my-slider-text{
  width: 30%;
  position: absolute;
  top:10rem;
  left: 20rem;
}

h2{
  color: white;
  font-size: 46px;

}

p{
  margin-top:1rem;
  color: white;
  margin-bottom: 1.4rem;
}

.my-play-img{
  width:3rem;
}

.my-firstbutton{
  color:white;
  background-color: #ce7c2a;
  width: fit-content;
  margin-right: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}

.my-secondbutton{
  color:white;
  background-color: #6fd0f8;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 10px;
}
</style>

