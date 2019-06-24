<template>
  <div>
     <music-list :type="type" :size="5"/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      type:+this.$route.params.type
    }
  },
  mounted() {

  }

}
</script>
<style scoped>

</style>
