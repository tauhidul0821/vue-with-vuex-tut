<template>
  <div>
      <!-- <h4>{{ $store.state.counter }}</h4> -->
    <Counter />
  </div>
</template>

<script>
import Counter from "./Counter";
export default {
  name: "Component4",
  components: {
    Counter,
  },
};
</script>

<style>
</style>