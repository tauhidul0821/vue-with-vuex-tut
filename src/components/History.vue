<template>
  <div class="container">
    <h3>History</h3>
    <div class="flex">
      <p v-for="(number, index) in history" :key="index">
        {{ number }}
      </p>
    </div>

    <input type="number" placeholder="Search by Index" v-model="value" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
      return{
          value: 0
      }
  },
  name: "History",
  computed: {
    ...mapState(["history"]),
  },
};
</script>

<style>
.container {
  margin-top: 7rem;
}
.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.flex p {
  margin: 1rem;
}
</style>