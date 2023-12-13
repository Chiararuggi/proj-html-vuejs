<script>
import AppNewsletter from "./AppNewsletter.vue";
import { store } from "../store.js"

export default {
  components: {
    AppNewsletter,
  },
  data() {
    return {
      store
    };
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
    <div class="container py-5">
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
              <li v-for="url in this.store.supportLinks">
              <a :href="url.url">{{ url.title }}</a>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-2">
          <div
            class="my-list d-flex flex-column"
          >
            <h4>About</h4>
            <ul>
              <li v-for="url in store.aboutLinks">
              <a :href="url.url">{{ url.title }}</a>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-2">
          <div
            class="my-list d-flex flex-column"
          >
            <h4>Faq</h4>
            <ul>
              <li v-for="url in store.faqLinks">
              <a :href="url.url">{{ url.title }}</a>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-3">
          <h4>Contact Me</h4>
          <div class="my-userinfo" v-for="address in store.contacts">{{ address.address }}</div>
          <div class="my-userinfo" v-for="email in store.contacts">{{ email.email }}</div>
          <div class="my-userinfo" v-for="phone in store.contacts">{{ phone.phone }}</div>
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
  padding-top:125px;
  background-color: black;
}

h4 {
  color: #ce7c2a;
  font-weight: 500;
  font-size: 22px;
}

p {
  color: #8a8b8f;
  font-size: 15px;
}

ul{
  padding:0;
}

li{
  list-style-type: none;
  margin-bottom: 0.7rem;
  font-size: 15px;
}

a{
  color: #8a8b8f;
  text-decoration: none;
}

.my-userinfo {
  color: #8a8b8f;
  margin-bottom: 1rem;
  font-size: 15px;
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
