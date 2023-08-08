<template>
    <div class="list">
        this is list
    </div>
</template>

<script>
import api from '@/api/list'
// import utils from '@/utils/utils'
export default {
    name: 'Index',
    data() {
        return {
        }
    },
    created() {
        this.getList()
    },
    mounted() {
        console.log('mounted')
    },
    methods: {
        getList() {
            api.getList().then(res => {
                console.log(res, 'this is res')
            })
        }
    }
}
</script>

<style lang="less" scope>

</style>