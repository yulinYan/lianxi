<template>
    <div>
        <header >
            <a href="'#/search">
                <div class="test">
            <div class="search">
                    <img  src="../../assets/images/header/search.png" alt="">
                    <div class="inp">{{name}}（{{length}}）</div>
            </div>
                </div>
            </a>
            <div class="back" @click="go_back"></div>
        </header>
        <div class="product_boss" v-if="info">
            <div  class="y_product" v-for="(goods,index) in info" :key="index" >
                <!--                <div class="y_product_img">-->
<!--                <a href="`#/detail`+goods._id">-->
                    <img v-lazy="goods._source.img_url" alt="" class="product-img">
<!--                    v-lazy="goods._source.img_url"-->
                    <img src="assets/images/findSingle/detailClassify/goods-f2.webp" class="goods-img">
                    <!--                </div>-->
                    <p class="brand">{{goods._source.brand_name}}</p>
                    <p class="desc">{{goods._source.name}}</p>
                    <p class="price">￥<span>{{goods._source.price}}</span></p>
<!--                </a>-->
            </div>
        </div>
        <div class="show" v-show="!show">抱歉！没有搜到您想要的商品</div>
    </div>
</template>

<script>
    export default {
        name: "searchShow",
        data(){
            return{
                info:null,
                length:null,
                name:null,
                show:null
            }
        },
        methods:{
            go_back(){
                this.$router.go(-1)
            },
            async _PageData() {
                this.name = this.$route.params.id;
                console.log(name);
                let res = await fetch('http://119.3.190.106:9200/goods/_search?q=' + this.name)
                // 119.3.133.207
                // 10.36.172.136
                let data = await res.json()
                this.info = data.hits.hits;
                this.length = this.info.length
                if(this.length>0){
                    this.show = "show"
                }
                console.log(this.info)
                console.log(data)
            }
        },

        beforeMount() {
            // console.log(this.$route.params.id)
            this._PageData()
        }
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 0.5rem;
        background-color: white;
        position: fixed;
        top: 0;
        z-index: 1000;
        /*line-height: 0.4rem;*/
    }
    .search{
        width: 80%;
        height: 0.3rem;
        margin: 0.1rem auto 0;
        border: 0.01rem solid #dcdcdc;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        /*margin-top: 0.1rem;*/
    }
    .search img{
        width: 0.3rem;
        height: 0.3rem;
    }
    .inp{
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        border: none;
        /*border-left: 0.01rem solid #dcdcdc;*/
        display: block;
    }
    .search:before{
        content: "";
        width: 0.1rem;
        height: 0.1rem;
        border: 0.02rem solid #cccccc;
        transform: rotate(45deg);
        position: absolute;
        left: 0.13rem;
        top: 0.18rem;
        border-right: none;
        border-top: none;
    }
    .back{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 0.1rem;
    }
    /*.test{*/
    /*    display: ;*/
    /*}*/
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
    img[lazy="loading"]{
        width: 100%;
        height: 100%;
    }
    .show{
        width: 100%;
        min-height: 0.5rem;
        position: absolute;
        top: 3rem;
        text-align: center;
        font-size: 0.14rem;
        color: #666666;
    }
</style>