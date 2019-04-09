<style lang="sass" scoped>
.appHolder
  background-color: #ccc
</style>

<template lang="pug">
  .appHolder
    |hola
    input(v-model="variable")
    |{{variable}}
</template>

<script>
export default {
  data: () => ({
    variable: null
  })
}
</script>
