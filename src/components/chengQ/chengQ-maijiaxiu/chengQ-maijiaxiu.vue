<template>
    <div style="margin-bottom: 50px">
        <img class="maijiaxiumax" src="../../../assets/images/chengQ/maijiaxiu/tuijianmax.png" alt="">
        <ul>
            <li class="maijiaxiu-li" v-for="(item,index) in userInfo" :key="index">
                <a href="#/maijiaxiu">
                    <div class="maijiaxiu-user">
                        <img :src="item.user_head_img" alt="">
                        <span>{{item.user_name}}</span>
                    </div>
                    <div class="maijiaxiu-img">
                        <img :src="item.show_img" alt="">
                    </div>
                    <div class="maijiaxiu-p">
                        <p>{{item.show_comment}}</p>
                    </div>
                    <div class="maijiaxiu-bottom">
                        <h3>{{item.item}}</h3>
                        <P>{{item.show_num}}<span><img src="../../../assets/images/chengQ/maijiaxiu/dianzan.png" alt=""></span></P>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "chengQ-maijiaxiu",
        data(){
            return{
                userInfo:""
            }
        },
        methods:{
            haha(){
                fetch('http://119.3.133.207/circle/show/')
                    .then(res=>{
                        return  res.json();
                    })
                    .then(data=>{
                        // console.log(data);
                        this.userInfo=data.data
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
        },
        created() {
            this.haha()
        }
    }
</script>

<style scoped>
    .maijiaxiumax{
        width: 100%;
    }
    .maijiaxiu-li{
        display: inline-block;
        width: 48%;
        margin: 1%;
        background-color: white;
    }
    .maijiaxiu-user{
        text-align: left;
        position: relative;
    }
    .maijiaxiu-user img{
        width: 15%;
        border-radius: 50%;
    }
    .maijiaxiu-user span{
        font-size: 0.16rem;
        line-height: 100%;
        position: absolute;
        top: 0.08rem;
    }
    .maijiaxiu-img{

    }
    .maijiaxiu-img img{
        width: 100%;
        /*heigit: 50px;*/
    }
    .maijiaxiu-p{

    }
    .maijiaxiu-p p{
        font-size: 0.13rem;
        text-align: left;
        padding: 0.05rem 0;
        line-height: 0.25rem;
        padding-left: 0.05rem;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 1; /** 显示的行数 **/
        overflow: hidden;  /** 隐藏超出的内容 **/
    }
    .maijiaxiu-bottom{
        text-align: left;
        padding-bottom: 0.05rem;
    }
    .maijiaxiu-bottom h3{
        font-size: 0.16rem;
        display: inline-block;
        padding-left: 0.05rem;
    }
    .maijiaxiu-bottom p{
        display: inline-block;
        float: right;
    }
    .maijiaxiu-bottom p span{
        padding-top: 0.05rem;
        width: 10%;
    }
</style>