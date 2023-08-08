export default [

    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home/Index'),
        meta: {
            title: '首页',
            isLogin: true,
            isLandscape: false,
            keepAlive: true
        },
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('@/pages/List/Index'),
        mate: {
            title: '列表',
            isLogin: true,
            isLandscape: false
        },
    },
    {
        path: '*',
        redirect: '/'
    }
]