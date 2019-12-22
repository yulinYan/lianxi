<template>
    <div class="seriesBoss"  >
        <div class="y_header" @click="goback"> 返回</div>
        <div v-if="info">
            <div class="title_btn_boss" v-show="flag" v-if="info">
                <div @click="filter(type.id,index)" v-for="(type,index) in info.second_type" :key="index" class="title_btn">
                    <a :href="`#/firsttype`+type.id">
                        {{type.name}}
                    </a>
                </div>
                <div class="mask">点击查看更多  >><span class="space"></span></div>
            </div>

            <div :class="{btnClecked:flag==false}">
                <y-sort :data="desc"  ></y-sort>
            </div>
            <div class="empty"></div>
        </div>
        <loading v-else></loading>
    </div>
</template>

<script>
    import sort from "./sort";
    import loading from "../../common/loading";
    // import findSinglrApi from "../../../apis/findSinglrApi";

    export default {
        name: "series",
        data(){
            return{
                specificInfo:[],
                i:0,
                arr:null,
                flag:true,
                str:null,
                info:null,
                num:1,
                desc:null,
            }
        },
        components:{
            'y-sort':sort,
            loading
        },
        methods:{
            goback(){
                this.$router.push('/main/findsingle')
            },
            filter(type,index){
                this.i=index;
                this.flag=false;
                // this.arr=this.specificInfo[this.i].product;
                this.desc = type;
                // console.log(type)
                // console.log("dada")
                // console.log(this.desc)
                this._PageData();
                // this.pointer=true
            },
            /**
             * 页面的数据加载
             **/
            // async _initPageData() {
            //     // eslint-disable-next-line no-undef
            //     let data = await findSinglrApi.getFindSingleInfo();
            //     // 一整个单肩包对象  里面还包含着热门之类的四个
            //     this.specificInfo = data.specific;
            //     this.arr=data.product;
            // },
            async _PageData() {
                let num=this.$route.params.id;
                num++;
                this.num = num;
                // let order = this.search_type
                let res = await fetch('http://119.3.133.207/goods/get_goods/?type_id='+this.num+'&search_type=coll_num ')
                // 119.3.133.207
                // 10.36.172.136
                let data = await res.json()
                this.info=data.data;
                // console.log(this.info)
            },

        },
        beforeMount () {
            // this._initPageData()
            this._PageData()
        },
    }
</script>

<style scoped>
    .y_header{
        height: 0.4rem;
        line-height: 0.4rem;
        padding-left: 0.3rem;
        background-color: #F56D02;
        color: white;

    }

    .seriesBoss{
        margin-top: -0.5rem!important;
    }
    .title_btn_boss{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        padding: 0.03rem 0;
        max-height: 0.65rem;
        line-height: 0.3rem;
        overflow: hidden;
    }
    .title_btn{
        width: 0.7rem;
        display: block;
        border-radius: 0.05rem;
        margin-top: 0.04rem;
        background-color: white;
        font-size: 0.12rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0.04rem 0.02rem 0;
    }
    .btnClecked{
        margin-top: -0.4rem;
    }
    .empty{
        width: 100%;
        height: 8rem;
    }
    /*===========================================================*/
    .product_boss{
        width: 100%;
        /*padding: 0.05rem;*/
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 0.5rem;
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
    .mask{
        position: absolute;
        background-color: white;
        top: 1.15rem;
        text-align: right;
        width: 100%;
        height: 0.35rem;
        line-height: 0.35rem;
    }
    .space{
        display: inline-block;
        width: 0.5rem;
    }
</style>