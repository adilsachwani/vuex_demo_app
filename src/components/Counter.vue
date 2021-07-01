<template>
    <div class="counter" :style="{color: $store.state.colorCode}">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.squaredCount }}
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>