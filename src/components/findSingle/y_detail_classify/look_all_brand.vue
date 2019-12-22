<template>
    <div class="y_look_all_boss">
        <header>
            <div class="y_header">
                <img @click="y_goBack" src="../../../assets/images/header/back.png" alt="">
            </div>
            <div class="y_seach">
                <input type="text" placeholder=" 搜索" class="y_inp">
            </div>
            <a  href="#/brandshop"  class="click"></a>
        </header>
        <van-index-bar>
                <van-index-anchor :index="n.title" v-for="(n,index) in list" :key="index"/>

                    <van-cell :title="text.name" v-for="(text,index2) in n.contemt" :key="index2" />

        </van-index-bar>
        <div class="clear"></div>
    </div>
</template>

<script>
    import { IndexBar, IndexAnchor,Cell} from 'vant';
    export default {
        name: "look_all_brand",
        components:{
            [IndexAnchor.name]:IndexAnchor,
            [IndexBar.name]:IndexBar,
            [Cell.name]:Cell
        },
        data(){
            return{
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
                brang_all:[]
            }
        },
        methods:{
            y_goBack(){
                this.$router.go(-1)
            },
            async _initPageData() {
                let res = await fetch('http://119.3.133.207/goods/get_brand/?all=1212')
                let data = await res.json()
                this.brang_all=data.data;
                console.log(data)
            },
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
    background: url("../../../assets/images/header/search.png");
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