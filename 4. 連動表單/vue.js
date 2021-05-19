let data = {
    input: {
        type: null,
        content: null
    },
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
        typeList() {
            let obj = {
                sort: [], // type 排序
                map: {} // type 對應表
            }
            this.menu.forEach((item, index) => {
                let { type, content, link } = item
                // 如果這個 type 還沒塞過，那就先 push 這個 type
                if (!obj.map[type]) {
                    obj.sort.push(type)
                    // 初始化
                    obj.map[type] = {
                        sort: [], // content 排序
                        map: {} // content 對應表
                    }
                }
                obj.map[type].sort.push(content)
                obj.map[type].map[content] = { index, content, link }
            })
            return obj
        },
        contentList() {
            this.input.content = null
            if (this.input.type) {
                return this.typeList.map[this.input.type]
            } else {
                return []
            }
        },
        output() {
            if (this.input.content) {
                return this.contentList.map[this.input.content]
            } else {
                return null
            }
        }
    }
})
