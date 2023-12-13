<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="my-contacts py-2">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="d-flex align-items-center h-100 justify-content-start">
            <span>info@example.com</span>
            <span>+1(817)901 3377</span>
          </div>
        </div>
        <div class="col-6">
          <div
            class="d-flex align-items-center h-100 justify-content-end"
          >
            <div>f</div>
            <div>pint</div>
            <div>twitt</div>
            <div>in</div>
            <div>insta</div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="my-header my-3">
      <div class="row">
        <div class="col-4">
          <div class="d-flex align-items-center h-100 justify-content-start">
            <img src="/assets/logo.png" />
          </div>
        </div>
        <div class="col-8">
          <div class="d-flex align-items-center h-100 justify-content-end">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Training</a>
            <a href="#">Blogs</a>
            <div class="my-button">Get in Toch!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.my-contacts {
  background-color: #7d7044;
  color: white;
}
.my-button {
  background-color: #ce7c2a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 20px;
}

a {
  text-decoration: none;
  color: #88908e;
  margin-right: 2rem;
  font-weight: 500;
  font-size: 20px;
}
</style>
