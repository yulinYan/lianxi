<template>
    <div class="f-allorder-con">
        <div class="f-noorder" v-if="number == 0">
            <img src="assets/images/mine/search_result_none.png"/>
            <p>您还没有订单</p>
            <p>可以去逛逛有没有想买的</p>
        </div>
        <div v-else class="f-allorder-info">
            <div class="f-daifahuo-shop" :key="sid" v-for="(shop,sid) in AllorderInfo">
                <div class="f-daifahuo-title">
                    <div class="f-shop-info">
                        <img :src="shop.shop_pic"/>
                        <span>{{shop.shop_name}}</span>
                        <img src="../../../public/assets/images/mine/greater_number_use.png"/>
                    </div>
                    <div class="f-shop-dec">{{sa[sid]}}</div>
                </div>
                <div class="f-order-info">
                    <div class="f-product-img">
                        <img :src="shop.pic"/>
                    </div>
                    <div class="f-product-title">
                        {{shop.title}}
                    </div>
                    <div class="f-product-price">
                        ￥<span>{{shop.price}}</span>
                    </div>
                </div>
            </div>
        </div>
        <f-loading></f-loading>
    </div>
</template>

<script>
    import loading from "./loading";
    export default {
        name: "allorder",
        data(){
            return {
                AllorderInfo:"",
                number:0,
                flag:true,
                type:[],
                sa:[]
            }
        },
        components:{
          "f-loading":loading
        },
        methods:{
            _initAllOrderInfo(){
                let token = localStorage.getItem("token")
                fetch('http://119.3.133.207:5000/order/list?token='+token).then(res=>{
                    res.json().then(data => {
                        console.log(data)
                        this.AllorderInfo = data.data;
                        this.number = data.data.length,
                        this.AllorderInfo.forEach((item)=>{
                            this.type.push(item.type)
                        })
                        this._type();
                    })
                })
            },
            _type(){
                this.type.forEach((item)=>{
                    switch (item) {
                        case 0:
                            this.sa.push("未支付")
                            break;
                        case 1 :
                            this.sa.push("待发货")
                            break
                        case 2:
                            this.sa.push("待签收")
                            break;
                        case 3:
                            this.sa.push("待评价")
                            break;
                        case 4:
                            this.sa.push("退款未处理")
                            break;
                        case 5:
                            this.sa.push("已退款")
                            break;
                        default:
                    }
                })
            }
        },
        created() {
            this._initAllOrderInfo();
        },
    }
</script>

<style scoped>
    /*无订单状态*/
    .f-noorder{
        width:100%;
        height:2.8rem;
        text-align: center;
        padding-top:1.33rem;
        box-sizing: border-box;
        background-color: #eaeaea;
        color:#999999;
        margin-bottom: 0.1rem;
    }
    .f-noorder img{
        width:0.3rem;
        height:0.3rem;
        margin-bottom: 0.55rem;
    }
    .f-allorder-info{
        margin-bottom: 0.1rem;
    }
    .f-daifahuo-shop{
        background-color: white;
        margin-top: 0.05rem;
        padding:0 0.1rem;
        box-sizing: border-box;
    }
    .f-daifahuo-title{
        height:0.4rem;
        display: flex;
        line-height: 0.4rem;
    }
    .f-shop-info{
        width:80%;
    }
    .f-shop-info img:nth-child(1){
        width:0.3rem;
        height:0.3rem;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
    .f-shop-info img:last-child{
        width:0.14rem;
        height:0.14rem;
        vertical-align: middle;
        margin-left: 0.05rem;
    }
    .f-shop-dec{
        width:20%;
        color:red;
        text-align: center;
    }
    .f-order-info{
        display: flex;
        height:1rem;
    }
    .f-product-img{
        width:25%;
        display: flex;
        align-items: center;
    }
    .f-product-img img{
        width: 90%;
        height: 90%;
    }
    .f-product-title{
        width:55%;
        padding:0.3rem 0.05rem;
        box-sizing: border-box;
        overflow : hidden;
        text-overflow: ellipsis;
        /*display: -webkit-box;*/
        /*-webkit-line-clamp: 2;*/
        /*-webkit-box-orient: vertical;*/

    }
    .f-product-price{
        width:20%;
        color:red;
        display: flex;
        align-items: center;
    }
    .f-product-price span{
        font-size: 0.16rem;
    }
    .f-tixingfahuo{
        height:0.4rem;
        text-align: right;
        color:red;
    }
    .f-tixingfahuo span:last-child{
        display: inline-block;
        border:1px solid red;
        padding: 0.05rem 0.15rem;
        border-radius: 0.2rem;
    }
</style>