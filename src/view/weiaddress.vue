<template>
    <div style="margin-top: 0rem">


        <van-nav-bar
                left-text="确认订单"
                left-arrow
                @click-left="onClickLeft"
        />
<!--        //支付接口-->

        <van-address-list
                v-model="chosenAddressId"
                :list="list"
                :add-button-text="addtext"
                @add="onAdd"
                @edit="onEdit"
                @click="showPopup"
        />

        <div class="goods" v-if="info" >
            <div class="goods_s" v-for="(n,h) in info" :key="h">

                <div class="my_img">
                    <img :src="n.pic" alt="">
                </div>
                <div class="desc">
                    <div class="desc_one">
                        {{n.name}}
                    </div>
                    <div class="desc_two">
                        颜色分类：建议S码
                    </div>
                    <div class="desc_three">
                        发货时间：付款后48小时内
                    </div>
                    <div class="desc_four">￥<span>{{n.price}}</span></div>
                </div>
            </div>
        </div>
<!--        <van-card-->
<!--                :num="goods.num"-->
<!--                :tag="goods.weibuy"-->
<!--                :price="goods.price"-->
<!--                :desc="goods.titlet"-->
<!--                :title="goods.title"-->
<!--                :thumb="goods.pic"-->
<!--                origin-price="10.00"-->
<!--        />-->

        <div class="mask" v-show="sign">
            <div class="mask_s not" @click="cancel">取消</div>
            <div class="mask_s yes" @click="sure">确认</div>
        </div>

        <div class="info_desc" style="width:99%;height: 2.45rem;border: 0.005rem solid #ccc">
            <p class="weiyun" ><span>运费</span><span class="yunfei_r">到付</span></p>
            <p class="weiyun" ><span>应付款</span><span class="price yunfei_r"  >￥{{totalPrice}}</span></p>
            <p class="say_want">留言备注：</p>
            <p style="text-align: center">
                <textarea rows="5" cols="50%" placeholder="可在此备注您需要的颜色尺码，颜色及其他需求，如不清楚可先联系商家咨询，避免误填"/>
            </p>
            <p class="weiyun" ><span>支付方式：</span></p>
            <p class="weiphotoyun" >
                <span >
                    <img src="../../public/assets/weiimg/iconfont_zhifubao.png" >>
                </span>
                <span class="weiapply" >支付宝支付</span>
                <span float="right"><input type="checkbox"  class="weiinput"></span>
            </p>
<!--        <p class="weiyun"><span>支付方式</span><span style="float: right">微信支付</span></p>-->
            <p class="weiphotoyun" >
                <span style="height:0.3rem;line-height: 0.3rem;">
                    <img src="../../public/assets/weiimg/iconfont_weixin.png"  >>
                </span>
                <span class="weiapply">微信支付</span>
                <span float="right">
                    <input type="checkbox"  class="weiinput">
                </span>
            </p>
<!--        <p class="weiyun"><span>支付方式</span><span style="float: right">微博支付</span></p>-->
            <p class="weiphotoyun">
                <span >
                    <img src="../../public/assets/weiimg/iconfont_weibo.png" >
                    </span><span class="weiapply">微博支付</span><span float="right">
                    <input type="checkbox"  class="weiinput">
                </span>
            </p>
            <p class="weiphotoyun last" ><input type="checkbox" style="width: 0.17rem;height: 0.17rem">我已阅读并同意全求购商品</p>
        </div>
