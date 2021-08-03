<template src="./template.html"> </template>
<style src="./style.css" scoped></style>

<script>
export default {
    name: "input-component",
    props: {
        text: {
            type: String,
            required: true,
            // default: '預設的值'
        },
    },
    /* 只用 props 改值時會出錯，需要多過一層 computed。
    不允許直接從子Component(index.vue)去修改外部(App.vue)資料，
    因為資料是外部傳給你的，不屬於子組件 
    */
    computed: {
        inputText: {
            get() {
                return this.text;
            },
            set(val) {
                console.log(val);
                // $emit(要傳遞的自訂事件名稱, 傳遞參數)
                // this.$emit('textChange', val)
                this.$emit('update:text', val)
            },
        },
    },
};
</script>
