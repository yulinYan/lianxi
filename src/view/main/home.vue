<template>
    <home-banner  :banner='swiperInfo' v-if="swiperInfo"></home-banner>
</template>

<script>
    import homeBanner from '../../components/home/home_banner'
    import { mapGetters } from 'vuex';
    export default {
        name: "home",
        components:{
            homeBanner
        },
        computed: {
            ...mapGetters({
                goHome: 'GETHOME'
            })
        },
        data (){
            return {
                swiperInfo : [],
            }
        },
        methods:{
            _initSwiperInfo(){
                fetch('http://119.3.133.207:5000/home/banner/').then(res=>{
                    res.json().then(data => {
                        this.swiperInfo = data;
                    })
                })
            },
            // token(){
            //     if(this.goHome){
            //         localStorage.setItem("token",this.goHome)
            //     }
            // }
        },
        created() {
            this._initSwiperInfo();
            // this. token()
        },
        beforeMount() {
            // this. token()
            console.log(this.goHome)
        }
    }
</script>
<style scoped>

</style>