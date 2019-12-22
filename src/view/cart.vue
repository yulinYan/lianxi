<template>
    <div style="margin-top: -0.5rem">
        <van-nav-bar
                title="购物车"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="admi" id="admini" @click="slid_show">管理</div>
        <div class="edit" v-show="flag1">
<!--            v-show="flag1"-->
            <div class="edit_clear">闪电清理</div>
            <div class="edit_r">
                <span class="move_collection">移入收藏夹</span>
                <span class="del" @click="y_del_message">删除</span>
            </div>
        </div>
<!--        为空显示-->
        <div class="free"  v-show="em">
            <router-link to="/main/home">
                <span class="free-s">购物车还是空的</span>
                <span class="go_see">去逛逛</span>
            </router-link>
        </div>

<!--        购物车-->
        <div class="y_cart" >
            <div class="y_empty" ></div>
            <div class="y_empty2" v-show="flag1"></div>
            <div v-if="info">
                <div class="y_shop"  v-for="(shop,indexs) in info" :key="indexs">
<!--                店铺头部-->
                <div class="y_shop_title">
                    <div class="y_title">
                        <div class="one">
                            <input class="input shop_input" type="checkbox" @click="shop_checked($event,shop)" >
                            <div v-show="flag" class="mask_inp"></div>
                        </div>
                        <div class="two">
                            <img :src="shop.shoppic" alt="">
<!--                            ../assets/images/cart1.png-->
                            <div class="y_title_name">{{shop.shopname}}</div>
                        </div>
                        <div class="three">领劵</div>
                    </div>
                </div>
<!--                商品-->
                <div class="y_goods">
                    <!--                        商品-->
                    <div class="y_goods_box" v-for="(goods,indexp) in shop.good" :key="indexp">
                        <div class="p_one">
                            <input class="input product_check" type="checkbox" @click="goods_checked($event,shop,goods)" >
                            <div v-show="flag" class="p_mask_inp"></div>
                        </div>
                        <div class="p_two">
                            <img :src="goods.pic" alt="">
                            <!--                            ../assets/images/cart1.png-->
                        </div>
                        <div class="p_three">
                            <div class="descAdv">{{goods.name}}</div>
                            <!--                            衣柜香薰包去异味芳香持久香包衣橱衣物固体清香熏蜡片香味神器-->
                            <div class="taste">{{goods.color[2]}}{{goods.color[3]}}</div>
                            <!--                            茉莉（醇厚鲜浓）-->
                            <div class="p_three_bottom">
                                <div class="y_pri">￥<span>{{goods.price}}</span></div>
                                <!--                                计算那块-->
                                <div class="add">
                                    <span class="y_add" @click="minNum(goods,indexp)">-</span>
                                    <span class="y_num">{{goods.num}}</span>
                                    <span class="y_min" @click="addNum(goods,index)">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <!-- 脚部-----------------------脚部-------------------------->
                <footer>
                    <div class="footer">
                        <div class="check_all">
                            <div><input type="checkbox" class="input all_mychecked" @click="all_checked">全选</div>
                            <div class="sum">
                                <div>总计：<span>{{totalNum}}</span><span @click="go_buy" class="go_buy">结算</span></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
<!--            <loading v-else></loading>-->
            <!-- 脚部-----------------------脚部-------------------------->
        </div>
