<template>
    <section class="f">
    <header class="pheader" @click="tochangeinfo"  v-if="userInfo" >
        <img class="userpic" v-if="userInfo" :src='userInfo.data.head_img'/>
        <span class="user-name">{{userInfo.data.name}}</span>
        <img src="../../../public/assets/images/mine/greater_number_use.png" class="user-arrow">
    </header>
    <div class="order">
        <router-link class="order-title" to="/myorder/allorder">
            <div class="my-order">我的订单</div>
            <div class="more-order">
                <img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow"/>
            </div>
        </router-link>
        <div class="order-tab">
            <ul>
                <a href="#/myorder/daifukuan">
                    <li>
                        <img src="../../../public/assets/images/mine/fu_kuan.png"/>
                        <p>待付款</p>
                    </li>
                </a>
                <a href="#/myorder/daifahuo">
                    <li>
                        <img src="../../../public/assets/images/mine/fa_huo.png"/>
                        <p>待发货</p>
                    </li>
                </a>
                <a href="#/myorder/daishouhuo">
                    <li>
                        <img src="../../../public/assets/images/mine/shou_huo.png"/>
                        <p>待收货</p>
                    </li>
                </a>
                <a href="#/myorder/daipingjia">
                    <li>
                        <img src="../../../public/assets/images/mine/ping_jia.png"/>
                        <p>待评价</p>
                    </li>
                </a>
                <a href="#/myorder/tuikuan">
                    <li>
                        <img src="../../../public/assets/images/mine/tui_kuan.png"/>
                        <p>退款</p>
                    </li>
                </a>

            </ul>
        </div>
    </div>
    <div class="items">
        <ul>
            <li @click="toshare">
                邀请好友<span class="coupon">最高可得500元优惠券</span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                发现好店<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                我的关注<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                我的收藏<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                我的买家秀<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                我的优惠券<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                我的常用尺码<span class="size">去完善</span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                购物帮助<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                经营信息<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                设置<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
            <li>
                意见反馈<img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow">
            </li>
        </ul>
    </div>
    <div class="server">
        <img src="../../../public/assets/images/mine/common_little_helper.png"/>
        <a :href="'tel:'+tel"><img src="../../../public/assets/images/mine/common_calls.png"/></a>
    </div>
</section>
</template>

<script>
    import {Toast} from 'vant'
    export default {
        name: "personal",
        data(){
          return{
              userInfo: "",
              tel:"18578218917"
          }
        },
        methods:{
            tochangeinfo(){
                this.$router.push('/changeinfo')
            },
            toshare(){
                this.$router.push('/share')
            },
            // 初始用户信息
            _initUserInfo() {
                let token = localStorage.getItem("token");
                fetch('http://119.3.133.207:5000/user/info/?token=' + token).then(res => {
                    res.json().then(data => {
                        if(data.code == 1){
                            Toast(data.msg)
                        }else{
                            console.log(data)
                            this.userInfo = data;
                            // console.log(this.userInfo)
                        }
                    })
                })
            }
        },
        created() {
            this._initUserInfo();
        },
    }
</script>

<style scoped>
    .f{
        background-color: white;
    }
    .f .pheader{
        padding:0rem 0.1rem 0rem 0rem;
        border-bottom: 0.1rem solid rgb(238,238,238);
        box-sizing: border-box;
        width: 100%;
        background: url("../../../public/assets/images/mine/personal_center_bg.png") no-repeat;
        background-size: 100% 100%;
    }
    .f .userpic{
        width:0.8rem;
        height: 0.8rem;
        margin: 0.2rem 0.2rem;
        border-radius: 50%;
    }
    .f .user-name{
        display: inline-block;
        font-size: 0.2rem;
        margin-top: 0.5rem;
        vertical-align: top;
    }
    .f .user-arrow{
        width:0.14rem;
        height:0.14rem;
        float: right;
        margin-top: 0.54rem;
    }
    .f .order-title{
        display: flex;
        justify-content: space-between;
        margin: 0rem 0.1rem;
        padding:0.1rem 0rem;
        border-bottom: 1px solid #dcdcdc;
    }
    .f .order{
        border-bottom: 0.1rem solid rgb(238,238,238);
    }
    .f .order-tab ul{
        display: flex;
        padding:0.15rem 0.075rem;
    }
    .f .order-tab a{
        display: inline-block;
        flex: 1;
        text-align: center;
    }
    .f .order-tab img{
        width:0.23rem;
        height:0.23rem;
    }
    .f .asset-tab>div{
        width: 50%;
        text-align: center;
        margin: 0.15rem 0;
    }
    .f .asset-tab>div:nth-child(1){
        border-right: 1px solid rgb(238,238,238);
    }
    .f .items{
        padding:0 0.1rem;
        font-size: 0.14rem;
        text-align:left;
    }
    .f .items .coupon{
        line-height: 0.14rem;
        font-size: 0.12rem;
        color: #f88e42;
        margin-left: 1.64rem;
    }
    .f .items .size{
        line-height: 0.14rem;
        font-size: 0.12rem;
        color: #9b9b9b;
        margin-left: 2.2rem;
    }
    .f .arrow{
        width:0.14rem;
        height:0.14rem;
        float: right;
        margin-top: 0.05rem;
    }
    .f .items li{
        padding: 0.15rem 0rem;
        border-bottom:1px solid rgb(238,238,238);
    }
    .f .server{
        padding: 0rem 0.3rem 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    .f .server img{
        width: 1.5rem;
        height:0.44rem;
        margin:0.1rem 0rem;
    }
</style>