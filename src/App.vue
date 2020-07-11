<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue App" name="weishaodaren" /> -->
    <hello-kitty />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import HelloKitty from "./components/HelloKitty"
import { ref, provide } from "vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HelloKitty
  },
  setup() {
    provide("customVal", ref("dark"));
  }
};
</script>

<style lang="stylus"></style>
