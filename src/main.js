import axios from 'axios';
import { createApp } from 'vue'
import { createStore } from "vuex";

import App from './App.vue'

const store = createStore({
    state() {
        return {
            counter: 6,
            history: [0]
        }
    },
    mutations: { // mutation never contain async code that way come with action 
        addToCounter(state, payload) {
            console.log('hi');
            state.counter = state.counter + payload
            state.history.push(state.counter)
        },
        subTractFromCounter(state, payload) {
            console.log('minimise');
            state.counter = state.counter - payload
        }
    },
    actions: {
        async addRandomNumber(context){
            const data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
            console.log(data);
            context.commit('subTractFromCounter',data.data)
        }
    }

});

const app = createApp(App);

app.use(store)

app.mount('#app')
