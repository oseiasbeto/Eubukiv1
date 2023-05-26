export default [
     {
        name: '',
        path: '/',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    },
    {
        name: 'Página Inicial',
        path: '/dashboard',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    },
    {
        name: 'Bibilioteca',
        path: '/library',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    },
    {
        name: 'Novo conteúdo',
        path: '/newcontent',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    },
    {
        name: 'Sou Escritor(a)',
        path: '/mycontents',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    },
    {
        name: 'Visualizar livro',
        path: '/book/:id',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    },
    {
        name: 'Minha Conta',
        path: '/myaccount',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    },
    {
        name: 'Favoritos',
        path: '/favorites',
        meta: {
            requiresAuth: true
        },
        component: () => import('./AppView.vue')
    }
]