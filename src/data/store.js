import {reactive} from "vue";

export const store = reactive({
  apiUrl: "https://api.sampleapis.com/beers/ale",
  resultArray: []
})