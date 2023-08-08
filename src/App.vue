<template>
    <div id="app" class="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {}
    },
    created() {
        //
    }
}
</script>

<style scope lang="less">
* {
    box-sizing: border-box;
    margin: 0;
    border: 0;
}
html, body, #app, .app {
    width: 100%;
    height: 100%;
}
.full-screen {
    width: 100%;
    height: 100%;
}
.full-width {
    width: 100%;
}
.full-height {
    height: 100%;
}
.flex-box {
    display: flex;
}
</style>
