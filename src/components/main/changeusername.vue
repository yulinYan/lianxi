<template>
    <div class="change-username">
        <header class="f-changeinfo-header">
            <div class="f-myorder-goback" @click="toback"><img src="../../../public/assets/images/mine/navbar_back_icon.png"/></div>
            <div class="f-change-username">更改用户名</div>
            <div class="change-save" @click="confirmchange">保存</div>
        </header>
        <div class="f-change-content">
            <div class="f-user-name">
                <span class="f-username">用户名</span>
                <input class="f-rename" type="text" v-if="userInfo" :placeholder="userInfo.data.name" v-model="name"/>
            </div>
        </div>

    </div>
</template>

<script>
    import {Toast} from "vant"
    export default {
        name: "changeusername",
        data(){
          return {
              userInfo:"",
              name:"",
              sex:"",
              head_img:"",
              birthday:"",
              address:"",
          }
        },
        methods:{
            toback(){
                this.$router.go(-1);
            },
            // 初始化用户数据
            _initUserInfo() {
                let token = localStorage.getItem("token");
                fetch('http://119.3.133.207:5000/user/info/?token=' + token)
                    .then(res => {
                        res.json().then(data => {
                            if(data.code == 1){
                                Toast(data.msg)
                            }else{
                                console.log(data.msg)
                                this.userInfo = data
                                this.sex = data.data.sex,
                                this.head_img = data.data.head_img,
                                this.birthday = data.data.birthday,
                                this.address = data.data.address
                                console.log( this.sex,this.birthday,this.address)
                            }
                        })
                    })
            },
            confirmchange(){
                let token = localStorage.getItem("token")
                fetch('http://119.3.133.207:5000/user/info/',{
                    method:"PUT",
                    mode: "cors",
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        token:token,
                        user_name: this.name,
                        sex:this.sex,
                        head_img:this.head_img,
                        birthday:this.birthday,
                        address:this.address,
                        current_pwd: "",
                        new_pwd: "",
                        re_new_pwd: ""
                    })
                }).then(res=> {
                    return res.json();
                }).then(data=>{
                    console.log(data);
                    Toast(data.msg)
                }).catch(err=>{
                    console.log(err);
                })
            },
        },
        created() {
            this._initUserInfo();
        },
    }
</script>

<style scoped>
    .f-changeinfo-header{
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        background-color: #FBF8FC;
        border-bottom: 1px solid #DDDDDD;
        margin-top: -0.5rem;
    }
    .f-myorder-goback{
        height:0.5rem;
        width:20%;
        display: flex;
        align-items: center;
    }
    .f-myorder-goback img{
        width:0.28rem;
        height:0.28rem;
        margin-left: 0.1rem;
    }
    .f-change-username{
        width:60%;
        font-size: 0.16rem;
    }
    .change-save{
        width:20%;
    }
    .f-change-content{
        width:100%;
        height:6.17rem;
        background-color: white;
        padding-top: 0.1rem;
    }
    .f-user-name{
        width:98%;
        height:0.35rem;
        border-bottom: 1px solid #dbdbdb;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        text-align: center;
    }
    .f-username{
        display: inline-block;
        width:20%;
        height:0.35rem;
        vertical-align: middle;
        line-height: 0.35rem;
        font-size: 0.16rem;
    }
    .f-rename{
        width:75%;
        height:0.35rem;
        border:none;
        outline: none;
    }
</style>