<!--        <van-cell is-link @click="showPopup">展示弹出层</van-cell>-->


    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import { AddressList,NavBar  } from 'vant';
    // import { Popup } from 'vant';
    export default {
        name: "weiaddress",
        components:{
            // [AddressList.name]:AddressList,
            'van-address-list':AddressList,
            // [NavBar.name]:NavBar,
            'van-nav-bar':NavBar,
            // 'van-card':Card,
            // [Card.name]:Card

        },
        data() {
            return {
                weidATA:[],
                addtext:'提交订单',
                chosenAddressId: '1',
                order_id:null,
                show: false,
                info:null,
                myaddress_id:'请添加收货地址',
                totalPrice:null,
                list: [
                    {
                        id: '1',
                        name: '魏杰',
                        tel: '15771677386',
                        address: '南窑国际'
                    },
                    ],
                sign:false,
                goods: {
                    "weibuy":'未付款',
                    "id": '1',
                    "title": 'VALENTINO',
                    "titlet":"Rose同款 黑色徽标针织套衫",
                    "good_type":"现货",
                    "desc": '约250g，2根',
                    "price": 6330,
                    "color":"红色",
                    "num": 6,
                    "thumb": 'https://img.ofashion.com.cn/public/goods/sale_quote/20191109/861342/41445dc5bb7e22b6d/5949324783666610_60585327.jpg?x-oss-process=image/resize,w_750/format,webp',
                }
            }
        },

        methods: {
            showPopup() {
                this.show = true;

            },
            // 提交订单的点击事件
            onAdd() {
                // eslint-disable-next-line no-undef
                // this.Toast('提交');
                fetch("http://119.3.133.207:5000/order/add/",{
                            method:"POST",
                            headers:{
                                "Content-Type": "application/json"
                            },
                            body:JSON.stringify({"token": localStorage.getItem("token"),"address_id":12}),
                                                                                                            // this.add
                        }).then(res=>{
                            //res stream promise
                            res.json().then(data=>{
                                // 返回order_id
                                this.order_id = data.order_id
                                console.log(this.order_id)
                                console.log("9999")

                            })
                        })


                this.sign = true
            },
            // 返回事件
            onClickLeft(){
                this.$router.go("-1");

            },
                // 页面渲染
                async _getDesc(){
                    // let token = 'ZGVjNjNiMTk4MjllNDRjOGFhODhjYmIwNTMxOWM0OTg='
                    // ;
                    let res = await fetch('http://119.3.133.207:5000/car/submit/?token='+localStorage.getItem("token"))
                    // 119.3.133.207
                    // 10.36.172.136
                    let data = await res.json()
                    this.info = data.data;
                    this.info.forEach((good) =>{
                        this.totalPrice += Number(good.num)*Number(good.price)
                    })
                    // console.log(this.info)
                    // console.log(1212)
                },
            // 动态获取地址
            // http://119.3.133.207:5000/myaddress/
            async _getAddress(){

                let res = await fetch('http://119.3.133.207:5000/myaddress/'+localStorage.getItem("token")+'&'+'address=all')
                let data = await res.json()
                // this.myaddress_id = data.data;
                data.data.forEach((add_id) =>{

                    if(add_id.id==1){
                        this.myaddress_id=add_id.id
                        // id: '1',
                        //     name: '魏杰',
                        //     tel: '15771677386',
                        //     address: '陕西理工大学'
                        this.list[0].id = add_id.id
                        this.list[0].name = add_id.name;
                        this.list[0].tel =  add_id.phone;
                        // this.list[0].address = add_id.address
                    }
                })
                console.log(this.info)
                console.log(1212)
            },
            // 编辑地址点击事件  跳转到地址页
                onEdit() {
                    // eslint-disable-next-line no-undef
                    // Toast('编辑地址:' + index);
                    this.$router.replace("/address")


            },
            // 确认付款  支付接口
            sure(){
               // 支付接口
                fetch("http://119.3.133.207:5000/order/alipay/",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({"token": localStorage.getItem("token"),"order_id":this.order_id}),
                }).then(res=>{
                    //res stream promise
                    res.json().then(data=>{
                        console.log(data)
                        console.log("9999")
                        window.location.replace(data)
                    })
                })
                this.sign = false
            },
            // 取消付款
            cancel(){
                this.$router.replace("/myorder/daifukuan")

                this.sign = false
            }
        },
        computed: {
            ...mapGetters({
                add: 'goHome'
            })
        //
        },
        beforeMount() {
            this. _getDesc()
            this._getAddress()
        }
    }
