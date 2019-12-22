<template>
    <div style="margin-top: -0.5rem">
        <van-nav-bar
                title="购物车"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <a href="#/login"  class="header2" >
            <span class="header2_l">登录后享受更多优惠</span>
            <span class="go_login">去登录</span>
        </a>
<!--        为空显示-->
        <div class="free" >
            <router-link to="/main/home">
                <span class="free-s">购物车还是空的</span>
                <span class="go_see">去逛逛</span>
            </router-link>
        </div>
        <van-checkbox-group class="card-goods" v-model="checkedGoods">
            <van-checkbox
                    class="card-goods__item"
                    v-for="(item,i) in weidATA"
                    :key="i"
                    :name="item.id"
            >
                <van-card
                        :title="item.title"
                        :desc="item.desc"
                        :num="item.num"
                        :price="formatPrice(item.price)"
                        :thumb="item.thumb"
                >
                    <span>{{item.color}}</span>

                    <div slot="footer">
                        <van-button size="mini" @click="del(i)">减少</van-button>
                        <van-button size="mini" @click="add(i)">增加</van-button>
                    </div>
                </van-card>
            </van-checkbox>
        </van-checkbox-group>
        <van-submit-bar
                @submit="onSubmit"
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="submitBarText"
        />
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
    import { mapGetters } from 'vuex';
    import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast ,NavBar,Button} from 'vant';
    export default {
        name: "cart",
        components: {
            [Card.name]: Card,
            [Button.name]:Button,
            [NavBar.name]: NavBar,
            [Checkbox.name]: Checkbox,
            [SubmitBar.name]: SubmitBar,
            [CheckboxGroup.name]: CheckboxGroup
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
                return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0), 0);
            }
        },
        data() {
            return {
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
                goods: [{
                    id: '1',
                    title: '进口香蕉',
                    desc: '约250g，2根',
                    price: 200,
                    color:"红色",
                    num: 0,
                    thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                }, {
                    id: '2',
                    title: 'VALENTINO',
                    desc: 'Rose同款 黑色徽标针织套衫',
                    price: 6330,
                    color:"黄色",
                    num: 0,
                    thumb: 'https://img.ofashion.com.cn/public/goods/sale_quote/20191109/861342/41445dc5bb7e22b6d/5949324783666610_60585327.jpg?x-oss-process=image/resize,w_750/format,webp'

                }, {
                    id: '3',
                    title: '美国伽力果',
                    desc: '约680g/3个',
                    price: 2680,
                    color:"黑色",
                    num: 0,
                    thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
                }]
            };
        },
        methods: {
            formatPrice(price) {
                return (price / 100).toFixed(2);
            },
            onSubmit() {
                this.$router.replace("/weiaddress")

            },
            onClickLeft() {
                this.$router.go(-1)
            },
            onClickRight() {
                Toast('按钮');
            },
            // eslint-disable-next-line no-unused-vars
            add(i){
                // console.log(i)
                // console.log(this.weidATA[i].num)
                this.weidATA[i].num++
            },
            weiforeach(){

              for(let i=0;i<this.goods.length;i++){
                  // console.log(this.cartInfo[0])
                  if(this.goods[i].id== this.cartInfo[0]){

                      this.weidATA.push(this.goods[i])
                      // console.log(this.weidATA)
                  }
              }
            },
            del(i){
                if(this.weidATA[i].num<=1){
                    this.weidATA[i].num=1
                }else{
                    this.weidATA[i].num--
                }

            }
        },
        beforeMount() {
            this.weiforeach()
        }
    }
</script>

<style lang="less">
    .header2{
        width:100%;
        /*margin-top: 0.5rem;*/
        display: block;
        height: 0.54rem;
        line-height: 0.54rem;
        background-color: white;
        /*padding:0 0.3rem 0 0.16rem;*/
    }
    .header2_l{
        font-size: 0.14rem;
        float: left;
        margin-left: 0.16rem;
    }
    .go_login{
        font-size: 0.12rem;
        color: #999;
        float: right;
        margin-right: 0.3rem;
        position: relative;
    }
    .go_login::after{
        content: "";
        position: absolute;
        right: -0.1rem;
        top: 50%;
        /*width: 0.08px;*/
        width: .08rem;
        /*height: 0.08px;*/
        height: .08rem;
        border-left: 1px solid currentColor;
        border-top: 1px solid currentColor;
        transform: translate3d(0,-50%,0) rotate(135deg);
        -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
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
        background-color: #EBEBEB;
        padding: 0.1rem;
        line-height: 0.62rem;
        margin-top: 2rem;
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
        display: inline-block;
        border: 0.01rem solid #999;
        height: 0.2rem;
        line-height: 0.2rem;
        padding: 0 0.1rem;
        border-radius: 0.03rem;
    }
</style>
