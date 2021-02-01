
import Index from '../view/index';
import Home from '../view/home';
export default [
    {
        from:'/',
        to:'/index'
    },
    {
        name:'Index',
        path:'/index',
        component:Index,
    },
    {
        name:'Home',
        path:'/home',
        component:Home
    }
]