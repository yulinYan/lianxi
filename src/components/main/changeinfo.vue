<template>
    <div class="f-changeinfo">
        <header class="f-changeinfo-header">
            <div class="f-myorder-goback" @click="toback"><img src="../../../public/assets/images/mine/navbar_back_icon.png"/></div>
        </header>
        <div class="f-user-picture" >
<!--            <img :src="userInfo.avatar" @click.stop="uploadHeadImg"/>-->
            <img v-if="userInfo" :src='userInfo.data.head_img' @click="uploadHeadImg"/>
            <span class="f-change-pic">修改头像</span>
<!--            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" style="display: none"/>-->
            <van-popup v-model="imgflag">
                <van-uploader :after-read="afterRead" />
            </van-popup>
        </div>
        <ul class="f-userinfo-base" v-if="userInfo">
            <li class="f-userinfo-list" @click="tochangename">
                <span>用户名</span><span>{{userInfo.data.name}}</span><span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow"/></span>
            </li>
            <li class="f-userinfo-list" @click="changesex">
                <span>性别</span><span>{{userInfo.data.sex}}</span><span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow"/></span>
            </li>
            <li class="f-userinfo-list" @click="showData">
                <span>生日</span><span>{{userInfo.data.birthday}}</span><span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow"/></span>
            </li>
            <li class="f-userinfo-list" @click="changeadd">
                <span>常住地</span><span>{{userInfo.data.address}}</span><span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow"/></span>
            </li>
        </ul>
        <ul class="f-userinfo-set">
            <li class="f-userinfo-list" @click="changepwd">
                <span>密码</span><span>********</span><span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow"/></span>
            </li>
            <li class="f-userinfo-list">
                <span>手机</span><span>{{phone}}</span>
            </li>
        </ul>
        <div class="f-userinfo-address" v-if="userInfo">
            <li class="f-userinfo-list">
                <router-link to="/address">
                <span>收货地址</span><span>{{userInfo.data.default_address}}</span><span><img src="../../../public/assets/images/mine/greater_number_use.png" class="arrow"/></span>
                </router-link>
            </li>
        </div>
<!--        <div class="f-user-confirm-change" @click="confirmchange">确认更改</div>-->
        <div class="f-user-back" @click="removeinfo">退出账号</div>
<!--        生日-->
        <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="confirm"
                @cancel="cancel"
                v-if="flag"></van-datetime-picker>
<!--        性别-->
        <van-action-sheet
                v-model="show"
                :actions="actions"
                description="请选择性别"
                cancel-text="取消"
                @select="onSelect"
                @cancel="onCancel"
        />
<!--        常住地址-->
        <van-area :area-list="areaList" @cancel="hiddenadd" @confirm="confirmadd" v-if="addshow"/>

    </div>
</template>

