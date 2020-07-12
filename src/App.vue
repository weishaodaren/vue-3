<template>
  <div id="app" title="click me 2 Hello world" @click="handleClick2HelloWorld">
    this is App
    <router-view />
  </div>
</template>

<script>
import { ref, provide, reactive } from "vue";
import { useStore} from "vuex";
import { useRouter } from "vue-router";

// const HelloKitty = defineAsyncComponent({
//   loader: () => import("./components/HelloKitty.vue"),
//   delay: 300,
//   timeout: 3000,
//   onError(err, retry, fail, attempts) {
//     console.log(err);
//     console.log(retry);
//     console.log(fail);
//     console.log(attempts);
//   }
// });

export default {
  name: "App",
  components: {},
  setup() {
    const kittyMsg = reactive({ name: "Kitty" });
    const router = useRouter();
    const store = useStore();
    console.log(store);
    const handleClick2HelloWorld = () => {
      router.push("/world");
    };
    provide("customVal", ref("dark"));
    return {
      kittyMsg,
      handleClick2HelloWorld
    };
  }
};
</script>

<style lang="stylus"></style>
