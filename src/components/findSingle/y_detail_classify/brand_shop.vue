<template>
    <div class="boss">
        <header>
            <div @click="go_back">back</div>
            <div class="name" v-if="brandAll">
                <p >{{brandAll.brand.name}}({{brandAll.brand.id}})</p>
            </div>
            <div class=""><span>seach</span><span>筛选</span></div>
        </header>
        <div class="brand_inif" v-if="brandAll">
            <div class="shop_pic inif"><img :src="brandAll.brand.brand_img" alt=""></div>
<!--            ../../../../public/assets/images/findSingle/brand/brand2.webp-->
            <div class="message inif">
                <p class="brand_name ">{{brandAll.brand.name}}</p>
                <p class="founder">创始人：{{brandAll.brand.founder}}</p>
                <p>创建地区：{{brandAll.brand.address}}</p>
                <p>成立时间:{{brandAll.brand.create_date}}</p>
            </div>
<!--            relevant相关  关注 品牌故事一块-->
            <div class="relevant inif call_btn ">
                <div class="follow">+ 关注</div>
                <a :href="'tel:'+tel"> <div class="brand_story">品牌故事</div></a>
            </div>

        </div>
        <div class="xl_character">
            <div class="xl_character_tab" v-if="brandAll">
<!--                <div class="xl_tab-item" @click="flag=0" :class="{xl_tab_active:flag===0}"> 全选  </div>-->
                <div class="xl_tab-item" @click="flageNum(index)" :class="{xl_tab_active:index===flag}" v-for="(item,index) in brandAll.first_type" :key="index">
                    {{item.name}}  
                </div>
<!--                <div class="xl_tab-item" @click="flag=1" :class="{xl_tab_active:flag===1}"> 精选  </div>-->
<!--                <div class="xl_tab-item" @click="flag=2" :class="{xl_tab_active:flag===2}"> 箱包  </div>-->
<!--                <div class="xl_tab-item" @click="flag=2" :class="{xl_tab_active:flag===2}"> 鞋履  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 配饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=2" :class="{xl_tab_active:flag===2}"> 服饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 首饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 首饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 首饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 首饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 首饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 首饰  </div>-->
<!--                <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 首饰  </div>-->
            </div>
            <div class="xl_character_product">
                <a href="#/detail7" class="character_product_item" >
                    <div>
<!--                       ------------- 商品-->
                        <div class="product_boss" v-if="brandAll">
                            <div class="y_product" v-for="(item,index) in brandAll.good" :key="index">
                                <!--                <div class="y_product_img">-->
                                <img :src="item.img" alt="" class="product-img">
                                <img src="../../../../public/assets/images/findSingle/detailClassify/goods-f2.webp" class="goods-img">
                                <!--                </div>-->
                                <p class="brand">{{item.brand_name}}</p>
                                <p class="desc">{{item.good_name}}</p>
                                <p class="price">￥<span>{{item.price}}</span></p>
                            </div>
                        </div>
                    </div>

                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import findSinglrApi from "../../../apis/findSinglrApi";
    export default {

        name: "brand_shop",

        data(){
            return{
                flag:0,
                brandShopInfo:"",
                brandAll:null,
                num:0,
                // arr:[]
                tel:'18293080304'
            }
        },
        methods:{
            go_back(){
                this.$router.go(-1)
            },
            /**
             * 页面的数据加载
             **/
            async _initPageData() {
                // eslint-disable-next-line no-undef
                let data = await findSinglrApi.getFindSingleInfo();
                this.brandShopInfo = data.characterList;
                // console.log(this.brandShopInfo)
            },
            async _message() {
                // eslint-disable-next-line no-undef
                let res = await fetch('http://119.3.133.207/goods/get_brand_goods/?type_id=0&search_type=-price&brand_id='+this.$route.params.id)
                // 119.3.133.207
                let data = await res.json()
                this.brandAll=data.data;

            },
            flageNum(index){
                this.flag = index;
                console.log(this.flag)
                this.num=this.flag
            }

        },
        beforeMount () {
            this._initPageData();
            this._message();
        },
    }
</script>

