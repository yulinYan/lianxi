<template>
    <div class="boss">
        <div class="box">
            <div>
            <div class="title"> 支付完成</div>
            <div class="go_home" @click="go_home">返回首页</div>
            </div>
        </div>
    </div>
</template>

<script>
    // import $ from "jquery"
    // import { mapGetters } from 'vuex';
    export default {
        name: "puy",

        data(){
            return{
                param:null,
                id:""
                // ZjQ3N2RlYjY0ODA5NDc5NTkxYWRmNTgwMmVkYTM0MjA=
            }
        },
        created() {

            // console.log(this.$route.fullPath)
            let param = this.$route.fullPath.substring(6)
            console.log(param)
            fetch('http://119.3.133.207' +
                '' +
                '/order/success/'+param).then(res=> {
                return res.json();
            }).then(data=>{
                console.log(data);
                   localStorage.setItem("token",data.token)
            }).catch(err=>{
                console.log(err);
            })
            console.log(this.$route.query)

            // localStorage.setItem("token",this.id)
        },
        methods:{
           go_home(){
               this.$router.push("/main/home");

                   // this.$cart.$emit("ca", this.detaildata.pId)
                   this.$store.dispatch('INIHOME',this.id)
                   console.log('waw')
           }
        }
    }
</script>

<style scoped>
.boss{
    margin-top: -0.5rem;
}
.box{
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.box div{
    width: 100%;
    margin-top: 0.1rem;
    text-align: center;
    font-size: 0.14rem;
}

    /*头部中间的品牌名称*/

    .name p{
        width: 65%;
        margin: 0 auto;
    }
</style>