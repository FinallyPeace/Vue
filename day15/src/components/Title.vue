<!-- 單一檔案的模板 -->
<template>
    <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
    name: "titleComponent",
    // 1.Component 會重複共用, 所以 data 不用物件改用 function 方式較適合 (寫死值)
    // data(){
    //     return {
    //         title:'Hello 練家麟'
    //     }
    // }

    // 2.用 props 接檔 (App.vue 給值)
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<!-- 用 scoped 封裝 css, 只能在這個模板的範圍內 -->
<style scoped>
h1.title {
    color: rgb(65, 184, 131);
}
</style>
