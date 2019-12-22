<template>
    <div class="swiper-container swiperl">
        <div class="swiper-wrapper" v-if="data">
            <div class="swiper-slide ibanner" :key="index" v-for="(item,index) in data ">
                <img :src="item.bg_img.split('\'')[1]">
                <p class="part1">{{item.name}}</p>
                <p class="part2">{{item.title}}</p>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "homeswiper",
        props: ["data"],
        methods:{
            _initSwiper(){
                /*eslint-disable no-new*/
                new Swiper('.swiperl',{
                    pagination:{
                        el:".swiper-pagination",
                    },
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                })
            }
        },
        mounted(){
            this._initSwiper()
        },
    }
</script>


<style>
    @import "../../../node_modules/swiper/css/swiper.css";
    .ibanner {
        width:3.75rem;
        height:1.875rem;
        position: relative;
    }
    .ibanner img{
        width: 100%;
        height: 100%;
    }
    .part1{
        color: white;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.4rem;
        font-size: 0.2rem;
        white-space:nowrap;
    }
    .part2{
        color: white;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.2rem;
        font-size: 0.16rem;
        white-space:nowrap;
    }
    .swiperl .swiper-pagination-bullet-active{
        background-color: #F8F8F8;
    }
    .swiperl .swiper-pagination-bullet{
        background-color: orangered;
    }
</style>