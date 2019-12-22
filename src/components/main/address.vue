<template>
    <div class="f-user-address">
        <header class="f-user-address-header">
            <div class="f-user-address-goback" @click="toback"><img src="../../../public/assets/images/mine/mm_title_back.png"/></div>
            <div class="f-user-address-title">地址列表</div>
        </header>
        <van-address-list
                v-model="chosenAddressId"
                :list="addInfo"
                @add="onAdd"
                @select="select"
        ></van-address-list>
        <div>{{add}}</div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import { AddressList } from 'vant';
    export default {
        name: "faddress",
        data() {
            return {
                chosenAddressId: "",
                addInfo:[],
            }
        },
        components:{
          [AddressList.name]:AddressList,
        },
        methods: {
            onAdd() {
                this.$router.push('/addressedit')
            },
            select(item){
                this.$store.dispatch('INITADD',item.id)
            },
            _initAddress(){
                fetch('http://119.3.133.207:5000/myaddress/?token='+ localStorage.getItem("token") + "&address=all").then(res=> {
                    return res.json();
                }).then(data=>{
                    this.addInfo = data.data
                    this.addInfo.forEach((item)=>{
                        if(item.is_default == 1){
                            this.chosenAddressId = item.id
                            this.$store.dispatch('INITADD',item.id)
                        }
                    })
                }).catch(err=>{
                    console.log(err);
                })
            },
            toback(){
                this.$router.go(-1);
            },
        },
        computed: {
            ...mapGetters({
                add: 'GETADD'
            })
        },
        created() {
            this._initAddress();
        },
    }
</script>

<style scoped>
    .f-user-address-header{
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        position: fixed;
        top:0;
        z-index:1;
        background-color: #FBF8FC;
        border-bottom: 1px solid #DDDDDD;
        margin-bottom: 0.2rem;
    }
    .f-user-address-title{
        width:100%;
        font-size: 0.18rem;
    }
    .f-user-address-goback{
        height:0.5rem;
        position: absolute;
        left: 0;
        width:20%;
        display: flex;
        align-items: center;
    }
    .f-user-address-goback img{
        width:0.28rem;
        height:0.28rem;
        margin-left: 0.1rem;
    }
</style>