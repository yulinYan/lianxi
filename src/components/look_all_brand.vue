<template>
    <div class="y_look_all_boss">
        <header>
            <div class="y_header">
                <img @click="y_goBack" src="../assets/images/header/back.png" alt="">
            </div>
            <div class="y_seach">
                <input type="text" placeholder=" 搜索" class="y_inp" id="y_inpId" v-model="val">
            </div>
            <!--            点一下去品牌页-->
            <a  :href="`#/brandshop`+id"  class="click"></a>
        </header>
        <div v-if="brang_all">
            <van-index-bar  >

                <van-index-anchor  v-for="(n,index) in brang_all" :key="index">
                    <!--外面的ABCD-->
                    {{n.title}}
                    <!--首字母对应的品牌-->
                    <van-cell :title="text.name" @click="click_seach(text)"   v-for="(text,index2) in n.body" :key="index2" />
                </van-index-anchor>

            </van-index-bar>
        </div>
        <loading v-else></loading>
        <div class="clear"></div>
    </div>
</template>

<script>
    import loading from "./common/loading";
    import { IndexBar, IndexAnchor,Cell} from 'vant';
    // import $ from jquery
    export default {
        name: "look_all_brand",
        components:{
            [IndexAnchor.name]:IndexAnchor,
            [IndexBar.name]:IndexBar,
            [Cell.name]:Cell,
            loading
        },
        data(){
            return{
                bId:"",
                list:[
                    {
                        "title":"A",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"B",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"C",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"D",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"E",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"F",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"G",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"H",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"I",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"J",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"K",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"L",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"M",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"N",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"O",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"P",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"Q",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"R",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"S",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"T",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"U",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"V",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"W",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"X",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"Y",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    },
                    {
                        "title":"Z",
                        contemt:[
                            {name:"aas"},
                            {name:"aas"},
                            {name:"aas"}
                        ]
                    }

                ],
                brang_all:[],
                val:null,
                id:null
            }
        },
        methods:{
            y_goBack(){
                this.$router.go(-1)
            },
            async _initPageData() {
                let res = await fetch('http://119.3.133.207:5000/goods/get_brand/?all=1212')
                // 119.3.133.207
                // 10.36.172.136
                let data = await res.json()
                this.brang_all=data.data;
                console.log(data)
            },
            click_seach(title){
                // let Oinput=document.getElementById("#y_inpId");
                this.val=title.name;
                this.id = title.id;
            }
        },
        beforeMount () {
            this._initPageData()
        },

    }
</script>

<style scoped>

    header{
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #EEEEEE;
        z-index: 1000;
    }
    .y_header{
        height: 0.5rem;
    }
    .y_header img{
        width: 0.2rem;
        height: 0.2rem;
        transform: rotate(90deg);
        margin-left: 0.1rem;
        margin-top: 0.1rem;
    }
    .click{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        top:0.5rem;
        left: 0.2rem;
    }
    .y_look_all_boss{
        width: 100%;
        height: 0.4rem;
        margin-top: -0.4rem;
        padding-top: 0.7rem;
    }
    .y_seach{
        width: 90%;
        height: 0.4rem;
        margin: 0 auto;
        text-align: center;
        border-radius: 0.1rem;
        border: none;
        background: url("../assets/images/header/search.png");
        background-repeat: no-repeat;
        background-size: 10%;
        background-position: 0.1rem;
        background-color: white;
    }
    .y_inp{
        width: 70%;
        height: 99%;
        margin: 0 auto;
        border-radius: 0.1rem;
        border: none;

        background-color: white;
    }
    .van-index-bar{
        margin-top: 0.1rem;
    }
</style>