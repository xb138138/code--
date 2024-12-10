<template>
    <div class="search">
        <div>
            <input v-model="skey">
            <button @click="search()">查询</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skey: ''
        }
    },
    methods: {
        search() {
            this.$router.push({
                path: '/goods', //hash地址
                query: {  //地址栏参数
                    skey: this.skey
                }
            },()=>{})
        }

    }
}

</script>

<style lang="scss" scoped>
.search {
    background: white;
    padding: 5px 0px;

    div {
        width: 1200px;
        margin: 0px auto;
        text-align: right;

        button {
            padding: 5px 10px;
            margin-left: 10px;
        }
    }
}
</style>