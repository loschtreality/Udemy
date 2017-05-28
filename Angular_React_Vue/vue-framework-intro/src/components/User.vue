<template>
  <div id="user">
    <h3>The User</h3>
    <p>My username is {{ username }}</p>
    <app-info></app-info>
  </div>
</template>

<script>
  import Info from './Info.vue'
  export default {
    name: 'user',
    data () {
      return ({
        username: 'michaelLoschiavo'
      })
    },
    components: {
      'app-info': Info
    }
  }
</script>

<style scoped>
  p {
    font-style: italic;
  }
</style>
