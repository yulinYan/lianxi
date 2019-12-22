<template>
    <div style="margin-top: -0.5rem">
        <van-nav-bar
                title=""
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="weijin">
            <div class="weijinleft"><img src="https://img.ofashion.com.cn/public/goods/sale_quote/20191109/861342/41445dc5bb7e22b6d/5949324783666610_60585327.jpg?x-oss-process=image/resize,w_750/format,webp"></div>
            <div class="weijinright">
                <h3>潮印奢品汇</h3>
                <h5>综合评分：4.8</h5><br>
                <span>粉丝 356</span>&nbsp;<span>成交 1085</span><span class="weibian">+关注</span>
            </div>
        </div>
        <van-notice-bar
                text="周五提前购，买贵返差价。都是专柜采购，正品保障，支持权威机构检测。为了商品安全，默认顺丰到付，有问题联系客服"
                left-icon="volume-o"
        />
        <div class="waterfall-wrapper">
            <ul class="left-waterfall waterfall-wrapper-ul" ref="left">
                <li class="item" v-for="(item, index) in leftItems" v-bind:key="index">
                    <div class="item1">
                        <img :src="item.userimg" alt="">
                        <span>{{item.username}}</span>
                    </div>
                    <div class="item2">
                        <img :src="item.img" alt="">
                    </div>
                    <p class="item-p">{{item.pinglun}}</p>
                    <div class="item-bttom">
                        <p>{{item.shangpin}}</p>
                        <a href="#">
                            <span>{{item.dianzan}}</span>
                            <img :src="item.dianzanimg" alt="">
                        </a>
                    </div>
                </li>
            </ul>
            <ul class="right-waterfall waterfall-wrapper-ul" ref="right">
                <li class="item" v-for="(item, index) in rightItems" v-bind:key="index">
                    <div class="item1">
                        <img :src="item.userimg" alt="">
                        <span>{{item.username}}</span>
                    </div>
                    <div class="item2">
                        <img :src="item.img" alt="">
                    </div>
                    <p class="item-p">{{item.pinglun}}</p>
                    <div class="item-bttom">
                        <p>{{item.shangpin}}</p>
                        <a href="#">
                            <span>{{item.dianzan}}</span>
                            <img :src="item.dianzanimg" alt="">
                        </a>
                    </div>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
    import { NavBar,NoticeBar} from 'vant';
    export default {
        name: "vweishopa",
        components:{
            [NavBar.name]:NavBar,
            [NoticeBar.name]:NoticeBar
        },
        data () {
            return {
                leftItems: [],
                rightItems: [],
                data: [
                    {
                        userimg: "assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username: "蜜汁尴尬1",
                        img: "assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun: "很好！",
                        shangpin: "LOUIS VUITTON",
                        dianzan: 8,
                        dianzanimg: "assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg: "assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username: "蜜汁尴尬2",
                        img: "assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun: "很好！很好！",
                        shangpin: "LOUIS VUITTON",
                        dianzan: 15,
                        dianzanimg: "assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg: "assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username: "蜜汁尴尬3",
                        img: "assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun: "很好！很好！很好！",
                        shangpin: "LOUIS VUITTON",
                        dianzan: 4,
                        dianzanimg: "assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg: "assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username: "蜜汁尴尬4",
                        img: "assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun: "很好！很好！很好！很好！很好！很好！很好！",
                        shangpin: "LOUIS VUITTON",
                        dianzan: 9,
                        dianzanimg: "assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg: "assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username: "蜜汁尴尬1",
                        img: "assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun: "很好！",
                        shangpin: "LOUIS VUITTON",
                        dianzan: 14,
                        dianzanimg: "assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 140,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 100,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 160,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                ]
            }
        },
        mounted () {
            // TODO GET DISPLAY_DATA
            this.updateWaterfall()
        },
        methods:{
            onClickLeft(){
                this.$router.go("-1")
            },
            updateWaterfall () {
                const leftHeight = this.$refs.left.clientHeight
                const rightHeight = this.$refs.right.clientHeight
                let item = this.data.shift()
                // console.log(leftHeight)
                // console.log(rightHeight)
                if (item == null) {
                    return
                }
                if (leftHeight <= rightHeight) {
                    this.leftItems.push(item)
                }
                else {
                    this.rightItems.push(item)
                }
                this.$nextTick(function () {
                    this.updateWaterfall()
                })
            }
        }
    }
</script>

<style scoped>
    .weijin{
        width: 100%;
        display: flex;
        background-color: #2c3e50;
    }
    .weijinleft{
        width: 30%;
        text-align: center;
    }
    .weijinleft img{
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 auto;
        border-radius:0.8rem;
        margin-top: 0.1rem;
    }
    .weijinright{
        width: 70%;
        font-size: 0.14rem;
        color: white;
    }
    .weibian{
        float: right;
        display: inline-block;
        width: 0.6rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        margin-right: 0.1rem;
        color: white;

        background-color: orange;
    }
    .van-notice-bar__play--infinite {
        background-color: orange;
        color: white;
    }
    .waterfall-wrapper {
        width: 96%;
        margin: 0 auto;
    }
    .waterfall-wrapper-ul {
        width: 50%;
    }
    .left-waterfall {
        float: left;
    }
    .right-waterfall {
        float: right;
    }
    .item {
        width: 95%;
        background-color: white;
        margin: 10px;
    }
    .item1{
        position: relative;
    }
    .item1 span{
        position: absolute;
        top: 0.04rem;
    }
    .item1 img{
        width: 15%;
        border-radius: 50%;
    }
    .item2 img{
        width: 100%;
        display: block;
    }
    .item-p{
        padding: 0.05rem;
    }
    .item-bttom{
        text-align: right;
        position: relative;
        /*padding: 0.05rem;*/
    }
    .item-bttom p{
        display: inline-block;
        font-size: 14px;
        float: left;
        padding-top:0.05rem;
        padding-left:0.05rem;
    }
    .item-bttom span{
        position: absolute;
        top: 0.05rem;
        right: 25px;
        font-size: 14px;
    }
    .item-bttom img{
        width: 13%;
        display: inline-block;
    }
</style>
