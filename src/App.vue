<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue App" name="weishaodaren" /> -->
    <hello-kitty :kitty="kittyMsg" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import HelloKitty from "./components/HelloKitty";
import { ref, provide, reactive } from "vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HelloKitty
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
