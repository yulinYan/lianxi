<template>
   <div v-if="artInfo">
       <div class="box" :key="index" v-for="(item,index) in artInfo">
           <img :src="item.bg_img">
           <div class="new">
               <h4>{{item.title}}</h4>
               <p> </p>
               <img src="assets/images/fav.png"/>&nbsp;
               <span>{{item.love}}</span>&nbsp;&nbsp;
               <img src="assets/images/see.png"/>&nbsp;
               <span>{{item.page_view}}</span>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "myarticle",
        data(){
            return {
                artInfo:null,
                num:[1098,2458,4233,1689,2968,3849,6578,8329,1929]
            }
        },
        methods : {
            _initArtInfo(){
                fetch('http://119.3.133.207:5000/home/artircles/').then(res=>{
                    res.json().then(data => {
                        this.artInfo = data.data;
                    })
                })
            }
        },
        beforeMount() {
            this._initArtInfo();
        }
    }
</script>

<style scoped>
    .box{
        margin-top: 0.1rem;
        width: 100%;
        height: 2.5rem;
        position: relative;
    }
    .box img{
        width: 100%;
        height: 100%;
    }
    .new{
        position: absolute;
        bottom:0.13rem;
        left:0.45rem;
        color: white;
        font-size: 0.2rem;
    }
    .new p{
        font-size: 0.15rem;
    }
    .new span{
        font-size: 0.1rem;
    }
    .new img{
        width: 0.1rem;
        height: 0.1rem;
    }
</style>