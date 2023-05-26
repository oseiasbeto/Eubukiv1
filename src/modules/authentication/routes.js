export default [
    {
        name: 'Iniciar sessão no Eubuki',
        path: '/account/auth',
        meta: {
            requiresVisitor: true
        },
        component: () => import('./AppView')
    },
    {
        name: 'Criar uma Conta',
        path: '/account/signup',
        meta: {
            requiresVisitor: true
        },
        component: () => import('./AppView')
    },
    {
        name: 'Esqueceste a senha',
        path: '/account/forgout_password',
        meta: {
            requiresVisitor: true
        },
        component: () => import('./AppView')
    }
]