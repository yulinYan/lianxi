<template>
    <div class="boss" >
        <div class="adv_boss" v-if="findSingleInfo">
<!--            {{data[0]}}-->
            <a :href="`#/series`+index"  v-for="(item,index) in findSingleInfo.first_type" :key="index" class="adv">
            <!--                `#/series`+item.tId-->
                <img :src="item.url_img" alt="">
            </a>
        </div>
        <div class="hot_classify_boss">
            <div class="hot_classify">热门分类</div>
            <div class="hot_list" v-if="findSingleInfo">
                <a href="#/specific" class="ht" v-for="(n,index2) in findSingleInfo.second_type" :key="index2">
<!--                    <img src="assets/images/findSingle/classify/classify1.webp" alt="">-->
                    <div class="f-img"></div>
<!--                    <span>{{n.name}}</span>-->
                </a>
            </div>
        </div>
        <y-loading1></y-loading1>
    </div>
</template>

<script>
    import loading1 from "./loading1";
    export default {
        name: "y_classify",
        // props:['data'],
        data(){
            return{
                findSingleInfo:[],
            }
        },
        components:{
            'y-loading1':loading1
        },
        methods:{
            /**
             * 页面的数据加载
             **/
            async _initPageData() {
                let res = await fetch('http://119.3.133.207:5000/goods/goods_type/')
                // 10.36.172.136
                let data = await res.json()
                this.findSingleInfo=data.data;
                // return data;
            },
        },
        beforeMount () {
            this._initPageData()
        },
    }
</script>

<style scoped>
    .boss{
        background-color: white;
    }
    .adv_boss{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
.adv{
    display:inline-block;
    width: 1.85rem;
    margin-top: 0.03rem;
    /*min-height: 1.04rem;*/
}
.adv img{
    width: 100%;
    height: 100%;
}

    /*----------------------*/
    .hot_classify_boss{
        position: relative;
    }
    .hot_classify{
        height: 0.4rem;
        line-height: 0.4rem;
/*border-bottom: 1px solid #cccccc;*/
    }
    .hot_classify:after{
         content: "";
         width: 0.8rem;
         height: 0.01rem;
         background-color: #cccccc;
         position: absolute;
         top: 0.2rem;
        right: 0.6rem;
     }
    .hot_classify:before{
        content: "";
        width: 0.8rem;
        height: 0.01rem;
        background-color: #cccccc;
        position: absolute;
        top: 0.2rem;
        left: 0.6rem;
    }
    .hot_list{
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        background-image: url("../../assets/images/hotBj.jpg");
        background-size: 100%;
    }
    .ht{
        width: 1.24rem;

    }
    .f-img{
        width: 100%;
        height: 1.25rem;
    }
    /*.ht img{*/
    /*    width: 10%;*/
    /*    height: 1.25rem;*/
    /*}*/
</style>
