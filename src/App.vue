<template>
  <div id="app" class="container">
    <navbar></navbar>
    <h1 class=text-center>Twitty</h1>
    <items></items>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Items from './components/Items'

export default {
  name: 'app',
  components: {
    Navbar,
    Items
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  width: 1024px;
  margin-top: 20px;
}
</style>
