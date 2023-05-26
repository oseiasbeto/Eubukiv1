export default [
    {
        name: 'Home',
        path: '/app/home',
        meta: {
            requiresAuth: true
        },
        component: () => import('./Views/Checkout')
    }
]