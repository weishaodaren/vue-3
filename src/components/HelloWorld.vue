<template>
  <div>
    {{ attrs_ }}{{ reactiveAttrs.name }}
    <h1 @click="handleClick">click me</h1>
    {{ count }}
    <br />
    {{ state }}
  </div>
</template>

<script>
import { watchEffect, ref, reactive, computed } from "vue";

export default {
  props: {
    msg: String
  },
  setup(props, { attrs, slots, emit }) {
    // context {attrs、slots、emit}
    watchEffect(() => {
      console.log(`msg is ${props.msg}`);
      console.log(attrs);
    });
    const attrs_ = ref(attrs);
    const reactiveAttrs = reactive(attrs);
    const handleClick = () => {
      console.log(slots);
      console.log(emit);
      console.log(attrs);
    };
    const count = ref(1);
    const state = reactive({ count });
    const otherCount = ref(999);
    const one = count;
    state.count = otherCount.value; // ref 被代替
    console.log(count.value, one.value);

    const count_0 = ref(1);
    const plusOne = computed(() => count_0.value + 1);
    count_0.value = 10;
    console.log(plusOne.value);

    const count_1 = ref(2);
    const plusOne_1 = computed({
      get: () => count_1.value + 1,
      set: val => {
        count_1.value = val * 10 + 857;
      }
    });
    plusOne_1.value = 10.02;
    count_1.value = -100;
    plusOne_1.value = -1000;
    console.log(plusOne_1.value);

    return {
      attrs_,
      reactiveAttrs,
      handleClick,
      count,
      state
    };
  }
};
</script>
<style scoped lang="stylus"></style>
