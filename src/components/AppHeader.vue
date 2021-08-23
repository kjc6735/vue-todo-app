<template>
<header>
    <div class="title">
        Outlook
    </div>

    <div class="search">
        <span class="material-icons search-icons">
            search
        </span>
        <input type="text">
    </div>
    
    <div>
        <span class="material-icons">
            settings
        </span>
        <span class="material-icons">
            help_outline
        </span>
        <span class="material-icons">
            notifications_none
        </span>
        <span class="material-icons">
            account_circle
        </span>
    </div>
</header>
</template>

<script>
export default {
    name:'AppHeader'
}
</script>

<style scoped>
    header {
       /* background:#1e88e5; */
       /* background: #73D9A9; */
        background: #73A2BF;
       color:#FFF;
       display:flex;
       font-size:1.5rem;
       font-weight:bold;
       padding:1rem;
       align-items:center;
       justify-content: space-between;
    }
    header>div+div{
        margin-left:1rem;
    }
    header>div>span+span{
        margin-left:0.8rem;
    }
    
    .search {
        display:flex;
        align-items:center;
        flex:1;
        background:#fff;
        border-radius:5px;
        overflow:hidden;
        
    }
    input{
        padding:1rem;
        border:0px;
        width:100%;
    }
    .search-icons{
        color:#1e88e5;
        padding:0.5rem;
    }
</style>