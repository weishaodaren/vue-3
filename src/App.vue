<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue App" name="weishaodaren" /> -->
<!--   <hello-kitty :kitty="kittyMsg" />-->
    <inputDemo />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import HelloKitty from "./components/HelloKitty";
import inputDemo from "./components/ReactiveApi";
import { ref, provide, reactive } from "vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // HelloKitty,
    inputDemo,
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
