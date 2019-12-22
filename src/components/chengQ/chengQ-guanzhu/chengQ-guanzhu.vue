<template>
    <div>
        <div class="weidenglu" style="display: none">
            <p>请登录</p>
        </div>
        <div class="yidenglu" style="display: block">
            <div class="maijiaxiu-user">
                <img src="../../../assets/images/chengQ/maijiaxiu/tuijainuser.png" alt="">
                <span>jsycyoma</span>
                <p>10月21日  18:27</p>
            </div>
            <div class="tuijian-max-div">
                <a href="#/tuijianmjx">
                    <img class="tuijian-max-img" src="../../../assets/images/chengQ/guanzhu/tupian.jpg" alt="">
                    <h2 class="tuijian-max-h2">这届女生真是太太太穷了... ...真相扎心！！</h2>
                    <p class="tuijian-max-p">"女生真的真穷！"</p>
                </a>
                <div  class="tuijian-max-div1">
                    <span class="tuijian-max-span-left">1.8w</span>
                    <span class="tuijian-max-span-right">
                    <div class="tuijian-max-span-right1"><img src="../../../assets/images/chengQ/guanzhu/pinglun.png" alt=""><span>0</span></div>
                    <div class="tuijian-max-span-right1"><img src="../../../assets/images/chengQ/guanzhu/dianzan.png" alt=""><span>0</span></div>
                </span>
                </div>
            </div>

<!--            ----------------------------------------------------------->
            <div class="maijiaxiu-user">
                <img src="../../../assets/images/chengQ/maijiaxiu/tuijainuser.png" alt="">
                <span>jsycyoma</span>
                <p>10月21日  18:27</p>
            </div>
            <div class="tuijian-max-div">
                <a href="#/tuijianmjx">
                    <img class="tuijian-max-img" src="../../../assets/images/chengQ/guanzhu/tupian.jpg" alt="">
                    <h2 class="tuijian-max-h2">这届女生真是太太太穷了... ...真相扎心！！</h2>
                    <p class="tuijian-max-p">"女生真的真穷！"</p>
                </a>
                <div  class="tuijian-max-div1">
                    <span class="tuijian-max-span-left">1.8w</span>
                    <span class="tuijian-max-span-right">
                    <div class="tuijian-max-span-right1"><img src="../../../assets/images/chengQ/guanzhu/pinglun.png" alt=""><span>0</span></div>
                    <div class="tuijian-max-span-right1"><img src="../../../assets/images/chengQ/guanzhu/dianzan.png" alt=""><span>0</span></div>
                </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "chengQ-guanzhu"
    }
</script>

<style scoped>
    .yidenglu{
        font-weight: 100;
    }
    .maijiaxiu-user{
        text-align: left;
        height: 0.5rem;
        position: relative;
        background-color: white;
        font-weight: 100;
    }
    .maijiaxiu-user img{
        width: 10%;
        border-radius: 50%;
        position: absolute;
        left: 0.1rem;
        top: 0.08rem;
    }
    .maijiaxiu-user span{
        font-size: 0.16rem;
        position: absolute;
        left: 0.5rem;
        top: 0.15rem;
    }
    .maijiaxiu-user p{
        font-size: 0.16rem;
        float: right;
        padding-right: 0.1rem;
        padding-top: 0.1rem;
    }


    .tuijian-max-div{
        border-bottom: 0.01rem solid #999;
        background-color: white;
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
        padding: 0.05rem 0 0.1rem 4%;
        margin-bottom: 0.1rem;
    }
    .tuijian-max-span-left{

    }
    .tuijian-max-span-right{
        float: right;
        padding-right: 4%;
    }
    .tuijian-max-span-right1{
        display: inline-block;
        margin-left: 0.1rem;
        padding: 0.02rem 0.05rem;
        width: 0.4rem;
        border: 0.01rem solid #d9d9d9;
        border-radius: 0.05rem;
    }
    .tuijian-max-span-right1 img{
        width: 50%;
    }
    .tuijian-max-span-right1 span{
        float: right;
    }
</style>