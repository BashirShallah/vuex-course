const getters = {
    total(state){
        return state.counter;
    },
    counter(state){
        // console.log(state.likesModule.likes);
        return state.counter;
    },
    doubledCounter(state){
        return state.counter * 2;
    },
    multiCounter: (state) => (multi) => {
        return state.counter * multi;
    }
};

export default getters;