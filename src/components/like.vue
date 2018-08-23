<template>
    <div>
        <button v-if="liked" @click="toggleLike">Unlike</button>
        <button v-if="! liked" @click="toggleLike">Like</button>

        <div>{{likes}} Likes</div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";

export default {
    computed: {
        ... mapGetters(['likes', 'liked'])
    },
    methods: {
        toggleLike(){
            this.$store.dispatch('toggleLike');
        }
    }
};
</script>
