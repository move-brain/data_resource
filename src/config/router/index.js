export const Routerslist = [{
        path: '/',
        name: 'index',
        component: () =>
            import ('@/views/index.vue'),
    },
    {
        path: '/dataResource',
        name: 'dataResource',
        redirect: "/dataResource/homepage",
        component: () =>
            import ('@/views/dataResource/index.vue'),
        children: [{
                path: 'homepage',
                name: 'homepage',
                component: () =>
                    import ('@/views/dataResource/components/homepage/index.vue'),
            },
            {
                path: 'dataBrowse',
                name: 'dataBrowse',
                redirect: "dataResource/dataBrowse/Browsehomepage",
                component: () =>
                    import ('@/views/dataResource/Layout/layout.vue'),
                children: [{
                        path: 'Browsehomepage',
                        name: 'Browsehomepage',
                        component: () =>
                            import ('@/views/dataResource/components/dataBrowse/dataBrowse.vue'),
                    },
                    {
                        path: 'populationCharacteristic/:id', //动态路由
                        name: 'poc',
                        props: true,
                        component: () =>
                            import ('@/views/dataResource/components/dataBrowse/populationCharacteristic.vue'),
                    },
                    {
                        path: 'populationCharacteristic/baselineCharacterization/data/:id', //动态路由
                        name: 'fielddata',
                        component: () =>
                            import ('@/views/dataResource/components/dataBrowse/baselinedata.vue'),
                    },
                ]
            },
            {
                path: 'datasearch',
                name: 'datasearch',
                component: () =>
                    import ('@/views/dataResource/components/datasearch/datasearch.vue'),
            },
            {
                path: 'tools',
                name: 'tools',
                component: () =>
                    import ('@/views/dataResource/components/Tools/index.vue'),
            },
            {
                path: 'userNotice',
                name: 'userNotice',
                component: () =>
                    import ('@/views/dataResource/components/userNotice/index.vue'),
            },
        ]
    },
    {
        path: '/workbench',
        name: 'workbench',
        redirect: "workbench/workindex",
        component: () =>
            import ('@/views/workbench/index.vue'),
        children: [{
                path: 'workindex',
                name: 'workindex',
                component: () =>
                    import ('@/views/workbench/components/homepage/index.vue'),
            },
            {
                path: 'gowuche',
                name: 'gowuche',
                component: () =>
                    import ('@/views/workbench/components/gowuche/gowuche.vue'),
            }
        ]
    }, {
        path: '/intelligentPlatform',
        name: 'intelligentPlatform',
        component: () =>
            import ('@/views/intelligentPlatform/index.vue'),
    }, {
        path: '/user',
        name: 'user',
        redirect: "/user/login",
        component: () =>
            import ('@/views/user/user.vue'),
        children: [{
                path: '/login',
                name: 'login',
                component: () =>
                    import ('@/views/user/login.vue'),
            },
            {
                path: '/forgetname',
                name: 'forgetname',
                component: () =>
                    import ('@/views/user/forgetname.vue'),
            },
            {
                path: '/forgetpass',
                name: 'forgetpass',
                component: () =>
                    import ('@/views/user/forgetpass.vue'),
            },
            {
                path: '/orRegister',
                name: 'orRegister',
                component: () =>
                    import ('@/views/user/orRegister.vue'),
            },
            {
                path: '/perRegister',
                name: 'perRegister',
                component: () =>
                    import ('@/views/user/perRegister.vue'),
            },
        ]
    }
]