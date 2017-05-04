<template>
  <section class="container">
    <h1 class="title">
      The CodeBrewers
    </h1>
  </section>
</template>

<script>
export default {
  asyncData () {
    return {
      keyword: 'Johann Headley',
      onOff: true
    }
  },
  methods: {
    toggleOnOff() {
      this.onOff = !this.onOff;
    }
  }
}
</script>


<style scoped>
.title
{
  margin: 50px 0;
}
</style>