<!--        猜你喜欢-->
		<div class="your_love">
            <div class="your_love_title">
                <img src="../assets/images/cart/cart2.jpg" alt="">
            </div>
            <div class="love_product_boss">
                <a :href="'#/detail'+n.pid" class="love_product" :key="index" v-for="(n,index) in list" >
                    <div class="img">
                        <img :src="n.pic" alt="">
                    </div>
                    <div class="messiage">
                        <p class="desc">{{n.desc}}</p>
                        <p class="price">￥<span>{{n.price}}</span></p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    import { mapGetters } from 'vuex';
    import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast ,NavBar,Button} from 'vant';
    // import loading from "../components/common/loading";
    export default {
        name: "cart",
        components: {
            [Card.name]: Card,
            [Button.name]:Button,
            [NavBar.name]: NavBar,
            [Checkbox.name]: Checkbox,
            [SubmitBar.name]: SubmitBar,
            [CheckboxGroup.name]: CheckboxGroup,
            // loading
        },
        computed: {
            ...mapGetters({
                cartInfo: 'GETCART'
            }),
            submitBarText() {
                const count = this.checkedGoods.length;
                return '结算' + (count ? `(${count})` : '');
            },
            totalPrice() {
                // eslint-disable-next-line no-undef
                return this.weidATA.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.audit*100 : 0), 0);
            },
        },
        data() {
            return {
                url:"119.3.133.207",
                token:null,
                weidATA:[],
                checkedGoods: ['1', '2', '3'],
				list:[
                    {"pid":"001",
                        "pic":"assets/images/cart/cart5.webp",
                        "desc":"RedMi K20 Pro 尊享版 K20 Pro",
                        "price":"1669",
                        "detail_1":"「立即预约中，11月11日6GB+128GB闪降200元，到手价仅需1399元」",
                        "detail_2":"6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，\n" +
                            "                    液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁\n" +
                            "                    大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速"
                    },{
                        "pid":"002",
                        "pic":"assets/images/cart/cart6.webp",
                        "desc":"RedMi K20 Pro 尊享版 K20 Pro",
                        "price":"2669",
                        "detail_1":"「立即预约中，11月11日6GB+128GB闪降200元，到手价仅需1399元」",
                        "detail_2":"6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，\n" +
                            "                    液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁\n" +
                            "                    大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速"
                    },
                    {
                        "pid":"003",
                        "pic":"assets/images/cart/cart3.webp",
                        "desc":"RedMi K20 Pro 尊享版 K20 Pro",
                        "price":"3669",
                        "detail_1":"「立即预约中，11月11日6GB+128GB闪降200元，到手价仅需1399元」",
                        "detail_2":"6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，\n" +
                            "                    液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁\n" +
                            "                    大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速"
                    },
                    {
                        "pid":"004",
                        "pic":"assets/images/cart/cart4.webp",
                        "desc":"RedMi K20 Pro 尊享版 K20 Pro",
                        "price":"4669",
                        "detail_1":"「立即预约中，11月11日6GB+128GB闪降200元，到手价仅需1399元」",
                        "detail_2":"6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，\n" +
                            "                    液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁\n" +
                            "                    大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速"
                    },
                    {
                        "pid":"005",
                        "pic":"assets/images/cart/cart5.webp",
                        "desc":"RedMi K20 Pro 尊享版 K20 Pro",
                        "price":"5669",
                        "detail_1":"「立即预约中，11月11日6GB+128GB闪降200元，到手价仅需1399元」",
                        "detail_2":"6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，\n" +
                            "                    液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁\n" +
                            "                    大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速"
                    },
                    {
                        "pid":"006",
                        "pic":"assets/images/cart/cart6.webp",
                        "desc":"RedMi K20 Pro 尊享版 K20 Pro",
                        "price":"6669",
                        "detail_1":"「立即预约中，11月11日6GB+128GB闪降200元，到手价仅需1399元」",
                        "detail_2":"6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，\n" +
                            "                    液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁\n" +
                            "                    大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速"
                    }
                ],
                flag:false,
                admi:"管理",
                flag1:false,
                info:null,
                color:null,
                total:null,
                good_id:null,
                car_id:null,
                shop_id:null,
                totalNum:0,
                index1:null,

                index2:null,
                block:null,
                inputStyle:null,
                // checked:false,
                num:1,
                em:true,
                shop_input_flag:true,

            };
        },
        methods: {
// 计算总价接口
            async y_totalSum(){
                let res = await fetch('http://119.3.133.207/cars/price/?token='+this.token)
                // 119.3.133.207
                // 10.36.172.136
                let data = await res.json()
                // this.info = data;
                // this.totalNum = data.data;
                console.log(data)
                // console.log(1212)
            },
            // 提交被选中状态
            y_checked(){
                fetch("http://119.3.133.207/cars/price/",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    // car_id 商品id
                    body:JSON.stringify({"token": this.token,"car_id":this.car_id}),  //69
                }).then(res=>{
                    //res stream promise
                    res.json().then(data=>{

                          this.inputStyle=data.data
                        if(this.inputStyle==1){
                            this.checked = true;
                        }
                        // console.log(this.inputStyle)
                    })
                })
            },
            // 最大的全选
            y_allChecked(){
                fetch("http://119.3.133.207/cars/price/",{
                    method:"PUT",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({"token": this.token}),
                }).then(res=>{
                    //res stream promise
                    res.json().then(data=>{
                        console.log(data)

                    })
                })
            },
            // 店铺全选
            y_shopAllCheckde(){
                fetch("http://119.3.133.207/cars/shop/",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({"token": this.token,"shop_id":this.shop_id}), //16
                }).then(res=>{
                    //res stream promise
                    res.json().then(data=>{
                        console.log(data)
                    })
                })
            },
            // 加数量
            y_addNum(){
                fetch("http://119.3.133.207/cars/num/",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({"token": this.token,"good_id":this.good_id}),  //20
                }).then(res=>{
                    //res stream promise
                    res.json().then(data=>{
                        console.log(data)
                    })
                })
            },
            // 减数量
            y_minNum(){
                fetch("http://119.3.133.207/cars/num/",{
                    method:"PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"token": this.token,"good_id":this.good_id}),  //20

                }).then(res=>{
                    //res stream promise
                    res.json().then(data=>{
                        console.log(data)
                    })
                })
            },
            formatPrice(price) {
                return (price / 100).toFixed(2)*100;
            },
            go_buy() {
                this.$router.replace("/weiaddress")

            },
            onClickLeft() {
                this.$router.go(-1)
            },
            onClickRight() {
                Toast('按钮');
            },
            // eslint-disable-next-line no-unused-vars
            // add(){
            //     // console.log(i)
            //     // console.log(this.weidATA[i].num)
            //     // this.weidATA[i].audit++
            //
            //     let color = "['裸色 ']";
            //
            //     console.log(color.trim().split('\'')[1])
            // },
            slid_show(){
              // let oAmin = document.getElementById("#admini")
                this.flag1=!this.flag1
                $(".edit").toggle();
            },
            // 渲染初始化页面
            async y_cart() {

                    let res = await fetch('http://119.3.133.207/cars/list/?token='+this.token)
                    // 119.3.133.207
                    // 10.36.172.136
                    let data = await res.json()
                    // this.weidATA.push(data.data.now_good);
                this.info = data.data;
                if(this.info.length<=0){
                    this.em = true
                }else {
                    this.em = false
                }
            },

            // 删除商品接口
            y_del_message(){
                fetch("http://119.3.133.207/cars/del/",{
                    method:"DELETE",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({"token": this.token}),
                    // ZGVjNjNiMTk4MjllNDRjOGFhODhjYmIwNTMxOWM0OTg=
                }).then(res=>{
                    //res stream promise
                    res.json().then(data=>{
                        console.log(data)

                    })
                })
                this.y_cart()
            },
