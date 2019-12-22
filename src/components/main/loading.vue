<template>
    <!--        加载中popup-->
    <div class="f-popup-loading" v-if="popshow" @touchmove.prevent>
        <div class="f-loading" >
            <img :src='img[ind]'/>
            <p>加载中...</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading",
        data(){
            return {
                popshow:true,
                ind:0,
                img:[
                    "assets/images/mine/progress_hud_animated_icon_0.png",
                    "assets/images/mine/progress_hud_animated_icon_1.png",
                    "assets/images/mine/progress_hud_animated_icon_2.png",
                    "assets/images/mine/progress_hud_animated_icon_3.png",
                    "assets/images/mine/progress_hud_animated_icon_4.png",
                    "assets/images/mine/progress_hud_animated_icon_5.png",
                    "assets/images/mine/progress_hud_animated_icon_6.png",
                    "assets/images/mine/progress_hud_animated_icon_7.png",
                    "assets/images/mine/progress_hud_animated_icon_8.png",
                    "assets/images/mine/progress_hud_animated_icon_9.png",
                    "assets/images/mine/progress_hud_animated_icon_10.png",
                    "assets/images/mine/progress_hud_animated_icon_11.png",
                    "assets/images/mine/progress_hud_animated_icon_12.png",
                    "assets/images/mine/progress_hud_animated_icon_13.png",
                    "assets/images/mine/progress_hud_animated_icon_14.png",
                    "assets/images/mine/progress_hud_animated_icon_15.png",
                ]

            }
        },
        methods:{
            _loading(){
                let num = 0;
                let time = setInterval(()=>{
                    num++
                    this.ind =num
                    if(this.ind == 15){
                        clearInterval(time)
                        this.popshow=false
                    }
                },50)
            }
        },
        created() {
            this._loading();
        },
    }
</script>

<style scoped>
    .f-popup-loading{
        width:100%;
        height:100%;
        position: fixed;
        background-color: rgba(0,0,0,0.5);
        top: 0.85rem;
        text-align: center;
        z-index: 2;
    }
    .f-loading{
        width:50%;
        height:1rem;
        margin:0 auto;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 30%;
        left: 1rem;
        padding-top:0.16rem;
        box-sizing: border-box;
    }
    .f-loading img{
        width:0.5rem;
        height:0.5rem;
    }
</style>