<template>
    <div>
        <div class="specific">
            <header class="go_back" @click="go_back"><div class="text">返回</div></header>
            <div class="y-sort">
                <div class="title">
                    <div class="h-nav-l-row" v-if="mess.code==0" >
                        <div class="h-nav-item" @click="styleItem(n,h)" :key="h" v-for="(n,h) in type">
                            <!--                    <a :href="`#/series/sortcontent`+n.id">-->
                            <span :class="{cheched_item:i===h}">{{n}}</span>
                            <!--                    {{num}}-->
                            <!--                    </a>-->
                        </div>
                    </div>
                    <div>
                        <div >
                            <div class="product_boss" v-if="info" >

                                <div class="y_product" v-for="(n,index) in info.good" :key="index" >
                                    <!--                <div class="y_product_img">-->
                                    <a :href="'#/detail'+n.id">
                                        <img v-lazy="n.img" alt=""  class="product-img">

                                        <img src="assets/images/findSingle/detailClassify/goods-f2.webp" class="goods-img">
                                        <!--                </div>-->
                                        <p class="brand">{{n.brand_name}}</p>
                                        <p class="desc">{{n.goods_name}}</p>
                                        <p class="price">￥<span>{{n.price}}</span></p>
                                    </a>
                                </div>
                            </div>
                            <!--                    {{info}}-->
                            <div v-if="mess.code!=0" class="later">
                                非常抱歉，该商品以以下架，您来晚了
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        <y-loading1></y-loading1>-->
    </div>
</template>

<script>
    // import loading1 from "./loading1";
    export default {

        name: "first_type",
        components:{
            // 'y-loading1':loading1
        },
        data(){
            return{
                type:[
                    // eslint-disable-next-line no-undef
                    "热门","销量","最新","价格升","价格降"
                ],
                i:0,
                arr:null,
                flag:true,
                str:null,
                data:null,
                search_type:"coll_num",
                info:null,
                mess:null
            }
        },
        beforeMount(){
            this.getId()
        },
        methods: {
            go_back() {
                this.$router.go(-1)
            },
            // filter(type,index){
            //     this.i=index;
            //     this.flag=false;
            //     // this._PageData();
            //     // this.pointer=true
            // },
            styleItem(n,h) {
                this.getId()
                this.i = h;
                switch (h) {
                    case 0:
                        this.search_type="coll_num"
                        break;
                    case 1 :
                        this.search_type="sell_num"
                        // console.log(this.search_type)
                        break
                    case 2:
                        this.search_type="date"
                        // console.log(this.search_type)
                        break;
                    case 3:
                        this.search_type="price"
                        // console.log(this.search_type)
                        break;
                    case 4:
                        this.search_type="-price"
                        break;
                    default:
                }
            },
            async getId(){
                this.data=this.$route.params.id
                // console.log(this.data)
                // console.log(this.search_type)
                let res = await fetch('http://119.3.133.207/goods/get_goods/?type_id='+this.data+'&search_type='+this.search_type)
                // 119.3.133.207
                // 10.36.172.136
                let data = await res.json()
                this.mess = data;
                this.info=data.data;
                // console.log(this.info)
            },

        }
    }
</script>

<style scoped>
    .specific{
        margin-top: -0.5rem!important;
    }
    header{
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #F56D02;
        color: white;
        width: 100%;
    }
.text{
    margin-left:0.1rem ;
}
    .h-nav-l-row{
        /*overflow-x:auto ;*/
        /*display: -webkit-box;*/
        display: flex;
        justify-content: space-around;
        /*margin-top: 0.4rem;*/
        background-color: white;
        width: 100%;
        margin-bottom: 0.02rem;

    }
    .fixTitle{
        position: fixed;
        top: 0;
        margin-top: 0;
        z-index: 100;
    }
    .h-nav-item{
        /*padding:0 0.32rem;*/

    }
    .h-nav-item span{
        display: block;
        width: auto;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.13rem;
    }
    .cheched_item{
        border-bottom: 0.01rem solid #ff6700;
        color: #ff6700;
    }
    .product_boss{
        width: 100%;
        /*padding: 0.05rem;*/
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        /*margin-top: 0.5rem;*/
        background-color: white;
    }
    .y_product{
        position: relative;
        width: 46%;
        margin: 0 0.07rem;
    }
    .product-img{
        width: 100%;
        height: 1.72rem;
        display: block;
    }
    .goods-img{
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        top: 0;
        left: 0;
    }
    .brand{
        font-size: 0.14rem;
        margin-top: 0.04rem;
    }
    .desc{
        font-size: 0.12rem;
        color: #666666;
        width: 90%;
        margin: 0.05rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        white-space: pre-wrap;
        -webkit-line-clamp: 2;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;

    }
    .price{
        font-size: 0.14rem;
        color: #ff7711;

    }
    img[lazy="loading"]{
        width: 100%;
        height: 100%;
    }
    .later{
        width: 70%;
        height: 2rem;
        line-height: 2rem;
        color: #95A6AA;
        margin: 0 auto;
    }
</style>