<template>
  <div id="menubar">
    <ul>
        <li>
            오늘 할 일
        </li>
        <li>
            재진이
        </li>
        <li>
            병신
        </li>
        <li>
            존나
        </li>
        <li>
            깝치네
        </li>
        <li>
            ㅋㅋㅋㅋ
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