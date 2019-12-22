<template>
    <div class="box">
        <div class="top">
            <span @click="jump">返回</span>
        </div>
        <all-kind-of></all-kind-of>
        <myarticle></myarticle>
        <bottomswiper></bottomswiper>
    </div>
</template>

<script>
    import allKindOf from "./kinds/allKindOf"
    import myarticle from "./myarticle"
    import bottomswiper from './bottomswiper'
    export default {
        name: "kinds",
        components:{
            allKindOf,myarticle,bottomswiper
        },
        methods : {
            jump(){
                this.$router.go(-1)
            }
        },
    }
</script>

<style scoped>
    .box{
        margin-top: -0.5rem;
    }
    .top{
        padding: 0.1rem 0 0 0.2rem;
    }
</style>