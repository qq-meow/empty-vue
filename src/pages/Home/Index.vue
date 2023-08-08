<template>
    <div class="home">
        this is home
    </div>
</template>

<script>
import api from '@/api/home';
// import utils from '@/utils/utils'
export default {
    name: 'Index',
    data() {
        return {};
    },
    created() {
        this.getHome();
    },
    mounted() {
        console.log('mounted')
    },
    methods: {
        getHome() {
            api.getHome().then((res) => {
                console.log(res, 'this is res');
            });
        },
    },
};
</script>

<style lang='less' scope>
.home {
    width: 100%;
    height: 100%;
    position: relative;
    background: #f5f5f5;
}
</style>