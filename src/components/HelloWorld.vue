<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  color: #42b983;
  margin: 50px 0;
  width: 100%;
  text-align: center;
}
</style>
