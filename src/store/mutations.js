const mutations = {
    increase(state){
        state.counter++;
    },
    decrease(state){
        state.counter--;
    },
    n_increase(state, payload){
        state.counter += payload.amount;
    }
};

export default mutations;
