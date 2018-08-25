<template>
    <div>
        <button v-if="liked" @click="toggleLike">Unlike</button>
        <button v-if="! liked" @click="toggleLike">Like</button>

        <div>{{getTotal}} Likes</div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";

export default {
    computed: {
        ... mapGetters('likesModule', ['likes', 'liked']),
        getLikes(){
            return this.$store.getters['likesModule/likes'];
        },
        getTotal(){
            return this.$store.getters['likesModule/total'];
        }
    },
    methods: {
        toggleLike(){
            this.$store.dispatch('likesModule/toggleLike');
        }
    }
};
</script>
