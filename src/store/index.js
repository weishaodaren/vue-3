import { createStore } from "vuex";

const store = createStore({
  state: {
    xixiData: [
      { name: "xixi", age: "20", sex: "male" },
      { name: "xixi", age: "20", sex: "male" },
      { name: "xixi", age: "20", sex: "male" },
      { name: "xixi", age: "20", sex: "male" },
      { name: "xixi", age: "20", sex: "male" },
      { name: "xixi", age: "20", sex: "male" },
      { name: "xixi", age: "20", sex: "male" }
    ],
    lalalData: []
  },
  mutations: {
    setXixi(state, payload) {
      console.log(state, payload);
    }
  },
  actions: {}
});
export default store;
