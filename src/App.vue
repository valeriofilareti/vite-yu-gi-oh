
<script>
import axios from "axios";
import {store} from "./data/store";
import myHeader from "./components/myHeader.vue";
import Main from "./components/Main.vue";
export default {
  components: {
    myHeader,
    Main
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        store.resultArray = result.data.data
        console.log(store.resultArray);
      })
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>


<template>
  <myHeader />
  <Main />
</template>


<style lang="scss">
  @use './scss/main.scss'
</style>
