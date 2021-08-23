import Vue from 'vue';
import VueRouter from 'vue-router';
import Today from '../views/Today';
import Complete from '../views/Complete';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/today',
            component: Today
        },
        {
            path:'/complete',
            component: Complete
        },
        {
            path:'/project',
            component: Today
        },
        {
            path:'/test',
            component: Today
        },
    ]
})