<template>
  <div>
    <input type="text" v-model="text" />
    <h1>{{ foo_ }}</h1>
    <Button />
  </div>
</template>
<script>
import {
  customRef,
  onBeforeUpdate,
  markRaw,
  isReactive,
  reactive,
  shallowRef,
  defineComponent,
  h,
  ref,
  toRefs
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

const Button = defineComponent({
  setup() {
    const didi = ref(null);
    const bubu = reactive({ name: "weishaodaren" });
    const bibi = () => {
      setTimeout(() => {
        bubu["age"] = 25;
      }, 1000);
    };
    const { name } = toRefs(bubu);
    return () =>
      h(
        "button",
        {
          ref: didi,
          onClick: bibi()
        },
        `我是${name.value}, 今年${bubu.age}`
      );
  }
});

export default {
  name: "Api",
  components: { Button },
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
