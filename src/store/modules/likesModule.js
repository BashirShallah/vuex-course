const likesModule = {
    namespaced: true,
    state:{
        liked: false,
        likes: 10
    },
    getters:{
        total(state){
            return state.likes;
        },
        likes(state, getters, rootState){
            // console.log(state);
            // console.log(rootState);
            return state.likes;
        },
        liked(state){
            return state.liked;
        }
    },
    mutations:{
        toggleLike(state){
            state.liked = ! state.liked;
        },
        increaseLikes(state){
            state.likes += 1;
        },
        decreaseLikes(state){
            state.likes -= 1;
        }
    },
    actions:{
        toggleLike(context){
            setTimeout(function() {
                context.commit("toggleLike");

                if(context.state.liked){
                    context.commit("increaseLikes");
                } else {
                    context.commit("decreaseLikes");
                }
            }, 1000);
        }
    },
}

export default likesModule;
