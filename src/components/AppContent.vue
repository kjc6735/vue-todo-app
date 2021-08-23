<template>
  <div id="contents">
      <MenuBar></MenuBar>
      <contents-box></contents-box>
  </div>
</template>

<script>
import ContentsBox from './ContentsBox';
import MenuBar from './MenuBar';
export default {
    name:'AppContent',
    components:{
        MenuBar,
        ContentsBox

    }
}
</script>

<style>
  #contents{
    display:flex;
    flex:1;
    height:100%;
  }
</style>