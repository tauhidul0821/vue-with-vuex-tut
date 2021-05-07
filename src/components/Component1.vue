<template>
  <div>
      <!-- <h4>{{ $store.state.counter }}</h4> -->
    <Component2 />
  </div>
</template>

<script>
import Component2 from "./Component2";

export default {
  name: "Component1",
  components: {
    Component2,
  },
};
</script>

<style>
</style>