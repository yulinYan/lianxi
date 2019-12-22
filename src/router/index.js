// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
// import  login from "../components/login";
import home from "../view/main/home";
import mine from "../view/main/mine";
import findSingle from "../view/main/findSingle";
import chengQ from "../view/main/chengQ";
import main from "../view/main";
// 延玉琳
import series from "../components/findSingle/y_detail_classify/series";
import specific from "../components/findSingle/y_detail_classify/specific";
import sort_content from "../components/findSingle/y_detail_classify/sort_content";
import look_all from "../components/findSingle/y_detail_classify/look_all";
import brand_shop from "../components/findSingle/y_detail_classify/brand_shop";
import look_all_brand from "../components/look_all_brand";
import weiaddress from "../view/weiaddress";
import search from "../components/findSingle/search";
import puy from "../view/puy";
// import searchShow from "../components/findSingle/searchShow";
// 魏杰
import detail from "../view/detail";
import cart from "../view/cart";
import weishopa from "../view/weishopa";
// 张先森
import  maijiaxiuxiangqing from "../components/chengQ/chengQ-maijiaxiu/chengQ-maijiaxiu-xiangqing";
// 刘丰
import hotgoods from "../components/home/hotgoods";
import kinds from "../components/home/kinds";
// 殷方方
// import login from "../components/login/login";
// import register from "../components/login/register";
// import findpwd from "../components/login/findpwd";
// import setpwd from "../components/login/setpwd";
// import myorder from "../components/main/myorder";
// import allorder from "../components/main/allorder";
// import daifukuan from "../components/main/daifukuan";
// import daifahuo from "../components/main/daifahuo";
// import daishouhuo from "../components/main/daishouhuo";
// import daipingjia from "../components/main/daipingjia";
// import tuikuan from "../components/main/tuikuan";
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[

        {path:'/',redirect:'/main/home'},
        {
            path:'/main',
            component:main,
            children:[
                {
                    path:'home',
                    component:home
                },
                {
                    path:'findSingle',
                    component:findSingle,
                },
                {
                    path:'mine',
                    component:mine,
                    meta: {
                        requireAuth: true, // 判断是否需要登录
                    }},
                {path:'chengQ', component:chengQ}
            ]
        },
        // 延玉琳
        {path:'/',redirect:'/main/home'},
        {path:'/puyed',component:puy},
        {path:'/specific', component:specific},
        {path:'/lookall',component:look_all},
        {path:'/brandshop:id',component:brand_shop},
        {path:'/lookallbrand',component:look_all_brand},
        {path:'/search',component:search},
        {path:'/searchshow:id',component:()=>import('../components/findSingle/searchShow')},
        {path:'/firsttype:id',component:()=>import('../components/findSingle/y_detail_classify/first_type')},
        {path:'/brandsearch',component:()=> import('../components/findSingle/brand_search')},
        {path:'/brasearchshow:id',component:()=> import('../components/findSingle/searchShowB')},
        {
            path:'/series:id', component:series,
            // redirect:'/series/sortcontent1',
            children:[
                {
                    path:'sortcontent:id',
                    component:sort_content
                }
            ]
        },
        // 魏杰
        {path:'/detail:id',component:detail},
        {path:'/cart',component:cart},
        {path:'/weiaddress',component: weiaddress},
        {path:'/weishopa',component:weishopa},
        // 张先森
        {path:'/maijiaxiu', component:maijiaxiuxiangqing},
        {name:"d",path:'/tuijianmjx/',component:()=>import('../components/chengQ/chengQ-tuijian/chengQ-tuijian-max-xiangqing')},
        // 刘丰
        {path:'/hotgoods', component:hotgoods},
        {path:'/kinds', component:kinds},
        // 殷方方
        {path:'/login', component:()=>import('../components/login/login')},
        {path:'/register', component:()=>import('../components/login/register')},
        {path:'/findpwd', component:()=>import('../components/login/findpwd')},
        {path:'/setpwd',component:()=>import('../components/login/setpwd')},
        {path:'/changeinfo',component:()=>import('../components/main/changeinfo')},
        {path:'/changeusername',component:()=>import('../components/main/changeusername')},
        {path:'/share',component:()=>import('../components/main/share')},
        {path:'/address', component:()=>import('../components/main/address')},
        {path:'/addressedit', component:()=>import('../components/main/addressedit')},
        {
            path:'/myorder',component:()=>import('../components/main/myorder'),
            children:[
                {path:'allorder', component:()=>import('../components/main/allorder')},
                {path:'daifukuan', component:()=>import('../components/main/daifukuan')},
                {path:'daifahuo', component:()=>import('../components/main/daifahuo')},
                {path:'daishouhuo', component:()=>import('../components/main/daishouhuo')},
                {path:'daipingjia', component:()=>import('../components/main/daipingjia')},
                {path:'tuikuan', component:()=>import('../components/main/tuikuan')},
            ]
        }
    ],

})


export default router