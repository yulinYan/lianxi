<template>
    <ul>
        <li :key="index" v-for="(item,index) in recommendInfo.data ">
            <div class="Allgoods">
                <img :src="item.mig_url">
                <h3>{{item.brand_name}}</h3>
                <p class="des">{{item.name}}</p>
                <span class="price">￥{{item.price}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "goods",
        data (){
            return {
                recommendInfo : [],
            }
        },
        methods:{
            _initRecommendInfo(){
                fetch('http://119.3.133.207:5000/home/recommend/').then(res=>{
                    res.json().then(data => {
                        this.recommendInfo = data;
                    })
                })
            }
        },
        created() {
            this._initRecommendInfo();
        }
    }
</script>

<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    li{
        width: 1.75rem;
        margin-top: 0.08rem;
        padding-left:0.08rem;
    }
    ul li:nth-child(2n){
        padding-right: 0.08rem;
    }
    .Allgoods{
        width: 1.75rem;
        height: 2.77rem;
        border: 1px solid rgba(0,0,0,0.1);
        position: relative;
    }
    .price{
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        color: #2c3e50;
        font-weight: bold;
    }
    .Allgoods img{
        width: 100%;
        height:1.765rem ;
    }
    .des{
        /*height:0.4rem;*/
        overflow: hidden;
        /*padding: 0rem 0.05rem;*/
        text-overflow:ellipsis;
       word-wrap: break-spaces;
    }
</style>