
<script>
import {store} from '../data/store'
export default {
  name: 'Main',
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="top-bar">bar</div>
    <div class="card-container">
      <div v-for="(card, index) in store.resultArray" :key="index" class="card">
        <div class="img">
          <img :src=" card.card_images[0].image_url " alt="">
          
        </div>
        <div class="name">{{ card.name }}</div>
        <div class="type">{{ card.archetype }}</div>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
  .top-bar {
    padding: 20px;
    background-color: black;
    color: white;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width: 220px;
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    .img {
      width: 100%;
    }
    .name {
      text-transform: uppercase;
      padding: 8px;
      margin-bottom: 10px;
    }
  }

  img {
    width: 100%;
  }
</style>