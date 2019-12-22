<template>
    <div>
        <header >
            <div class="search">
                <a :href="'#/searchshow'+value"><img @click="search" src="../../assets/images/header/search.png" alt=""></a>
                <input type="text" placeholder="搜索商品" class="inp" id="inp" v-model="value">
            </div>
            <div class="back" @click="go_back"></div>
        </header>
<!--        搜索历史  热门关键字-->
        <div class="title">
            <div class="hot_search">
                <h4>搜索历史</h4>
                <div class="brand">
                    <div class="pad">
                        <div>LV新款包</div>
                        <div>鞋子</div>
                        <div>黑色马丁靴</div>
                        <div>THOM BROWNE 卫衣</div>
                        <div>Moncler羽绒服</div>
                        <div>冬季宽松时尚保暖棉衣</div>

                    </div>
                </div>
            </div>
            <div class="hot_search">
            <h4>热门关键字</h4>
            <div class="brand">
                <div class="pad">
                    <div>LV新款包</div>
                    <div>THOM BROWNE卫衣</div>
                    <div>GUIDI短靴</div>
                    <div>护肤套装</div>
                    <div>19新款围巾</div>
                    <div>chanel</div>
                    <div>lv</div>
                    <div>Chanel</div>
                    <div>LV限定</div>
                    <div>CHANEL 19秋冬包</div>
                    <div>GUCCI鞋</div>
                    <div>gucci虎头</div>
                    <div>Burberry tee</div>
                </div>
            </div>
        </div>
        </div>
<!--        热搜专题-->
        <div class="pointer_buy">
            <h4>热搜专题</h4>
            <div class="intr">
                <div class="intr_s">
                    <img src="../../../public/assets/images/findSingle/detailClassify/search1.webp">
                    <div class="desc">周冬雨带领你时尚穿搭</div>
                </div>
            </div>
<!--            -&#45;&#45;-->
            <div class="intr">
                <div class="intr_s">
                    <img src="../../../public/assets/images/findSingle/detailClassify/search2.webp">
                    <div class="desc">选对口红色号至少白三度</div>
                </div>
            </div>
<!--            -&#45;&#45;&#45;&#45;-->
            <div class="intr">
                <div class="intr_s">
                    <img src="../../../public/assets/images/findSingle/detailClassify/search3.webp">
                    <div class="desc">盘点夏日时髦防晒法宝</div>
                </div>
            </div>
            <div class="intr">
                <div class="intr_s">
                    <img src="../../../public/assets/images/findSingle/detailClassify/product1.webp">
                    <div class="desc">潮牌包包带你周游气质女神的世界</div>
                </div>
            </div>
            <!--            -&#45;&#45;-->
            <div class="intr">
                <div class="intr_s">
                    <img src="../../../public/assets/images/findSingle/detailClassify/search2.webp">
                    <div class="desc">每个女汉子够有一个玛丽莲梦露的心</div>
                </div>
            </div>
            <!--            -&#45;&#45;&#45;&#45;-->
            <div class="intr">
                <div class="intr_s">
                    <img src="../../../public/assets/images/findSingle/detailClassify/search3.webp">
                    <div class="desc">盘点夏日时髦防晒法宝</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    export default {
        name: "search",
        data(){
            return{
                value:null,
                info:null
            }
        },
        methods:{
           go_back(){
            this.$router.go(-1)
           },
           async _PageData() {
               let q = this.value;
                console.log(q);
               let res = await fetch('http://119.3.190.106:9200/goods/_search?q='+q)
               // 119.3.133.207
               // 10.36.172.136
               let data = await res.json()
               this.info=data;
               console.log(this.info)
               console.log(data)
               // fetch("http://119.3.190.106:9200/goods/_search",{method:"POST",headers:{"Content-Type": "application/json; charset=UTF-8"},
               //     body:"q="+q
               // }).then(res=>{
               //     //res stream promise
               //     res.json().then(data=>{
               //         console.log(data)
               //     })
               // })

           },

            // _PageData(){
            //     // eslint-disable-next-line no-undef
            //     let q = this.value;
            //     console.log(this.q)
            //
            //     axios.get("http://119.3.190.106:9200/goods/_search/?q="+q)
            //         .then(res => {
            //             console.log(res.data);
            //             this.info = res.data;
            //             console.log(this.info);
            //         });
            //
            // },
            search(){
               this. _PageData()
           }
       }
        // beforeMount() {
        //     this._PageData()
        // }
    }
</script>
<style scoped>
header{
    width: 100%;
    height: 0.5rem;
    background-color: white;
    position: fixed;
    top: 0;
    /*line-height: 0.4rem;*/
}
    .search{
        width: 80%;
        height: 0.3rem;
        margin: 0.1rem auto 0;
        border: 0.01rem solid #dcdcdc;
        display: flex;
        /*margin-top: 0.1rem;*/
    }
    .search img{
        width: 0.3rem;
        height: 0.3rem;
    }
    .inp{
        width: 100%;
        height: 0.3rem;
        border: none;
        border-left: 0.01rem solid #dcdcdc;
        display: block;
    }
    .search:before{
        content: "";
        width: 0.1rem;
        height: 0.1rem;
        border: 0.02rem solid #cccccc;
        transform: rotate(45deg);
        position: absolute;
        left: 0.13rem;
        top: 0.18rem;
        border-right: none;
        border-top: none;
    }
.back{
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    top: 0.1rem;
}

    .hot_search{
        width: 100%;

    }
    .hot_search h4{
        font-size: 0.13rem;
        height: 0.3rem;
        line-height: 0.3rem;
        padding-left: 0.1rem;
        color: #666666;
    }
    .brand{
        width: 100%;
        background-color: white;
        padding-bottom: 0.1rem;
    }
.pad{
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap ;

}
.pad div{
        border: 0.01rem solid #999999;
        margin-right: 0.1rem;
        margin-top: 0.1rem;
        padding: 0 0.1rem;
        font-size: 0.12rem;
        color: #999999;
    }
.pointer_buy{
    width: 100%;

}
.pointer_buy h4{
    color: #666666;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.13rem;
    padding-left: 0.1rem;
}
    .intr{
        width: 100%;
        background-color: white;
        border-bottom: 1px solid #dbdbdb;
    }
    .intr_s{
        width: 95%;
        margin: 0 auto;
        display: flex;
        height: 0.7rem;
        align-items: center;
        color: #666666;
position: relative;
    }
.intr_s:after{
    content: "";
    width: 0.07rem;
    height: 0.07rem;
    border: 0.02rem solid #cccccc;
    transform: rotate(-135deg);
    position: absolute;
    right: 0.13rem;
    top: 0.27rem;
    border-right: none;
    border-top: none;
}
    .intr_s img{
        width: 0.8rem;
        height: 0.55rem;
    }
    .desc{
        color: #666666;
        font-size: 0.13rem;
    }
</style>