</script>
<style scoped>
    .van-nav-bar__arrow+.van-nav-bar__text {
        margin-left: 97px;
        padding-left: 25px;
    }
    .goods{

        /*display: flex;*/
        background-color: rgb(249,249,249);
        padding: 0.1rem 0;
    }
    .goods_s{
        width: 100%;
        display: flex;
        justify-content: left;
    }
    .my_img{
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 0.1rem;
        /*margin-top: 1rem;*/
    }
    .my_img img{
        width: 100%;
        height: 100%;
    }
    .desc{
        padding-left: 0.2rem;
        text-align: left;
        width: 60%;
        white-space: pre-wrap;
        overflow: hidden;
        color: rgb(99,102,104);
        font-size: 0.13rem;
    }
    .desc_one{
        line-height: 0.18rem;
        color: rgb(99,102,104);
    }
    .desc_two{
        font-size: 0.12rem;
        color: rgb(193,193,193);
    }
    .desc_three{
        font-size: 0.12rem;
        color: rgb(193,193,193);
    }
    .desc_four{
        font-size: 0.14rem;
        color: rgb(245, 166, 35);
    }
    .info_desc{
        width: 98%;
        margin: 0.1rem auto;
    }
    .price{
        display: inline-block;
        color: rgb(236,104,53);
        position: absolute;
        right: 0.1rem;
    }
    .info_desc p{
        background-color: #fff;
        /*height: 0.2rem;*/
        /*line-height: 0.2rem;*/
    }
    .say_want{
        height: 0.5rem;
        line-height: 0.6rem;
    }
    /*.say_want.placeholder{*/
    /*    font-size: 0.12rem;*/
    /*}*/
    textarea{
        border-radius: 0.04rem;
        border: 0.005rem solid #dbdbdb;
        height: 0.4rem;
        margin-bottom: 0.1rem;
    }
    textarea::placeholder{
        font-size: 0.12rem!important;
    }
    .yunfei_r{
        float: right;
    }
    .weiphotoyun{
       border-bottom: 0.001rem solid #ECECEC;
        font-size: 0.14rem;
        width: 100%;
        height:0.4rem;
        line-height: 0.4rem;
        background-color: white;
    }
    .weiphotoyun img{
        height: 0.2rem;
        width: 0.2rem;
        margin-left: 0.1rem;
        float: left;
        margin-top: 0.08rem;
    }
    .mask{
        width: 99%;
        height: 2rem;
        background-color: #fff;
        border-radius: 0.05rem 0.05rem 0 0;
        /*border: 1px solid #95A6AA;*/
        box-shadow: 0px -3px 5px #666;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 0;
        z-index: 1000;
    }
    .mask_s{
        width: 0.6rem;
        background-color: #dbdbdb;
        margin-left: 0.1rem;
        height: 0.4rem;
        line-height: 0.4rem;text-align: center;
    }
    .van-address-list__add{
        width: 99%;
        margin: 0 auto;
    }
    .van-address-list{
        height: 0.88rem;
        /*padding-bottom:0 ;*/
        width: 95%;
        /*margin: 0 auto;*/
        margin-top: 1.04rem;
        /*border-radius: 0.05rem!important;*/
    }
    button .span{
        display: none;
    }
    .weiinput{
        width: 0.2rem;
        height: 0.2rem;
        content:"\2714";
        -webkit-appearance: radio;
        float: right;
        margin-top: 0.04rem;
        margin-right: 0.1rem;
    }
    .weiapply{
        float: left;
        margin-left: 0.2rem;
        font-size: 0.13rem;
        color:#898989
    }
    .weiyun{
        width: 100%;
        height: 0.25rem;
        background-color: white;
        line-height: 0.25rem
    }
    .weiyun span{
        display: inline-block;
        margin: 0.05rem 0.1rem;
    }
    .weiphotoyun{

    }

    .van-address-list[data-v-97520ccc]{

        margin: 0rem auto 0;

    }
</style>
