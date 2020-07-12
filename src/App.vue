<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue App" name="weishaodaren" /> -->
    <hello-kitty :kitty="kittyMsg" />
    <inputDemo />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import HelloKitty from "./components/HelloKitty";
import inputDemo from "./components/ReactiveApi";
import { ref, provide, reactive, defineAsyncComponent } from "vue";

const HelloKitty = defineAsyncComponent({
  loader: () => import("./components/HelloKitty.vue"),
  delay: 300,
  timeout: 3000,
  onError(err, retry, fail, attempts) {
    console.log(err);
    console.log(retry);
    console.log(fail);
    console.log(attempts);
  }
});

export default {
  name: "App",
  components: {
    // HelloWorld,
    HelloKitty,
    inputDemo
  },
  setup() {
    const kittyMsg = reactive({ name: "Kitty" });
    provide("customVal", ref("dark"));
    return {
      kittyMsg
    };
  }
};
</script>

<style lang="stylus"></style>
