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
      {{ item }}---{{ "fo:" + fo }} ----{{ "ba:" + ba }}
    </h1>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  reactive,
  onBeforeUpdate,
  unref,
  toRef,
  toRefs,
  isRef,
  isProxy,
  createComponent
} from "vue";
export default createComponent({
  name: "Kitty",
  props: {
    kitty: {
      type: Object
    }
  },
  setup(props) {
    const name = toRef(props.kitty, "name");
    console.log(name.value);
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

    const state_ = reactive({ fo: 2, ba: 3 });
    const stateAsRefs = toRefs(state_);
    state_.fo = state_.fo * 10;
    stateAsRefs.fo.value = stateAsRefs.fo.value * 10;
    console.log(stateAsRefs.fo.value, state_.fo);
    const { fo, ba } = stateAsRefs;
    console.log(isRef(state_));
    console.log(isProxy(ba));
    return {
      kitty_,
      list,
      divs,
      fo,
      ba
    };
  }
});
</script>

<style lang="stylus"></style>
