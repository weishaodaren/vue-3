<template>
  <div>
    {{ attrs_ }}{{ reactiveAttrs.name }}
    <h1 @click="handleClick">click me</h1>
    {{ count }}
    <br />
    {{ state }}----{{ count_2 }}----{{ xixi }}
  </div>
</template>

<script>
import {
  watchEffect,
  ref,
  reactive,
  computed,
  readonly,
  onMounted,
  watch
} from "vue";

export default {
  props: {
    msg: String
  },
  setup(props, { attrs, slots, emit }) {
    // context {attrs、slots、emit}
    watchEffect(() => {
      console.log(`msg is ${props.msg}`);
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
    count_0.value = 10;

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

    const original = reactive({ count: 0 });
    const copy = readonly(original);
    watchEffect(() => {
      console.log(copy.count);
    });
    const stop = watchEffect(() => console.log(11111));
    stop();

    const token = ref(0);
    watchEffect(async onInvalidate => {
      token.value = 1;

      await onInvalidate(() => {
        token.value = 2;
      });
    });
    const count_2 = ref(101);
    count_2.value = 98;
    const xixi = "xixix";

    onMounted(() => {
      console.log(document.querySelector("#app"));
      console.log("now is onMounted");
    });

    const state_0 = reactive({ count: 0 });
    watch(
      () => state_0.count, // 监听getter
      (n, o) => {
        console.log(n, o);
      }
    );
    state_0.count++;
    const state_1 = ref(1);
    watch(state_1, (n, o) => {
      console.log(n, o);
    });
    state_1.value = 9;
    return {
      attrs_,
      reactiveAttrs,
      handleClick,
      count,
      state,
      count_2,
      xixi
    };
  }
};
</script>
<style scoped lang="stylus"></style>
