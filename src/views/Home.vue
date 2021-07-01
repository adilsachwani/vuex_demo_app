<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
    <Buttons />
    <ColorCode />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    'Counter' : require('@/components/Counter.vue').default,
    'Buttons' : require('@/components/Buttons.vue').default,
    'ColorCode' : require('@/components/ColorCode.vue').default
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