<template>
  <div>
    <input type="text" v-model="text" />
    <h1>{{ foo_ }}</h1>
  </div>
</template>
<script>
import {
  customRef,
  onBeforeUpdate,
  markRaw,
  isReactive,
  reactive,
  shallowRef
} from "vue";

function useDebouncedRef(value, delay = 200) {
  let timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newVal;
          trigger();
        }, delay);
      }
    };
  });
}
export default {
  name: "Api",
  setup() {
    const text = useDebouncedRef("hello", 500);
    onBeforeUpdate(() => {
      console.log(text.value);
    });

    const foo = markRaw({});
    const bar = { bar: "bar" };
    console.log(reactive(bar));
    console.log(isReactive(reactive(foo)));

    const foo_ = shallowRef({});
    foo_.value = { name: "weishaodaren" };
    console.log(foo_.value.name);
    return {
      text,
      foo_
    };
  }
};
</script>
