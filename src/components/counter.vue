<template>
    <div>
        <h2>Counter</h2>
        Counter: {{counter}} <br />
        doubledCounter: {{doubledCounter}} <br />
        Counter * 3: {{multiCounter}} <br />

        <button @click="increase">Increase</button>
        <button @click="decrease">Decrease</button>
        <button @click="n_increase">+5</button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    computed:{
        ... mapGetters(["counter", "doubledCounter"]),
        multiCounter(){
            return this.$store.getters.multiCounter(3);
        }
    },
    methods: {
        ... mapMutations(["increase", "decrease"]),
        n_increase(){
            this.$store.commit("n_increase", {
                amount: 5
            });
        }
    }
}
</script>
