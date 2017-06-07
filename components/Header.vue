<template>
  <header class="container">
    <nav class="o-nav-desktop">
      <ul>
        <li class="h-Logo"><a href=""><img src="../assets/img/codebrew.png" alt="" ></a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/process">Process</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <nav class="o-nav-mobile visible">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/process">Process</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>


<style lang="sass" scoped>

  @import '../assets/css/variables'

  header
    background-color: $color__secondary

  .o-nav-mobile
    padding: 20px 0
    display: none
    &.visible
      display: block
      @media (min-width: 768px)
        display: none
    ul
      display: flex
      li
        flex: 1

  .o-nav-desktop
    width: 90vw
    margin: auto
    display: none
    @media (min-width: 768px)
      display: block
    ul
      display: flex
      align-items: baseline
      padding: 10px 0
      li
        margin-right: 50px
        &:last-child
          margin-right: 0
        a
          font-size: 18px
          text-transform: uppercase
          color: white
          &:hover
            color: $color__primary

  .h-Logo
    margin-right: auto
    img
      width: 300px
      height: auto

</style>
