<script>
    import { ref } from 'vue'
    export default {
        setup() {
            const count = ref(0)
            return {
                count
            }
        }
    }
</script>

<template>
    <div>
        <div>
            <h2>count:{{count}}</h2>
            <input v-model="count" />
        </div>
    </div>
</template>

<style scoped>

</style>