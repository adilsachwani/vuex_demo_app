<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{color: $store.state.colorCode}">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.squaredCount }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCount')">-</button>
      <button @click="$store.dispatch('increaseCount')">+</button>
    </div>
    <input type="text" v-model="colorCode" @click="changeColor"/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    colorCode: {
      get(){
        return this.$store.state.colorCode;
      },
      set(color){
        this.$store.commit('setColorCode', color);
      }
    }
  }
}

</script>

<style>

  div {
    margin-bottom: 20px;
  }

  .counter {
    font-size: 50px;
  }

  .buttons button {
    font-size: 30px;
    width: 100px;
    margin: 0px 20px;
  }

</style>