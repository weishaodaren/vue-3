<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue App" name="weishaodaren" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { ref, provide } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  setup() {
    provide("customVal", ref("dark"));
  }
};
</script>

<style lang="stylus"></style>
