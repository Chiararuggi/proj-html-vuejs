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
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h4>Get in Touch</h4>
          <p>Have a question for us? we'll answer your problem here</p>
          <div class="my-social d-flex">
            <div>fac</div>
            <div>pint</div>
            <div>twitt</div>
            <div>in</div>
            <div>insta</div>
          </div>
        </div>
        <div class="col-2">
          <div
            class="my-list d-flex flex-column"
          >
            <h4>Support</h4>
            <ul>
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
              <li>list 5</li>
            </ul>
          </div>
        </div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-3">
          <h4>Contact Me</h4>
          <div class="my-userinfo">placeholder</div>
          <div class="my-userinfo">placeholder</div>
          <div class="my-userinfo">placeholder</div>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <hr>
      <div class="col-12">
        <div class="d-flex w-100 justify-content-center">
          <span>Copyright 2022 by AttDogMilo.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-footer-container {
  background-color: black;
}

h4 {
  color: #ce7c2a;
}

p {
  color: #8a8b8f;
}

ul{
  padding:0;
}

li {
  color: #8a8b8f;
  list-style-type: none;
}

.my-userinfo {
  color: #8a8b8f;
  margin-bottom: 1rem;
}

hr{
  width:100%;
  color:  #8a8b8f;
}

span{
  color:white;
  margin-top: 0.8rem;
  padding-bottom: 1.8rem;
}
</style>
