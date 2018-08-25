import Vue from "vue"
import Vuex from "vuex"
import likesModule from "./likesModule"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
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
    },
    mutations: {
        increase(state){
            state.counter++;
        },
        decrease(state){
            state.counter--;
        },
        n_increase(state, payload){
            state.counter += payload.amount;
        }
    },
    actions: {
        increaseAfter1Second({commit}){
            setTimeout(function (){
                commit('increase');
            }, 1000);
        }
    },
    modules: {
        likesModule: likesModule
    }
});

export default store;