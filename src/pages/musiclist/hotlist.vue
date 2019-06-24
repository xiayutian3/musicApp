<template>
  <div>
   <music-list :type="type" :size="5"/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      type:this.$route.params.type? (+this.$route.params.type):2
      // type:this.$route.query.type? (+this.$route.query.type):2,
    }
  },
  mounted(){
    // console.log(this.$route)
  },


}
</script>
<style scoped>

</style>


