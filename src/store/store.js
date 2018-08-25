import Vue from "vue"
import Vuex from "vuex"
import likesModule from "./modules/likesModule"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: {
        likesModule: likesModule
    }
});

export default store;