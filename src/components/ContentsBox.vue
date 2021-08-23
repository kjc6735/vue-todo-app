<template>
  <div id="contentsbox">
      <div>
          오늘 할 일({{this.date}}일)
      </div>
      <router-view></router-view>

  </div>
</template>

<script>
export default {
    data : () => {
        return {
            today: new Date(),
            year:new Date().getFullYear(),
            month:new Date().getMonth()+1,
            date: new Date().getDate(),
            day:new Date().getDay()
        }
    }
}
</script>

<style scoped>
    #contentsbox{
        flex:1;
    }
</style>