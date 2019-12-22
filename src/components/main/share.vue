<template>
   <div>
       <div class="mainshare">
           <header class="f-share-header">
               <div class="f-share-goback" @click="toback"><img src="../../../public/assets/images/mine/icon_brand_activity_back.png"/></div>
               <div class="f-share-title">邀请有礼</div>
               <div class="f-share-enjoy" @click="show"><img src="../../../public/assets/images/mine/icon_brand_activity_share.png"/></div>
           </header>
           <div class="top">
               <h3>邀请好友&nbsp;&nbsp;享专属礼遇</h3>
               <p>每成功邀请相应数量的好友注册，即可获得不同额度的平台通用优惠卷。邀请超过16位好友，将不再获得更多的优惠卷。<a href="#">查看详细规则</a></p>
           </div>
           <div class="aware">
               <div class="line"> </div>
               <ul>
                   <li>
                       <div>
                           <p>1位好友注册</p>
                           <span class="step">1</span><br>
                           <img src="assets/images/num.png">
                           <span class="money">￥100</span>
                       </div>
                   </li>
                   <li>
                       <div>
                           <p>3位好友注册</p>
                           <span class="step">2</span><br>
                           <img src="assets/images/num.png">
                           <span  class="money">￥200</span>
                       </div>
                   </li>
                   <li>
                       <div>
                           <p>5位好友注册</p>
                           <span class="step">3</span><br>
                           <img src="assets/images/num.png">
                           <span  class="money">￥300</span>
                       </div>
                   </li>
                   <li>
                       <div>
                           <p>16位好友注册</p>
                           <span class="step">4</span><br>
                           <img src="assets/images/num.png">
                           <span  class="money">￥500</span>
                       </div>
                   </li>
               </ul>
           </div>
           <p class="sharereward">好友可获得<span class="reward">300元</span>优惠卷</p>
           <div class="jump" @click="show">立即邀请好友，领平台通用优惠券</div>
       </div>
       <div class="shandow" v-if="flag">
               <ul>
                   <li>
                       <div>
                           <img src="assets/images/mine/share1.png"><br>
                           <span>微信好友</span>
                       </div>
                   </li>
                   <li>
                       <div>
                           <img src="assets/images/mine/share2.png"><br>
                           <span>微信朋友圈</span>
                       </div>
                   </li>
                   <li>
                       <div>
                           <img src="assets/images/mine/share3.png"><br>
                           <span>新浪微博</span>
                       </div>
                   </li>
                   <li>
                       <div>
                           <img src="assets/images/mine/share4.png"><br>
                           <span>复制链接</span>
                       </div>
                   </li>
                   <li>
                       <div>
                           <img src="assets/images/mine/share5.png"><br>
                           <span>二维码</span>
                       </div>
                   </li>
               </ul>
           <div class="btn" @click="close">取消</div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "share",
        data(){
          return{
              flag:false
          }
        },
        methods:{
            show(){
                this.flag = true
            },
            close(){
                this.flag = false
            },
            toback(){
                this.$router.push('/main/mine');
            },
        },
    }
</script>

<style scoped>
    .f-share-header{
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        position: fixed;
        top:0;
        z-index:1;
        background-color: #FBF8FC;
        border-bottom: 1px solid #DDDDDD;
        color:#c6bca1;
    }
    .f-share-goback,.f-share-enjoy{
        height:0.5rem;
        width:20%;
        display: flex;
        align-items: center;
    }
    .f-share-goback img{
        width:0.13rem;
        height:0.23rem;
        margin-left: 0.1rem;
    }
    .f-share-enjoy img{
        width:0.2rem;
        height:0.2rem;
        margin-left: 0.3rem;
    }
    .f-share-title{
        width:60%;
        font-size: 0.18rem;
    }
    .top{
        width: 100%;
        height: 1.8rem;
        color: white;
        background-image: url("../../../public/assets/images/bgc.jpg");
        background-repeat:no-repeat;
        background-size:cover;
        padding-left: 0.15rem;
        padding-top: 0.4rem;
        box-sizing: border-box;
    }
    .top h3{
        font-size: 0.2rem;
        font-weight: bold;
        padding-bottom: 0.1rem;
    }
    .top a{
        color: white;
        text-decoration: underline;
    }
    /*.top p{*/
    /*    text-indent: 2em;*/
    /*}*/
    .aware{
        position: relative;
        overflow: auto;
        text-align: center;
    }
    .aware::-webkit-scrollbar{
        display: none;
    }
    .aware ul {
        white-space: nowrap;
        padding: 0 0.1rem;
        margin-top: 0.2rem;
        margin-bottom: 0.3rem;
    }
    .aware ul li {
        display: inline-block;
        margin: 0.1rem;
    }
    .aware ul li img{
        width: 1.22rem;
    }
    .aware ul li div{
        position: relative;
        text-align: center;
    }
    .money{
        position: absolute;
        left: 0.4rem;
        top:0.94rem;
        color: #EE7F35;
        font-size: 0.16rem;
    }
    .aware ul li p{
        color:#999999;
        margin-bottom: 0.1rem;
    }
    .sharereward{
       text-align: center;
    }
    .step{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        line-height: 0.2rem;
        text-align: center;
        color:#fff ;
        background-color:#AE3E24 ;
        margin-bottom: 0.1rem;
    }
    .line{
        height: 0.02rem;
        width: 4.27rem;
        background-color: #AE3E24;
        position: absolute;
        left: 0.82rem;
        top: 0.68rem;
    }
    .reward{
        color:#AE3E24;
    }
    .jump{
        width:3.35rem;
        height: 0.4rem;
        text-align: center;
        background-color:#EE7F35 ;
        color: white;
        line-height: 0.4rem;
        position: fixed;
        bottom: 0.7rem;
        left:50%;
        transform: translateX(-50%);
        border-radius: 5px;
        font-size: 0.16rem;
    }
    .mainshare{
        position: relative;
    }
    .shandow{
        background-color: rgba(5,5,5,0.6);
        position: fixed;
        top:0;
        width: 100%;
        height: 100%;
    }
    .shandow ul{
        position: absolute;
        bottom: 1rem;
        left: 0;
        width: 100%;
        color:white;
        display: flex;
        flex-wrap: wrap;
    }
    .shandow ul li{
        width: 33%;
        margin:0.1rem 0;
    }
    .shandow ul li img{
        width: 0.55rem;
        height:0.55rem;
        margin:0.1rem 0;
    }
    .shandow ul li div{
        text-align: center;
    }
    .btn{
        width:3.35rem;
        height: 0.4rem;
        text-align: center;
        border: 0.01rem solid rgba(256,256,256,0.5);
        color: white;
        line-height: 0.4rem;
        position: absolute;
        top: 6rem;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 0.05rem;
        font-size: 0.16rem;
    }
</style>