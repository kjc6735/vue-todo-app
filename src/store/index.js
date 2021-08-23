import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        userInfo:{
            username:'jaechan',
            email:'penguin_03@naver.com',
            profileImg:''
        },
        today:new Date(),
        todos:[
            { id:1, title:'숙제', todo:'수학, 국어, 하기 싫다.', done:false, created_at:'', }
        ]

    },
    mutations:{
        addTodos(state, payload){
            
        }
    },
    actions:{

    },
    getters:{
        Year(state){
            return state.today.getYear()
        },
        Month(state){
            return state.today.getMonth()

        },
        Date(state){
            return state.today.getDate()

        },
        Day(state){
            return state.today.getDay()
        }
    }
});