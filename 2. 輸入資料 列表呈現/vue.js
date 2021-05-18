let data = {
    input: {
        type: '主餐',
        content: ''
    },
    menu: [
        { type: '沙拉', content: '煙燻鮭魚', link: '/' },
        { type: '沙拉', content: '炭烤雞肉', link: 'javascript:;' },
        { type: '主餐', content: '德國豬腳', link: 'javascript:;' },
        { type: '主餐', content: '法式羊排', link: 'javascript:;' },
        { type: '甜點', content: '焦糖布蕾', link: 'javascript:;' },
        { type: '甜點', content: '抹茶冰淇淋', link: 'javascript:;' },
        { type: '飲料', content: '長島冰茶', link: 'javascript:;' },
        { type: '飲料', content: 'Mojito', link: 'javascript:;' }
    ]
}

let vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        inputHandler() {
            if (this.input.content) {
                this.menu.push({
                    type: this.input.type,
                    content: this.input.content,
                    link: 'javascript:;'
                })
                this.input.content = ''
            }
        }
    }
})