// 店铺点击
            shop_checked(e,shop){


                // let arr = document.getElementsByTagName("input")
                // arr.forEach((oinput)=>{
                //     if(oinput.checked=="checked"){
                //         this.flag=true;
                //     }
                //     // ----------------------------------------
                //
                // })
                this.y_shopAllCheckde();
                this.y_totalSum();
                this.shop_id = shop.sid
                this. y_checked();
                this.cart(e);
                this.total_num();
            },
            //判断商铺是否全部选中
            isShop_cheack(){
                let falg=true;
                $.each($(".shop_input"),function(){
                    if($(this)[0].checked==false){
                        falg=false;
                        return false;
                    }
                });
                return falg;
            },
            isGoods_cheack(e){
                let falg=true;
                $.each($(e.target).parents(".y_shop").find("input"),function(i){
                    // console.log("商品"+$(this)[0].checked)
                    if(i>0){
                       if($(this)[0].checked==false){
                           falg=false;
                           return false;
                       }
                   }
                });
                return falg;
            },
// 商品选中点击
            goods_checked(e,shop,goods){
                // console.log(this.checked)
                this.shop_id = shop.sid;
                this.car_id = goods.cid;
                // console.log(this.car_id);

                this.totalNum+=goods.price*goods.num
                this.y_totalSum();
                this.y_checked();
                this.total_num();
                if(this.isGoods_cheack(e)==true){
                    $(e.target).parents(".y_shop").find("input").eq(0)[0].checked=true;
                }else{
                    $(e.target).parents(".y_shop").find("input").eq(0)[0].checked=false;
                }
                if(this.isShop_cheack()==true){
                    $(".all_mychecked")[0].checked=true;
                }else{
                    $(".all_mychecked")[0].checked=false;
                }
                // this.y_allChecked()
            },
            // 最大的全选
            all_checked(){
                let allcheck=$("input").last()[0].checked;
                this.y_totalSum();
                this.y_allChecked();
                // 选中页面所有的input
                $.each($("input"),function(i){
                  if($("input").length-1>i){
                     if(allcheck==true){
                         $(this)[0].checked=true;
                     }else{
                         $(this)[0].checked=false;
                     }
                  }
                });
                this.total_num();
            },
            // 计算总价
            // 计算总价
            total_num(){
            let that = this;
            that.totalNum = 0;
                $.each($(".product_check"),function () {

                   if( $(this)[0].checked==true){
                       let price = $(this).parents(".y_goods_box").find(".y_pri").children().text();
                       let num = $(this).parents(".y_goods_box").find(".y_num").text();
                       that.totalNum += Number(price)*Number(num)
                   }

                })
                // console.log(that.totalNum)
            },
            // 数量加加
            addNum(goods,index){

                this.index1 = index;
                this.good_id = goods.gid
                // console.log(this.good_id)
                // console.log("加加")
                this.y_addNum();
                this.y_totalSum();
                // this. y_cart();
                if(goods.num<20){
                    goods.num++
                }
                else if(goods.num>20){
                    alert("该商品以达上限")
                }
            },
            // 数量减减
            minNum( goods,index){
                this.index1 = index;
                this.good_id = goods.gid;
                // console.log(this.good_id);
                // console.log("减减");
                this.y_minNum();
                this.y_totalSum();
                // this. y_cart();

                if(goods.num>1){
                    goods.num--;
                }else {
                    goods.num=1
                }
            },

            cart(e){

                    let check = $(e.target)[0].checked;
                   $.each($(e.target).parents(".y_shop").find("input"),function(i){
                      if(i>0){
                          if(check==true){
                              $(this)[0].checked=true;
                          }else{
                              $(this)[0].checked=false;
                          }
                      }

                   });
                 if(this.isShop_cheack()==true){
                    $(".all_mychecked")[0].checked=true;
                }else{
                     $(".all_mychecked")[0].checked=false;
                 }
            }
        },
        created(){

        },
        beforeMount() {

            this.y_cart()
            this.y_totalSum()
// this.add()
        },
