<template>
    <div class="header">
        <div class="first" v-show="'/main/home'===$route.path ?true:false">
            <div class="search"><a href="#/brandsearch"><img src="../../assets/images/header/search.png"/></a></div>
            <div class="mid"><img src="../../assets/images/header/logo.png"/></div>
            <div class="message"><img src="../../assets/images/header/message.png"/></div>
        </div>
        <div class=" second" v-show="'/main/chengQ'===$route.path ?true:false">
            <div class="search"><a href="#/search"><img src="../../assets/images/header/search.png"/></a></div>
            <div class="message"><img src="../../assets/images/header/message.png"/></div>
        </div>
        <div class=" second" v-show="'/main/findsingle'===$route.path ?true:false">
            <div class="search"><a href="#/search"><img src="../../assets/images/header/search.png"/></a></div>
            <div class="message"><img src="../../assets/images/header/message.png"/></div>
        </div>
        <div class=" four" v-show="'/main/mine'===$route.path ?true:false">
            <div class="my-fashion">我的Fashion 购</div>
            <div class="message"><img src="../../assets/images/header/message.png"/></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vheader"
    }
</script>

<style scoped>
.header{
    position: fixed;
    height: 0.5rem;
    width: 100%;
    top: 0;
    font-size: 0.24rem;
    /*头部吸顶保证在最顶层*/
    z-index:3;
}
.first{
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 0.5rem;
    background-color: #faf9fc;
}
.second{
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 0.5rem;
    background-color: #faf9fc;
}
.search{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.mid{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.mid img{
    width: 1.3rem;
    height: auto;
}
.message{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.search img{
    width:0.36rem;
    height:0.36rem;
}

/*mine页面头部信息*/
.four{
    width:100%;
    height:0.5rem;
    line-height:0.5rem;
    display: flex;
    justify-content: space-between;
    background-color: #faf9fc;
    text-align: center;
    font-size: 0.18rem;
    color:#666666;
}
.four .my-fashion{
    width:80%;
    padding-left: 0.6rem;
    box-sizing: border-box;
}
</style>