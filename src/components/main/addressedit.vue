<template>
    <div>
        <header class="f-user-addressedit-header">
            <div class="f-user-addressedit-goback" @click="toback"><img src="../../../public/assets/images/mine/mm_title_back.png"/></div>
            <div class="f-user-addressedit-title">新增收货地址</div>
    </header>
        <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
        />
    </div>
</template>

<script>
    import { AddressEdit ,Toast,Notify} from 'vant';
    import areaList from '../../../public/assets/area.js'
    export default {
        name: "addressedit",
        data() {
            return {
                areaList,
                searchResult: [],
                name:"",
                phone:"",
                area:"",
                address:"",
                post_num:"",
                is_default:0,
            }
        },
        components:{
            [AddressEdit.name]:AddressEdit,
        },
        methods: {
            onSave(content) {
                let token = localStorage.getItem("token")
                this.name = content.name,
                this.phone=content.tel,
                this.area=content.province + content.city + content.county,
                this.address=content.addressDetail,
                this.post_num=content.postalCode
                if(content.isDefault){
                    this.is_default = 1
                }else{
                    this.is_default = 0
                }
                console.log(token)
                console.log(this.name)
                console.log(this.phone)
                console.log(this.area)
                console.log(this.address)
                console.log(this.post_num)
                console.log(this.is_default)
                // 发送请求
                fetch('http://119.3.133.207:5000/myaddress/',{
                    method:"POST",
                    mode: "cors",
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        token:token,
                        name:this.name,
                        phone:this.phone,
                        area:this.area,
                        address:this.address,
                        post_num:this.post_num,
                        is_default:this.is_default
                    })
                }).then(res=> {
                    return res.json();
                }).then(data=>{
                    console.log(data);
                    if(data.code == 0){
                        Notify({ type: 'success', message: '设置成功' });
                    }else{
                        Toast.fail(data.msg);
                    }
                }).catch(err=>{
                    console.log(err);
                })
            },
            onDelete() {
                Toast('成功刪除');
            },
            toback(){
                this.$router.go(-1);
            },
        }
    }
</script>

<style scoped>
    .f-user-addressedit-header{
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
    .f-user-addressedit-title{
        width:100%;
        font-size: 0.18rem;
    }
    .f-user-addressedit-goback{
        height:0.5rem;
        position: absolute;
        left: 0;
        width:20%;
        display: flex;
        align-items: center;
    }
    .f-user-addressedit-goback img{
        width:0.28rem;
        height:0.28rem;
        margin-left: 0.1rem;
    }
</style>