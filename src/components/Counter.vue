<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ counter }}</h1>
    <button @click="subTractFromCounter(parseInt(value))">-</button>
    <input type="number" v-model="value" />
    <button @click="addToCounter(parseInt(value))">+</button>
    <div>
      <button class="btn" @click="addRandomNumber">Add By Random Number</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCounter", "subTractFromCounter"]),
    ...mapActions(['addRandomNumber'])
  },
};
</script>


<style>
.counter {
  font-size: 5rem;
}
button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}
input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #41b983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}

</style>