<template>
    <div class="box">
        <div class="top">
            <span @click="jump">返回</span>
        </div>
        <ul v-if="hotsInfo">
            <li  :key="index" v-for="(item,index) in hotsInfo">
                <div class="Allgoods">
                    <a :href="`#/detail`+index">
                        <img :src="item.mig_url" class="picture">
                        <h3>{{item.brand_name}}</h3>
                        <p>{{item.name}}</p>
                        <span class="price">￥{{item.price}}</span>
                        <img ref="pic" src="assets/images/unlove.png" class="pics" @click="chage" >
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "hotgoods",
        data(){
            return {
                hotsInfo:null,
                num:0
            }
        },
        methods : {
            chage(){
                this.num++;
                if( this.num%2==1){
                    this.$refs.pic.src="assets/images/love.png"
                }else{
                    this.$refs.pic.src="assets/images/unlove.png"
                }

            },
            _initHotsInfo(){
                fetch('http://119.3.133.207:5000/home/sales/').then(res=>{
                    //console.log(res)
                    res.json().then(data => {
                        console.log(data)
                        this.hotsInfo = data.data;
                        // console.log(this.orderInfo)
                    })
                })
            },
            jump(){
                this.$router.go(-1)
            }
        },

        // created() {
        //     this._initHotsInfo();
        // },
        beforeMount() {
            this._initHotsInfo();
        }
    }
</script>

<style scoped>
    .box{
        margin-top: -0.5rem;
    }
    .top{
        padding: 0.1rem 0 0 0.2rem;
    }
    ul{
        display: flex;
        flex-wrap:wrap ;
    }
    li{
        width: 1.75rem;
        height: 2.77rem;
        margin-top: 0.08rem;
        margin-left:0.06rem;
        position: relative;
        border: 1px solid rgba(0,0,0,0.1);
    }
    .picture{
        width: 1.75rem;
    }
    ul li:nth-child(2n){
        margin-right: 0.08rem;
    }
    .Allgoods{
        width: 1.75rem;
        height: 2.77rem;
        position: relative;
        text-align: center;
        background-color: white;
    }
    .price{
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        color: #2c3e50;
        font-weight: bold;
    }
    .picone{
        width: 1.75rem;
        height:1.765rem ;
    }
    .pics{
        width:0.2rem;
        height:0.2rem;
        position: absolute;
        bottom: 1.3rem;
        right:0.15rem;
    }
</style>