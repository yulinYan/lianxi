<template>
    <div>
        <div class="max-xiangqing-header">
            <a @click="toback"><span class="xiangqing-header-left">&lt;</span></a>
            <p>{{msg}}</p>
            <a href="#"><img src="../../../assets/images/chengQ/maijiaxiu/fenxiang.png" alt=""></a>
        </div>
        <div class="max-xiangqing-div">
            <img class="max-xiangqing-img" :src="userInfo.pic" alt="">
        </div>
        <div class="maijiaxiu-user">
            <img :src="userInfo.h_pic" alt="">
            <div style="display: inline-block">
                <span>{{userInfo.name}}</span>
                <h4>{{userInfo.data}}</h4>
            </div>
            <button>关注</button>
        </div>
        <div class="max-xiangqing-neirong">
            <div v-html="userInfo.content" id="aaa"></div>
        </div>
        <div class="max-xiangqing-pinglun">
            <p style="padding-left: 0.1rem">最新评论<span>0</span></p>
            <h3></h3>
        </div>
        <div class="max-xiangqing-bottom">
            <input type="text" placeholder="请输入评论...">
            <button>发送</button>
            <img class="max-xiangqing-bottom-img1" src="../../../assets/images/chengQ/tuijian/xihuan.png" alt="">
            <img class="max-xiangqing-bottom-img2" src="../../../assets/images/chengQ/tuijian/dianzan2.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "chengQ-tuijian-max-xiangqing",
        data () {
            return{
                userInfo:"",
                msg:""
            }
        },
        methods:{
            toback(){
                this.$router.go(-1);
            },
            haha(){
                let id = Number(this.$route.query.id)+1
                console.log(id)
                fetch('http://119.3.133.207:5000/circle/recommend_details?circle_id='+id)
                    .then(res=>{
                        return  res.json();
                    })
                    .then(data=>{
                        console.log(data);
                        this.userInfo=data.data
                        this.msg=data.msg
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
        },
        created() {
            // this.id = this.$route.query.id
            // console.log(123)
            this.haha()
        },
        beforeMount() {
            // console.log(456)
        }
    }
</script>

<style>
    .max-xiangqing-neirong{
        background-color: white;
    }
    .max-xiangqing-neirong p{
        padding: 0 0.1rem;
    }
    .max-xiangqing-neirong img{
        width: 100%;
        margin: 0.05rem auto;

    }
    .maijiaxiu-user h4{
        position: absolute;
        top: 0.3rem;
        left: 0.5rem;
    }
    .max-xiangqing-header{
        width: 100%;
        position: fixed;
        top: 0;
        padding: 0.1rem 0;
        background-color: white;
    }
    .max-xiangqing-header span{
        padding-left: 0.1rem;
        font-size: 0.2rem;
    }
    .max-xiangqing-header p{
        display: inline-block;
        margin-left: 1.5rem;
        font-size: 0.2rem;
    }
    .max-xiangqing-header img{
        float: right;
        padding-right: 0.1rem;
    }
    .max-xiangqing-img{
        width: 100%;
        display: block;
    }
    .maijiaxiu-user{
        text-align: left;
        margin: 0 auto;
        height: 0.5rem;
        position: relative;
        background-color: white;
    }
    .maijiaxiu-user img{
        width: 10%;
        border-radius: 50%;
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
    }
    .maijiaxiu-user span{
        font-size: 0.16rem;
        position: absolute;
        left: 0.5rem;
        top: 0.13rem;
    }
    .maijiaxiu-user button{
        font-size: 0.16rem;
        float: right;
        margin-right: 0.1rem;
        padding: 0.03rem 0.05rem;
        margin-top: 0.1rem;
        background-color: rgb(225 132 17);
        border-radius: 0.8rem;
    }
    .max-xiangqing-pinglun{
        padding-bottom: 0.5rem;
    }
/*最新评论*/
    .max-xiangqing-bottom{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: white;
    }
    .max-xiangqing-bottom input{
        width: 60%;
        height: 0.25rem;
        margin: 0.1rem 0;
        border: 0;
        border-radius: 0.1rem;
        padding-left: 20px;
        background-color: rgb(235 235 235);
    }
    .max-xiangqing-bottom button{
        height: 0.25rem;
        margin: 0.1rem 0;
        border: 0;
        border-radius: 0.05rem;
        padding: 0 0.1rem;
        background-color: rgb(225 132 17);
        color: white;
        font-weight: 100;
    }
    .max-xiangqing-bottom-img1{
        position: absolute;
        top: 0.1rem;
        right: 0.4rem;
        height: 60%;
    }
    .max-xiangqing-bottom-img2{
        position: absolute;
        top: 0.1rem;
        right: 0.05rem;
        height: 60%;
    }
</style>