// updated() {
//     this.y_cart()
// }
        // eslint-disable-next-line no-dupe-keys
    created() {
            this.token  = localStorage.getItem("token")
            // this.token = 'ZGVjNjNiMTk4MjllNDRjOGFhODhjYmIwNTMxOWM0OTg='
            console.log(this.token)
        }





    }
</script>

<style lang="less">
.y_empty{
    width: 100%;
    height: 0.6rem;
}
.y_empty2{
    width: 100%;
    height: 0.5rem;
}
    .edit{
        width: 89%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        font-size: 0.14rem;
        height: 0.4rem;
        position: fixed;
        top: 0.47rem;
    }

    .edit_clear{
        font-size: 0.13rem;
        color: #95A6AA;
    }
    .move_collection{
        display: inline-block;
        border: 1px solid #F2AC5D;
        font-size: 0.13rem;
        color:#F2AC5D ;
        padding: 0.04rem 0.1rem;
        border-radius: 0.15rem;
    }
    .del{
        display: inline-block;
        border: 1px solid #E94E4A;
        font-size: 0.13rem;
        color:#E94E4A;
        padding: 0.04rem 0.15rem;
        border-radius: 0.15rem;
        margin-left: 0.1rem;
    }
    .admi{
        position: fixed;
        top: 0.15rem;
        z-index: 100;
        right: 0.2rem;
        color: white;
    }
    .van-nav-bar{
        background-color: #D75C76;
        position: fixed;
        top: 0;
        width: 100%;
    }

    .van-nav-bar__title{
        color: white;
    }
    .van-nav-bar .van-icon{
        color: white;
    }
    .van-nav-bar__text{
     color: white;
    }
    .card-goods {
        padding: 10px 0;

        &__item {
            position: relative;
            background-color: #fafafa;
            .van-checkbox__label {
                width: 100%;
                height: auto; // temp
                padding: 0 10px 0 15px;
                box-sizing: border-box;
            }
            .van-checkbox__icon {
                top: 50%;
                left: 10px;
                z-index: 1;
                position: absolute;
                margin-top: -10px;
            }
            .van-card__price {
                color: #f44;
            }
        }
    }
	/*猜你喜欢*/
    .your_love{
        margin-top: 0.2rem;
    }
	.your_love img{
        width: 100%;
        height: 0.625rem;
    }
    .img img{
        display: block;
        width: 1.85rem;
        height: 1.85rem;
        margin: 0;
        padding: 0;
    }
    .messiage{
        width: 1.85rem;
        /*height: ;*/
        /*padding: 0.09rem 0 0.13rem 0.11rem ;*/

    }
    .desc{
        width: 1.65rem;
        color: #3c3c3c;
        font-size: 0.14rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 0.1rem;
    }
    .price{
        font-size: 0.16rem;
        color: #ff6700;
        text-align: left;
        padding-left: 0.1rem;
    }
    .love_product_boss{
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap ;
    }
    /*vant样式*/
    .card-goods {
        padding: 10px 0;
        background-color: #fff;
        &__item {
            position: relative;
            background-color: #fafafa;
            .van-checkbox__label {
                width: 100%;
                height: auto; // temp
                padding: 0 10px 0 15px;
                box-sizing: border-box;
            }
            .van-checkbox__icon {
                top: 50%;
                left: 10px;
                z-index: 1;
                position: absolute;
                margin-top: -10px;
            }
            .van-card__price {
                color: #f44;
            }
        }
    }
