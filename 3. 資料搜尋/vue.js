let data = {
    input: { type: '全部', content: '' },
    menu: [
        { type: '沙拉', content: '煙燻鮭魚', link: '/' },
        { type: '沙拉', content: '炭烤雞肉', link: '/' },
        { type: '沙拉', content: '鮮蝦蘆筍', link: '/' },
        { type: '沙拉', content: '水果生菜', link: '/' },
        { type: '主餐', content: '菲力牛排', link: '/' },
        { type: '主餐', content: '德國豬腳', link: '/' },
        { type: '主餐', content: '法式羊排', link: '/' },
        { type: '主餐', content: '清蒸龍蝦', link: '/' },
        { type: '甜點', content: '焦糖布蕾', link: '/' },
        { type: '甜點', content: '千層蛋糕', link: '/' },
        { type: '甜點', content: '提拉米蘇', link: '/' },
        { type: '甜點', content: '抹茶冰淇淋', link: '/' },
        { type: '飲料', content: '美式咖啡', link: '/' },
        { type: '飲料', content: '東方美人茶', link: '/' },
        { type: '飲料', content: '紅茶拿鐵', link: '/' },
        { type: '飲料', content: 'Mojito', link: '/' }
    ]
}
let vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        typeMenu() {
            if (this.input.type != '全部') {
                return this.menu.filter((item) => {
                    return item.type == this.input.type
                })
            } else {
                return this.menu
            }
        },
        contentMenu() {
            if (this.input.content) {
                return this.typeMenu.filter((item) => {
                    let content = item.content.toLowerCase()
                    let keyword = this.input.content.toLowerCase()
                    return content.indexOf(keyword) != -1
                })
            } else {
                return this.typeMenu
            }
        }
    }
})
