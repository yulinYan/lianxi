const FINDURL = 'http://127.0.0.1:3000/findSingle'
// 192.168.0.114
// 101.200.219.118
// 10.35.167.54
export default {

    /**
     * 获取主页的信息
     */
    async getFindSingleInfo () {
        let res = await fetch(FINDURL)
        let data = await res.json()
        return data
    },


}