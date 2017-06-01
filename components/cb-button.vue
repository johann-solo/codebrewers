<template lang="html">
  <button type="button" name="button" class="cb-button" @click="onClick">
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

  =base-button($mainColor,$hoverColor)
    border: 2px solid $mainColor
    background: transparent
    padding: 6px 18px
    text-transform: uppercase
    color: $mainColor
    font-family: "Klill", Arial, sans-serif
    font-size: 1.5em
    cursor: pointer

    &:hover
      border-color: $hoverColor
      color: $hoverColor
      background: $mainColor

  .cb-button
    +base-button(#e74c3c,white)

  .alt
    +base-button(white,#e74c3c)

</style>
