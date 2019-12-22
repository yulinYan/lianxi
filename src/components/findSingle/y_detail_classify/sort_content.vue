<template>
    <div>
        <div class="product_boss" v-if="data">
            <div class="y_product"  v-for="(n,index) in data" :key="index">
<!--                <div class="y_product_img">-->
            <a :href="`#/detail`+n.id">
                    <img v-lazy="n.img" alt="" class="product-img">
                    <img src="assets/images/findSingle/detailClassify/goods-f2.webp" class="goods-img">
<!--                </div>-->
                    <p class="brand">{{n.brand_name}}</p>
                    <p class="desc">{{n.good_name}}</p>
                    <p class="price">￥<span>{{n.price}}</span></p>
                </a>
            </div>
        </div>
        <loading v-else></loading>
    </div>
</template>

<script>
    import loading from "../../common/loading";
    export default {
        name: "sort_content",
        props:['data'],
        components:{
            loading
        }
        // mounted() {
        //     console.log(this.data)
        //     console.log(1212)
        // }
    }
</script>

<style scoped>
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
        /*overflow:hidden;*/
        /*text-overflow:ellipsis;*/
        /*display:-webkit-box;*/
        /*-webkit-box-orient:vertical;*/
        /*-webkit-line-clamp:2;*/
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
</style>