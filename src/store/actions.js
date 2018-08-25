const actions = {
    increaseAfter1Second({commit}){
        setTimeout(function (){
            commit('increase');
        }, 1000);
    }
};

export default actions;