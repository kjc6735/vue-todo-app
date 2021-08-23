<template>
  <div id="menubar">
    <ul>
        <li>
            <router-link to="/today">오늘 할 일</router-link>
        </li>
        <li>
            <router-link to="/complete">완료 한 일</router-link>
        </li>
        <li>
            <router-link to="/today">몰라</router-link>
        </li>
        <li>
            <router-link to="/today">Go to Foo</router-link>
        </li>
        
    </ul>
  </div>
</template>

<script>
export default {
    name:'MenuBar'
}
</script>

<style scoped>
    #menubar{
        width:250px;
        height:100%;
        /* background: #73D9A9; */
        background: #3F5B73;
        color:#A9D0D9;
    }

 
    li{
        text-align:center;
        padding:1rem;
        letter-spacing: 0.1rem;
        /* background:#2D465D; */
        
        /* border-bottom:1px solid #000; */
    }

    li:hover{
        
        color:aquamarine
    }
</style>