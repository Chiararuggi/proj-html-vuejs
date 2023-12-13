<script></script>

<template>
  <div class="row justify-content-center">
    <div class="my-news-box">
      <div class="col-7">
        <img src="/assets/news.png" class="my-dog-img" />
      </div>
      <div class="col-5">
        <div class="d-flex flex-column my-email-container">
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
  margin-bottom: -125px;
  width: 80%;
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
  width: 100%;
  height: 58px;
  text-align: start;
  border: none;
  padding: 10px 20px;
}

h3 {
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
  width: 52px;
  height: 52px;
  right: 3px;
  top: 3px;
}
</style>
