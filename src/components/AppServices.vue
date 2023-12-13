<script></script>

<template>
  <div class="row">
    <div
      class="d-flex flex-column justify-content-center align-items-center h-100"
    >
      <span class="my-service-text">Service</span>
      <h2>DogMilo Pet Care Services For Your Best Friends</h2>
      <div class="d-flex w-100 h-100 justify-content-between align-items-center">
        <div class="col-2">
          <div class="my-card">
            <img src="/assets/d-1.png" />
            <h6>Pet Sitting</h6>
            <span
               class="my-span">The readable content of a page when looking at its layout</span
            >
            <div class="my-button">
              <img src="/assets/right.png" />
            </div>
          </div>
        </div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.my-service-text{
  color: #7d7564;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

h6{
  margin-top: 1rem;
}

.my-span{
  padding-top:0.3rem;
  text-align: center;
}
.my-card{
    background-color: #ce7c2a;
    border-radius: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 1rem;
}
.my-card img{
    width:40%;
}

.my-button{
    background-color: #fecd00;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}

.my-button img{
    width: 40%;
}
</style>
