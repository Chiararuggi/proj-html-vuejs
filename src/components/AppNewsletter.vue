<script></script>

<template>
  <div class="row">
    <div class="my-news-box">
      <div class="col-7">
        <img src="/assets/news.png" class="my-dog-img" />
      </div>
      <div class="col-5">
        <h3>Subscribe to Our Newsletter</h3>
        <div class="my-input-container">
          <input
            type="text"
            placeholder="Your Email Here"
            aria-label="Email"
            aria-describedby="button-addon2"
            class="my-input"
          />
          <button class="my-btn" type="button" id="button-addon2">@</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-news-box {
  display: flex;
  background-color: #ce7c2a;
  border-radius: 10px;
  height: 15rem;
  position: relative;
  margin-top: 10rem;
}

.my-dog-img {
  width: 28rem;
  height: 22rem;
  position: absolute;
  bottom: 0rem;
}

.my-input-container {
  display: flex;
  position: relative;
}

.my-input {
  padding: 1.2rem 8rem;
  text-align: start;
  border: none;
}

h3{
    color: white;
    margin-top: 5rem;
    margin-bottom: 1.3rem;
}

.my-btn {
  position: absolute;
  border: none;
  background-color: #ce7c2a;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem 1.2rem;
  top: 0.3rem;
  right: 6.8rem;
}
</style>
