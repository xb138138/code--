<script setup>
    import { reactive, ref } from 'vue'
    const count = ref(0)

    const name = ref('zhangsan')

    const hobbys = reactive(['吃饭'])
    const bata = ref('')
    const hobbys_count = ref()
    const push = () => {
        hobbys.push(bata.value)
        bata.value = ''
    }
    const splice = () => {
        hobbys.splice(hobbys_count.value-1, 1)
    }

    const obj = ref({
        name: 'zhangsan',
        age: 18
    })
    const addPro = () => {
        obj.value.sex = '男'
    }
    const Delete = () => {
        delete obj.value.name
    }

</script>

<template>
    <div>
        <div>
            <h2>count:{{count}}</h2>
            <input v-model="count" />
        </div>
        <div>
            <h2>name:{{name.toUpperCase()}}</h2>
            <input v-model="name" />
        </div>
        <div>
            <h2>hobbys:{{hobbys}}</h2>
            <input type="text" v-model="bata" />
            <input type="button" value="添加" @click="push">
            <br>
            <input type="number" v-model="hobbys_count" />
            <button @click="splice">删除</button>
        </div>
        <div>
            <h2>{{obj}}</h2>
            姓名：<input type="text" v-model="obj.name">
            <br>
            年龄:<input type="text" v-model.number="obj.age">
            <br>
            <button @click="addPro">增加属性</button>
            <button @click="Delete">删除属性</button>
        </div>
    </div>
</template>

<style scoped>

</style>