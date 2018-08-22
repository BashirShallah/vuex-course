<template>
    <div>
        <h2>Counter</h2>
        Counter: {{counter}} <br />
        doubledCounter: {{doubledCounter}} <br />
        Counter * 3: {{multiCounter}} <br />

        <button @click="increase">Increase</button>
        <button @click="decrease">Decrease</button>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed:{
        ... mapGetters(["counter", "doubledCounter"]),
        multiCounter(){
            return this.$store.getters.multiCounter(3);
        }
    },
    methods: {
        increase (){
            this.$store.state.counter ++;
        },
        decrease (){
            this.$store.state.counter --;
        }
    }
}
</script>
