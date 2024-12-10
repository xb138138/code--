<script setup>
    import { ref, computed, watch } from 'vue'
    const fName = ref('')
    const lName = ref('')
    // const fullName = computed(() =>  fName.value +''+ lName.value)
    const fullName = computed({
        get() {
            return fName.value + ' ' + lName.value
        },
        set(value) {
            const names = value.split(' ')
            fName.value = names[0]
            lName.value = names[1]
        }
    })
    watch([fullName], (newVal, oldVal) => {
        console.log('fullName发生了改变', newVal, oldVal);
    })
</script>

<template>
    <div>
        <input type="text" v-model="fName">
        +
        <input type="text" v-model="lName">
        =
        <input type="text" v-model="fullName">
    </div>
</template>

<style scoped>

</style>