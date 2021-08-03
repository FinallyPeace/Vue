<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div id="nav">
            <!-- to="/about/info" -->
            <router-link :to="{ name: 'about-info' }">Info</router-link> |
            <router-link :to="{ name: 'about-youtube' }">YouTube</router-link>
        </div>
        <router-view />
    </div>
</template>

<style scoped>
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
