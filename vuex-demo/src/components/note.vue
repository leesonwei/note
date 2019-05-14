<template>
  <div>
    <div>{{ note }}</div>
    <div>{{ $route.params.name }}</div>
  </div>

</template>

<script>
    export default {
        name: "note",
        data () {
          return {
            note:this.$route.params.name
          }
        }
    }
</script>

<style scoped>

</style>
