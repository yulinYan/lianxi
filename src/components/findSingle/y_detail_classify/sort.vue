<template>
    <div>
        <div class="title" v-if="type">
            <div class="h-nav-l-row"  :class="{fixTitle:whether}">
                <div class="h-nav-item" @click="styleItem(n,h)" :key="h" v-for="(n,h) in type">
<!--                    <a :href="`#/series/sortcontent`+n.id">-->
                        <span :class="{cheched_item:i===h}">{{n}}</span>
<!--                    {{num}}-->
<!--                    </a>-->
                </div>
            </div>
            <div>
                <div v-show="info">
                    <y-sort-content v-if="info"  :data="info.goods_list.good"></y-sort-content>
<!--                    {{info}}-->
                </div>
            </div>
        </div>
        <loading v-else></loading>
    </div>
</template>

<script>
    import sort_content from "./sort_content";
    import $ from 'jquery';
    import loading from "../../common/loading";

    export default {
        name: "sort",
        props:['data'],
        data(){
            return{
            // show:true
                i:0,
                info:null,
                oneClassify:null,
                list:[],
                flage:"",
                // 设置滚动条到一定高度固定
                top:"",
                // scroll:"",
                whether:false,
                search_type:"coll_num",
                type:[
                    // eslint-disable-next-line no-undef
                    "热门","销量","最新","价格升","价格降"
                ],
                num:0
            }
        },
        // watch:{
        //     data:{
        //         handler:function(n){
        //             console.log(n)
        //             let a=n;
        //             console.log(a)
        //             console.log("adad")
        //             if(this.data!=0){
        //                 this.num = this.data;
        //                this._PageData()
        //             }
        //         },
        //         deep:true
        //     }
        // },

        components:{
            'y-sort-content':sort_content,
            loading
        },
        // beforeMount(){
        //     console.log(this.data)
        //     // console.log(888)
        //     // if(this.data){
        //     //     console.log(1)
        //     //     this.getId()
        //     // }else {
        //     //     console.log(2)
        //     //     this._PageData()
        //     // }
        // },
        beforeMount(){
            // this._initPageData()
            this.getScroll()


            console.log(this.data)
            // console.log(888)
            if(this.data){
                console.log(1)
                this.getId()
            }else {
                console.log(2)
                this._PageData()
            }

        },

        methods:{
            styleItem(n,h){
                this.i=h;
                // this.flag = n.flag;
                // this.show = true
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
            // console.log(this.i)
              this._PageData()
            },
            _initPageData(){
               //  console.log(this.$route.path)
               //  // this.oneClassify = data.specific[this.i].product;
               // if(this.$route.path=="/specific"){
               //     this.flage=true
               // }else if(this.$route.path=="/series"){
               //     this.flage=true
               // }

            },
            async getId(){


            // let order =
            // console.log(this.search_type)
            let res = await fetch('http://119.3.133.207/goods/get_goods/?type_id='+this.data+'&search_type='+this.search_type)
            // 119.3.133.207
            // 10.36.172.136
            let data = await res.json()
            this.info=data.data;
            // console.log(this.info)

            },
            getScroll(){
                var scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var fiexd =  $(".h-nav-l-row");
                this.top = fiexd.offsetTop;
                if(scrollTop>120){
                    this.whether = true;
                }else {
                    this.whether = false
                }
            },
            async _PageData() {
                let num=this.$route.params.id;
                num++;
                this.num=num
                // let order =
                // console.log(this.search_type)
                let res = await fetch('http://119.3.133.207/goods/get_goods/?type_id='+this.num+'&search_type='+this.search_type)
                // 119.3.133.207
                // 10.36.172.136
                let data = await res.json()
                this.info=data.data;
                // console.log(this.info)
            },

        },

        mounted() {
            window.addEventListener("scroll", this.getScroll);

        }
    }
</script>

<style scoped>


    .h-nav-l-row{
        /*overflow-x:auto ;*/
        /*display: -webkit-box;*/
        display: flex;
        justify-content: space-around;
        margin-top: 0.4rem;
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
</style>