<script>
    import { DatetimePicker ,ActionSheet ,Area ,Popup ,Uploader,Toast} from 'vant';
    import areaList from '../../../public/assets/area.js'
    export default {
        name: "changeinfo",
        data(){
          return{
              flag:false,
              currentDate: new Date(),
              userInfo:"",
              // birthday:"未设置",
              // sex:"未设置",
              // address:"无",
              // userInfo: {
              //     // 初始头像
              //     avatar: localStorage.getItem("img")
              // },
              // name:localStorage.getItem("name"),
              phone:"",
              actions: [
                  { name: '男' },
                  { name: '女' },
              ],
              show: false,
              areaList,
              addshow:false,
              imgflag:false
          }
        },
        components:{
            [DatetimePicker.name]:DatetimePicker,
            [ActionSheet.name]:ActionSheet,
            [Area.name]:Area,
            [Popup.name]:Popup,
            [Uploader.name]:Uploader
        },
        methods:{
            toback(){
                this.$router.go(-1)
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
                            this.phone = data.data.phone.replace(data.data.phone.substr(3,4), '*'.repeat(4))
                        }

                    })
                })
            },
            // 打开图片上传
            // uploadHeadImg: function () {
            //     this.$el.querySelector('.hiddenInput').click()
            // },
            // 将头像显示
            // handleFile: function (e) {
            //     let $target = e.target || e.srcElement
            //     let file = $target.files[0]
            //     var reader = new FileReader()
            //     reader.onload = (data) => {
            //         let res = data.target || data.srcElement
            //         this.userInfo.avatar = res.result
            //         console.log(this.userInfo.avatar)
            //     }
            //     reader.readAsDataURL(file)
            // },
            uploadHeadImg(){
                this.imgflag = true
            },
            afterRead(file) {
                console.log(file.content)
                this.imgflag = false,
                this.userInfo.data.head_img = file.content
                this.confirmchange()
            },
            // 跳转到更改用户名页
            tochangename(){
                this.$router.push('/changeusername')
            },
            // 更改信息
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
                        user_name: this.userInfo.data.name ,
                        sex:this.userInfo.data.sex,
                        head_img:this.userInfo.data.head_img,
                        birthday:this.userInfo.data.birthday,
                        address:this.userInfo.data.address,
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
            // 日期组件显示
            showData(){
                this.flag = true
            },
            // 确定日期，赋值给当前页面生日类别
            confirm(val) {
                this.flag = false
                let year = val.getFullYear();
                let month = val.getMonth() + 1;
                let day = val.getDate();
                this.userInfo.data.birthday = year + "-" + month + "-" + day
                // 发送请求给后端修改用户的生日信息
                this.confirmchange()
            },
            // 日期组件隐藏
            cancel(){
                this.flag = false
            },
            // 性别
            changesex(){
                this.show = true;
            },
            onSelect(item){
                this.show = false;
                this.userInfo.data.sex = item.name;
                this.confirmchange()
                // 发送请求给后端修改用户的sex信息
            },
            onCancel() {
                this.show = false;
            },
            // 常住地址
            changeadd(){
                this.addshow = true
            },
            hiddenadd(){
                this.addshow = false
            },
            confirmadd(val){
               let arr =  val.map((value)=>{
                    return value.name = value.name + " "
                })
                this.userInfo.data.address = arr[0] + arr[1] + arr[2]
                this.addshow = false
                this.confirmchange()
                // 发送请求给后端修改用户的常用地址信息
            },
            // 修改密码
            changepwd(){
                this.$router.push('/setpwd')
            },
            // 点击退出登录，并且跳回到登录页面
            removeinfo(){
                let token = localStorage.getItem("token")
                fetch('http://119.3.133.207:5000/user/info/',{
                    method:"DELETE",
                    mode: "no-cors",
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        token:token,
                    })
                }).then(res=> {
                    return res.json();
                }).then(data=>{
                    // console.log(data);
                    Toast(data.msg)
                }).catch(err=>{
                    console.log(err);
                })
                localStorage.clear();
                this.$router.push('/main/findSingle')
            },
        },
        created() {
            this._initUserInfo();
        },
    }
</script>

<style scoped>
.f-changeinfo{
    margin-top: -0.5rem;
    width: 100%;
    height: 6.67rem;
    background: url("../../../public/assets/images/mine/personal_center_user_bg.png") no-repeat;
    background-size: 100% 100%;
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
.f-user-picture{
    height:1.6rem;
    text-align: center;
    padding-top:0.5rem;
    box-sizing: border-box;
    position: relative;
}
.f-user-picture img{
    width:0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    border:1px solid white;
}
.f-change-pic{
    transform: scale(0.8);
    position: absolute;
    right:1.3rem;
    bottom:0.33rem;
    border-radius: 2px;
    background-color: white;
}
.f-userinfo-base{
    background-color: white;
    margin-bottom: 0.05rem;
}
.f-userinfo-set{
    background-color: white;
    margin-bottom: 0.05rem;
}
.f-userinfo-address{
    background-color: white;
    margin-bottom: 0.4rem;
}
.f-user-back{
    width:2.7rem;
    height:0.36rem;
    line-height:0.36rem;
    text-align: center;
    margin:0 auto;
    background-color: #010101;
    color:white;
    border-radius: 5px;
    font-size: 0.16rem;
    letter-spacing: 0.02rem;
}
.f-userinfo-list{
    margin:0 0.1rem;
    height: 0.45rem;
    line-height: 0.45rem;
    border-bottom: 1px solid #dedede;
}
.f-userinfo-list span:first-child{
    display: inline-block;
    width:20%;
    color:#444444;
}
.f-userinfo-list span:nth-child(2){
    display: inline-block;
    width:75%;
    color:#7a7a7a;
    font-size: 0.1rem;
}
.f-userinfo-list span:nth-child(3){
    display: inline-block;
    width:5%;
    text-align: right;
}
.f-userinfo-list .arrow{
    width:0.14rem;
    height:0.14rem;
    margin-top: 0.05rem;
}
.van-picker{
    position: absolute;
    width:100%;
    top:4rem;
}
.van-uploader__upload{
    margin: 0px !important;
}
</style>