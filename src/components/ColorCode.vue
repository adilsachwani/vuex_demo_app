<template>
    <input type="text" v-model="colorCode" @click="changeColor"/>
</template>

<script>
export default {
    name: 'ColorCode',
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

</style>