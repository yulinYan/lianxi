<template>
    <div>
        <header>
            <p>大牌就在fashion购</p>
        </header>
        <div @click="go_myHome" class="go_back">

        </div>
        <div v-if="info" class="aa">
            <div class="brand_inif" v-for="(n,h) in info" :key="h">
                <div class="shop_pic inif">
                    <a :href="'#/brandshop'+n._id">
                        <div class="hh">{{n._id}}</div>
                        <img :src="n._source.brand_img" alt="">
                    </a>
                </div>
                <!--            ../../../../public/assets/images/findSingle/brand/brand2.webp-->
                <div class="message inif">
                    <p class="brand_name name">{{n._source.name}}</p>
                    <p class="founder">创始人：{{n._source.founder}}</p>
                    <p>创建地区：{{n._source.address}}</p>
                    <p>成立时间:{{n._source.create_date}}</p>
                </div>
                <!--            relevant相关  关注 品牌故事一块-->
                <div class="relevant inif call_btn ">
                    <div class="follow">+ 关注</div>
                    <a :href="'tel:'+tel"> <div class="brand_story">定制电话</div></a>
                </div>

            </div>
            <div class="show" v-show="!show">抱歉！没有搜到您想要的商品</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "searchShowB",
        data(){
            return{
                // valve:null
                length:null,
                show:null,
                info:null,
                name:null,
                tel:18293080304
            }
        },
        methods:{
            async _PageData() {
                // let q = this.value;
                // console.log(q);
                let res = await fetch('http://119.3.190.106:9200/fashion/_search?q=' + this.$route.params.id)
                // 119.3.133.207
                // 10.36.172.136
                let data = await res.json()
                this.info = data.hits.hits;
                this.length = this.info.length;
                if(this.length>0){
                    this.show = "show"
                }
                console.log(this.info)
                console.log(data)
            },
            go_myHome(){
                this.$router.go(-1)
            }
        },beforeMount() {
            this._PageData()
        }
    }
</script>

<style scoped>
header{
    height: 0.7rem;
    width: 100%;
    margin-top: -0.5rem;
    margin-bottom: 0.1rem;
    background-image: url("../../../public/assets/images/findSingle/brand/brand_title.png");
    color: #F56D02;
    text-align: right;
    overflow: hidden;
}
header p{
    margin-top: -0.4rem;
    display: block;
    transform: rotate(30deg);
}
.aa{
    background-color: white;
}
.message{
    width: 40%;
    font-size: 0.11rem;
    color: #898989;

}
.inif{
    margin-left: 0.05rem;
    position: relative;
}
.hh{
    position: absolute;
    top: 0.1rem;
    left: 0.2rem;
    color: #cccccc;
    z-index: 0;
}
    .founder{
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    /*头部中间的品牌名称*/
    .name{
        width: 90%;
        text-align: left;
        font-size: 0.15rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: black;

    }
    .name p{
        width: 65%;
        margin: 0 auto;
        color: black;
    }
    /*品牌头部  品牌信息*/
    .brand_inif{
        display: flex;
        width: 100%;
        margin-top: 0.1rem;
    }
    .shop_pic{
        width: 35%;
    }
    .shop_pic img{
        width: 90%;
        margin: 0 auto;
        margin-top: 0.05rem;
        z-index: 100;
        position: relative;
    }
    /*er*/

    .message p{
        height: 0.2rem;
        line-height: 0.2rem;
    }
    /*三*/
    .relevant{
        text-align: right;
        width: 20%;
    }
    .follow{
        border: 0.5px solid #EE7F35;
        border-radius: 0.05rem;
        text-align: center;
        width: 0.4rem;
        font-size: 0.11rem;
        height: 0.2rem;
        line-height: 0.2rem;
        margin-top:0.05rem ;
    }
    .brand_story{
        color: #C67C2C;
        margin: 0.4rem 0.14rem 0 0;
        position: relative;
        font-size: 0.12rem;
    }
    .brand_story:after{
        content: "";
        position: absolute;
        right: -0.17rem;
        top:0.03rem;
        width: 0;
        height: 0;
        border: 0.05rem solid transparent;
        border-left: 0.05rem solid #C67C2C!important;
    }

.go_back{
    width: 0.25rem;
    height: 0.25rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    background-color: #dcdcdc;
    border-radius: 50%;
}
    .go_back:before{
        content: "";
        width: 0.15rem;
        height: 0.15rem;
        border: 0.02rem solid #ccc;
        position: absolute;
        top: 0.05rem;
        left: 0.05rem;
        transform: rotate(45deg);
        border-top: none;
        border-right: none;
    }
</style>