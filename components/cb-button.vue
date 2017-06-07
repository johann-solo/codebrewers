<template lang="html">
  <button type="button" name="button" class="o-Button-cb" @click="onClick">
    <slot>Default Button Text</slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="sass">

  @import '../assets/css/variables'

  .o-Button-cb
    border: 2px solid $color__primary
    background: transparent
    padding: 6px 18px
    text-transform: uppercase
    color: $color__primary
    font-family: "Klill", Arial, sans-serif
    font-size: 1.5em
    cursor: pointer
    transition: all 0.1s ease-in-out
    &:hover
      color: white
      background: $color__primary

  .o-Button-alt
    color: $color__primary
    background: transparent

</style>
