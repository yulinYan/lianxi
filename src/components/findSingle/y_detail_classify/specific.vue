<template>
    <div class="specific">
        <header class="go_back" @click="go_back">back</header>
        <div class="y-sort">
            <y-sort v-if="specificInfo" :mess="specificInfo"></y-sort>
        </div>
    </div>
</template>

<script>
    import sort from "./sort";
    import findSinglrApi from "../../../apis/findSinglrApi";
    export default {
        name: "specific",
        data(){
            return{
                specificInfo:null
            }
        },
        components:{
            'y-sort':sort
        },
        methods: {
            go_back(){
                this.$router.go(-1)
            },
            /**
             * 页面的数据加载
             **/
            async _initPageData() {
                // eslint-disable-next-line no-undef
                let data = await findSinglrApi.getFindSingleInfo();
                this.specificInfo = data.product;
                console.log(this.specificInfo)
            }
        },
        beforeMount () {
            this._initPageData()
        },
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
    }
.y-sort{
    margin-top: -0.4rem;
}
</style>