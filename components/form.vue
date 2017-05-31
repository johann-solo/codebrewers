<template>
  <section class="container form_component">
    <h2>Let's work together</h2>
    <form action="https://formspree.io/johannd@icloud.com"
      method="POST">
      <input type="text" name="name" placeholder="Your name">
      <input type="hidden" name="_cc" value="manfredheadley@icloud.com,dillonbheadley@icloud.com" />
      <input type="email" name="_replyto" placeholder="Your email">
      <textarea name="text" placeholder="Tell us about your project" rows="10"></textarea>
      <input type="text" name="_gotcha" style="display:none" />
      <input type="submit" value="Send" class="submit_button">
    </form>
  </section>
</template>

<style lang="sass">

</style>
