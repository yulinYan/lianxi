<template>
        <div>
            <mc-header></mc-header>
            <mc-footer></mc-footer>
            <router-view></router-view>
            <a href="#/cart" class="detail"><img src="../assets/images/slide_cart-H.png" alt=""></a>

<!--            购物车   返回定顶部-->

        </div>
</template>

<script>
    import header from "./main/header";
    import footer from "./main/footer";
    export default {
        name: "vmain",
        components:{
            'mc-footer':footer,
            'mc-header':header
            // eslint-disable-next-line vue/no-unused-components
        }
    }
</script>

<style scoped>
    .detail{
        position: fixed;
        right:0rem;
        top:5rem;
        background-color: rgba(255,255,255,0.9);
        height: 0.35rem;
        width: 0.35rem;
        z-index: 1000;
        border-radius: 50%;
    }
    .detail img{
        width: 70%;
        height: 70%;
        margin: 0 auto;
        margin: 0.05rem 0 0 0.04rem;
        /*background-image: url("../assets/images/slide_cart.png");*/
    }

</style>