<template>
  <div>
    <p>{{ msg }}</p>
    <img v-bind:src="pic" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  var pic = require('../../momo.jpg') 
   export default {
     data () {
    return {
      msg: '  I am ratings',
      pic: pic 
    }
  }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
   
</style>
