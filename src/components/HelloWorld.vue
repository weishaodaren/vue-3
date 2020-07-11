<template>
  <div>{{ attrs_ }}{{ attrs.name }}</div>
</template>

<script>
import { watchEffect, ref, reactive } from "vue";

export default {
  props: {
    msg: String
  },
  setup(props, context) {
    watchEffect(() => {
      console.log(`msg is ${props.msg}`);
      console.log(context.attrs);
    });
    const attrs_ = ref(context.attrs);
    const attrs = reactive(context.attrs);
    return {
      attrs_,
      attrs
    };
  }
};
</script>
<style scoped lang="stylus"></style>