/*空显示*/
    .free{
        width: 100%;
        height: 0.62rem;
        /*background-color: #EBEBEB;*/
        padding: 0.1rem;
        line-height: 0.62rem;
        margin-top: 2rem;
        text-align: center;
    }
    .free-s{
        display: inline-block;
        padding: 0 0.08rem 0 0.6rem;
        font-size: 0.13rem;
        color: rgba(0,0,0,0.27);
        background-image: url("../assets/images/cart1.png");
        background-repeat: no-repeat;
        background-size: auto 100%;
    }
    .go_see{
        display: block;
        width: 0.5rem;
        border: 0.01rem solid #999;
        height: 0.2rem;
        line-height: 0.2rem;
        padding: 0 0.1rem;
        border-radius: 0.03rem;
        color: rgba(0,0,0,0.37);
        margin: 0.15rem auto ;
    }

    /*购物车样式*/
    .input{
        -webkit-appearance: radio;
        width: 0.17rem;
        height: 0.17rem;
        background: white;
        outline: none;
    }
    .mack_inp{

    }
    .mask_inp::before{
        display: block;
        content: "\2714";
        text-align: center;
        font-size: 16px;
        width: 0.16rem;
        height: 0.16rem;
        line-height: 0.17rem;
        border-radius: 50%;
        color: white;
        position: absolute;
        background-color: #ED7543;
        top: 0.084rem;
        left: 0.115rem;
    }
    .y_cart{
        width: 100%;

    }
    .y_shop{
        width: 95%;
        border-radius: 0.05rem;
        background-color: white;
        margin: 0 auto;
    }
    .y_shop_title{
        width: 100%;
        padding-top: 0.1rem;
    }
    .y_title{
        display: flex;
        align-items: center;
        justify-content: left;
        height: 0.35rem;
    }
    .one{
        width: 0.5rem;
        text-align: center;
        position: relative;
        /*background-color: #EE7F35;*/
        height: 0.35rem;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .two{
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 0.12rem;
    }
    .two img{
        width: 0.25rem;
        height: 0.25rem;
        margin-right: 0.1rem;

    }
    .y_title_name{
    }
    .three{
        width: 0.5rem;
        font-size: 0.12rem;
    }
.y_goods{
    width: 100%;
}
    .y_goods_box{
        display: flex;
        justify-content: left;
        align-items: center;
        padding-bottom: 0.1rem;
        width: 100%;
        border: none;
        padding-top: 0.1rem;
    }
    .p_one{
        width: 0.4rem;
        text-align: center;
        position: relative;
    }
    .p_two{
        width: 0.7rem;
        height: 0.7rem;

    }
    .p_two img{
        width: 100%;

    }
    .p_three{
        width: 2.3rem;
        /*background-color: #EE7F35;*/
        font-size: 0.11rem;
        margin-left: 0.12rem;
    }
    .descAdv{
        font-size: 0.12rem;
        line-height: 0.16rem;
        width: 2rem;
        /*background-color: blueviolet;*/
        /*margin: 0 auto;*/
        height: 0.35rem;
        overflow: hidden;
        margin-top: 0.05rem;
        letter-spacing: 0.01rem!important;
        color: #666;
    }
.p_three_bottom{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
    .y_pri{
        color: #ED7543;
        font-size: 0.13rem;
    }
    .taste{
        color: #BBBBBB;
    }
    .add{
        margin-right: 0.1rem;
        color: #BBBBBB;
        height: 0.17rem;

    }
    .y_add{
        width: 0.18rem;
        height: 100%;
        text-align: center;
        display: inline-block;
        border: 0.01rem solid #EFEFEF;
        line-height: 0.17rem;
        border-radius: 0.04rem 0 0 0.04rem;
    }
    .y_num{
        width: 0.28rem;
        height: 100%;
        text-align: center;
        display: inline-block;
        line-height: 0.17rem;
        border: 0.01rem solid #EFEFEF;
        border-left: none;
        border-right: none;
    }
    .y_min{
        width: 0.18rem;
        height: 100%;
        text-align: center;
        display: inline-block;
        line-height: 0.17rem;
        border: 0.01rem solid #EFEFEF;
        border-radius: 0 0.04rem 0.04rem 0;
    }
    .p_mask_inp::before{
        display: block;
        content: "\2714";
        text-align: center;
        font-size: 16px;
        width: 0.16rem;
        height: 0.16rem;
        line-height: 0.17rem;
        border-radius: 50%;
        color: white;
        position: absolute;
        background-color: #ED7543;
        top: 0rem;
        left: 0.115rem;
    }

    footer{
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: white;

    }
    .check_all{
        width: 90%;
        margin: 0 auto;
        display: flex;
        height: 0.4rem;
        align-items: center;
        justify-content: space-between;
    }
    .sum{
        display: flex;
    }
    .footer{
        display: flex;
    }
    .go_buy{
        width: 0.5rem;
        height: 0.3rem;
        line-height: 0.3rem;
        display: inline-block;
        background-color: #ED7543;
        margin-left: 0.1rem;
    }
/*.van-nav-bar__title{*/
/*    background-color: #F56D02;*/
/*}*/
</style>
