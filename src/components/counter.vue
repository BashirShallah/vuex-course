<template>
    <div>
        <h2>Counter</h2>
        Counter: {{counter}}

        <button @click="increase">Increase</button>
        <button @click="decrease">Decrease</button>
    </div>
</template>

<script>
export default {
    props: ["counter"],
    methods: {
        increase (){
            this.$emit('increase');
        },
        decrease (){
            this.$emit('decrease');
        }
    }
}
</script>
