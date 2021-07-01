import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  
  state: {
    counter: 0,
    colorCode: "red"
  },
  mutations: {
    increaseCount(state, randomNum){
      state.counter += randomNum;
    },
    decreaseCount(state, randomNum){
      state.counter -= randomNum;
    },
    setColorCode(state, color){
      state.colorCode = color;
    }
  },
  actions: {
    increaseCount({commit}){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        commit('increaseCount', response.data);
      })
    },
    decreaseCount({commit}){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        commit('decreaseCount', response.data);
      })
    }
  },
  getters: {
    squaredCount(state){
      return state.counter * state.counter;
    }
  },
  modules: {
  
  }

})