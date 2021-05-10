![Screenshot 2021-05-10 at 11 18 16 PM](https://user-images.githubusercontent.com/58136550/117698973-1c47e400-b1e6-11eb-8153-6bb30add229a.png)



```JS
// main.js

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
```


<img width="797" alt="Screenshot 2021-05-08 at 1 20 20 AM" src="https://user-images.githubusercontent.com/58136550/117498413-97698a00-af9b-11eb-8900-579586734416.png">
