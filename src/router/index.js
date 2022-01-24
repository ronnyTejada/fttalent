import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import Services from "../components/Services.vue"
import About from "../components/About.vue"
import Clientes from "../components/Clientes.vue"


Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home,
        
    },
    {
        path:'/services',
        name:'Services',
        component:Services,
        
    },
    {
        path:'/about',
        name:'About',
        component:About,
        
    },
    {
        path:'/clientes',
        name:'Clientes',
        component:Clientes,
        
    },
]


const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})


export default router;