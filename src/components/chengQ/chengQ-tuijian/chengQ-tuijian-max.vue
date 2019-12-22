<template>
    <div class="tuijian-max-div">
        <ul>
            <li v-for="(item, index) in userInfo" v-bind:key="index">
                <h3 class="tuijian-min-h3">。。。</h3>
                <a :href="'#/tuijianmjx?id='+index">
                    <img class="tuijian-max-img" :src="item.pic" alt="">
                    <h2 class="tuijian-max-h2">{{item.title}}</h2>
                    <p class="tuijian-max-p">{{item.info}}</p>
                </a>
                <div class="tuijian-max-div1">
                    <span class="tuijian-max-span-left">{{item.name}}</span>
                    <span class="tuijian-max-span-right"><img src="../../../assets/images/chengQ/tuijian/guankan.png" alt="">{{item.num}}w</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "chengQ-tuijian-max",
        data(){
            return{
                userInfo:""
            }
        },
        methods:{
            haha(){
                fetch('http://119.3.133.207:5000/circle/recommend/')
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
    .tuijian-max-div{
        background-color: white;
    }
    li{
        border-bottom: 0.01rem solid #999;
    }
    .tuijian-min-h3{
        width: 96%;
        margin: 0 auto;
        text-align: right;
        padding-right: 4%;
        padding-bottom: 0.05rem;
        font-size: 0.12rem;
        font-weight: 400;
        height: 0.2rem;
    }
    .tuijian-max-img{
        width: 96%;
        margin: 0 auto;
    }
    .tuijian-max-h2{
        width: 96%;
        margin: 0 auto;
        text-align: left;
        padding-left: 4%;
        font-size: 0.16rem;
        font-weight: 600;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 1; /** 显示的行数 **/
        overflow: hidden;  /** 隐藏超出的内容 **/
    }
    .tuijian-max-p{
        width: 96%;
        margin: 0 auto;
        text-align: left;
        padding-left: 4%;
        color: #666666;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden;  /** 隐藏超出的内容 **/
    }
    .tuijian-max-div1{
        width: 96%;
        margin: 0 auto;
        text-align: left;
        color: #666666;
        padding: 0.05rem 0 0.1rem 0.1rem;
    }
    .tuijian-max-span-left{

    }
    .tuijian-max-span-right{
        float: right;
        /*margin-right: 0.2rem;*/
    }
    .tuijian-max-span-right img{
        width: 25%;
    }
</style>