<style scoped>
.boss{
    margin-top: -0.5rem;
    background-color: white;
}
header{
    font-size: 0.16rem;
    display: flex;
    justify-content: space-around;
    height: 0.4rem;
    background-color: #F56D02;
    line-height: 0.4rem;
    color: white;
    padding: 0 0.1rem;
}
.founder{
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/*头部中间的品牌名称*/
.name{
    width: 50%;
    text-align: center;
    font-size: 0.2rem;
}

.name p{
    width: 65%;
    margin: 0 auto;
}
/*品牌头部  品牌信息*/
.brand_inif{
    display: flex;
    width: 100%;
}
.shop_pic{
    width: 40%;
}
.shop_pic img{
    width: 100%;
    margin: 0 auto;
    margin-top: 0.05rem;
}
/*er*/
.message{
    width: 40%;
    font-size: 0.12rem;

}
.inif{
    margin-left: 0.05rem;
}
.brand_name{
    font-size: 0.2rem;
}
.message p{
    height: 0.25rem;
    line-height: 0.25rem;
}
/*三*/
.relevant{
    text-align: right;
    width: 20%;

}
.follow{
    border: 1px solid #F56D02;
    border-radius: 0.07rem;
    text-align: center;
    width: 0.6rem;
    font-size: 0.13rem;
    height: 0.2rem;
    line-height: 0.2rem;
    margin-top:0.05rem ;
}
.brand_story{
    color: #F56D02;
    margin: 0.4rem 0.14rem 0 0;
    position: relative;
}
.brand_story:after{
    content: "";
    position: absolute;
    right: -0.17rem;
    top:0.03rem;
    width: 0;
    height: 0;
    border: 0.07rem solid transparent;
    border-left: 0.07rem solid #F56D02!important;

}


/*品牌头部  品牌信息结束结束结束结束*/
/*通过绑定下标循环   其实并没有真的循环起来  就是通过下标直接在数据机构中找到对应index的部分*/
    .xl_tour_con>p {
        font-size: 0.19rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-height: 1.4;
        color: #333;
    }
    .traveler-img img {
        width: 0.4rem;
        height:  0.4rem;
        border-radius: 50%;
    }

    .xl_tourism_list a{
        display:inline-block;
    }

    .traveler-infor p {
        font-size: .17rem;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
    }

    .xl_product_item>p{
        margin-bottom: 0.15rem;
        font-size: .14rem;
        color: #333;
        line-height: 0.19rem;
        text-align: left;
    }


    .xl_item-img img {
        width: 2.85rem;
        height: 1.58rem;
        vertical-align: middle;
        border-radius: 0.12rem;
    }
    .character-item-img img{
        width: 3.35rem;
        height: 1.8rem;
        vertical-align: middle;
        border-radius: 0.12rem;
    }
    .xl_product-price b {
        font-weight: 400;
        font-size: .12rem;
    }


    .xl_character_tab{
        padding: 0.17rem 0.17rem;
        height: 0.3rem;
        background-color: #fff;
        overflow-x: auto;
        white-space: nowrap;
        z-index: 2;
        /*flex-wrap: wrap;*/
    }
    .xl_tab-item{
        display: inline-block;
        width:0.5rem;
        height: 100%;
        margin: 0 0.1rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.3rem;
        color: rgb(102, 102, 102);
        border: 1px solid #d9d9d9;
        border-radius: 0.05rem;
    }
    .product-item .jian {
        background-image: linear-gradient(180deg,rgba(0,0,0,.3),transparent);
        border-top-left-radius: 0.12rem;
        border-top-right-radius:0.12rem;
    }

    .xl_product-tag .tag-green {
        background-color: #FF5C5D;
    }
    .xl_product-tag .tag, .xl_product-tag span:nth-child(2) {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .xl_product-tag span {
        font-size: .125rem;
        text-align: center;
        padding: 4px 0;
        line-height: 1;
        display: block;
        background-color: #1cb677;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    .tag-wrap p {
        display: flex;
        width: 200%;
        overflow: hidden;
        transform: scale(.5);
        transform-origin: 0 0;
    }
    .tag-wrap span.tag-yellow {
        background-color: #fff;
        border: 1px solid #fda403;
        color: #fda403;
    }
    .tag-wrap span {
        display: block;
        margin: 0.04rem .1rem 0 0;
        padding: 0 .05rem;
        height: 0.28rem;
        border-radius: 4px;
        box-sizing: border-box;
        line-height: 0.28rem;
        text-align: center;
        font-size: 0.2rem;
    }
    .character_product_item{
        display: block;
    }
    .character_product_item:after {
        content: "";
        display: block;
        width: 100%;
        border-bottom: 1px solid #d9d9d9;
        margin: .175rem 0;
    }
    .xl_character_product a:last-child:after {
        border: 0;
    }
    .xl_tab_active{
        border-width: 0.03rem;
        border: 1px solid rgb(240, 100, 60);
        color: rgb(240, 100, 60);
    }
    .listinfor li {
        float: left;
        width: 33.33%;
        color: #999;
        font-size: 0.12rem;
        line-height: 1.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
    }

    .footlink li {
        float: left;
        width: 33%;
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .footlink li a {
        display: block;
        color: #333;
        font-size: 0.12rem;
        position: relative;
    }
    .footlink li a:after {
        content: "";
        height:0.14rem;
        width:0.01rem;
        display: block;
        position: absolute;
        top: 0.18rem;
        right: 0;
        clear: both;
        border-right: 1px solid #ccc;
    }
    .footlink li:last-child a:after {
        border: 0;
    }
    .relat-link p{
        line-height: 1.6;
    }
    .relat-link .alink {
        padding: 0 0.08rem 0.1rem;
        display: inline-block;
        color: #999;
    }
    /*----------------商品样式--------------------商品*/
    .product_boss{
        width: 100%;
        /*padding: 0.05rem;*/
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .y_product{
        position: relative;
        width: 46%;
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
        width: 100%;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        margin: 0.05rem 0;
    }
    .price{
        font-size: 0.14rem;
        color: #ff7711;

    }
</style>