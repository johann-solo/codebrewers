<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
export default {
  data () {
    return { name: 'world' }
  },
  methods: {
    superTest () {
      return { number: 100 }
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
