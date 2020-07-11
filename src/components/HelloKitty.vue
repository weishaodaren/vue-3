<template>
  <div ref="kitty_">
    <h1
      v-for="(item, index) in list"
      :key="index"
      :ref="
        el => {
          divs[index] = el;
        }
      "
    >
      {{ item }}
    </h1>
  </div>
</template>

<script>
import { ref, onMounted, reactive, onBeforeUpdate, unref, toRef } from "vue";
export default {
  name: "Kitty",
  setup() {
    const kitty_ = ref(null);
    onMounted(() => {
      console.log(kitty_.value);
    });

    const list = reactive([1, 2, 3, 4, 5, 6]);
    const divs = ref([]);
    onBeforeUpdate(() => {
      divs.value = [];
    });
    const kitty = ref(500);
    const unwrapped = unref(kitty);
    console.log(unwrapped);

    const state = reactive({ foo: 1, bar: 2 });
    const fooRef = toRef(state, "foo"); // const foo = ref(1)
    fooRef.value++;
    state.foo++;
    console.log(state.foo, fooRef.value);
    return {
      kitty_,
      list,
      divs
    };
  }
};
</script>

<style lang="stylus"></style>
