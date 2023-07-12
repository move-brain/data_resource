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
                redirect: "gowuche/unpaid",
                component: () =>
                    import ('@/views/workbench/components/gowuche/gowuche.vue'),
                children: [{
                        path: "unpaid",
                        name: "unpaid",
                        component: () =>
                            import ('@/views/workbench/components/gowuche/unpaidView.vue'),
                    },
                    {
                        path: "/purchaseHistory",
                        name: "purchaseHistory",
                        component:
                            () =>
                            import ('@/views/workbench/components/gowuche/purchaseHistory.vue'),
                    }
                ]
            },
            {
                path: 'proManage',
                name: 'proManage',
                redirect:"proManage/manage",
                component: () =>
                    import ('@/views/workbench/components/proManage/index.vue'),
                    children:[
                        {
                            
                                path: "manage",
                                name: "manage",
                                component:
                                    () =>
                                    import ('@/views/workbench/components/proManage/proManage.vue'),
                            
                        },
                        {
                            path:'applyProject',
                            name: "applyProject",
                            component:
                                () =>
                                import ('@/views/workbench/components/proManage/applyProject.vue'),
                        },
                        {
                            path: 'applyInformation',
                            name: 'applyInformation',
                            // redirect:"applyInformation/itemReport",
                            component: () => import('@/views/workbench/components/proManage/applyInformation.vue'),
                            children: [
                            //     {
                            //     path: 'itemReport',
                            //     name: 'itemReport',
                            //     component: () => import('@/views/workbench/components/proManage/itemReport.vue'),
                            // },{
                            //     path: 'publication',
                            //     name: 'publication',
                            //     component: () => import('@/views/workbench/components/proManage/publication.vue'),
                            // },{
                            //     path: 'meetReport',
                            //     name: 'meetReport',
                            //     component: () => import('@/views/workbench/components/proManage/meetReport.vue'),
                            // },{
                            //     path: 'projectResult',
                            //     name: 'projectResult',
                            //     component: () => import('@/views/workbench/components/proManage/projectResult.vue'),
                            // }
                            {
                                path: '/information/applicationInformation',
                                name: 'applicationInformation',
                                component: () => import('@/views/workbench/components/proManage/applicationInformation.vue'),
                            },{
                                path: '/information/teamInformation',
                                name: 'teamInformation',
                                component: () => import('@/views/workbench/components/proManage/teamInformation.vue'),
                            },{
                                path: '/information/payInfo',
                                name: 'payInfo',
                                component: () => import('@/views/workbench/components/proManage/payInfo.vue'),
                            },{
                                path: '/information/updateRequirements',
                                name: 'updateRequirements',
                                component: () => import('@/views/workbench/components/proManage/updateRequirements.vue'),
                            },{
                                path: '/information/message',
                                name: 'message',
                                component: () => import('@/views/workbench/components/proManage/message.vue'),
                            },{
                                path: '/information/dataOfInfo',
                                name: 'dataOfInfo',
                                component: () => import('@/views/workbench/components/proManage/dataOfInfo.vue'),
                            },{
                                path: '/information/processManagement',
                                name: 'processManagement',
                                redirect:"/information/processManagement/itemReport",
                                component: () => import('@/views/workbench/components/proManage/processManagement.vue'),
                                children: [{
                                    path: '/information/processManagement/itemReport',
                                    name: 'itemReport',
                                    component: () => import('@/views/workbench/components/proManage/itemReport.vue'),
                                },{
                                    path: '/information/processManagement/publication',
                                    name: 'publication',
                                    component: () => import('@/views/workbench/components/proManage/publication.vue'),
                                },{
                                    path: '/information/processManagement/meetReport',
                                    name: 'meetReport',
                                    component: () => import('@/views/workbench/components/proManage/meetReport.vue'),
                                },{
                                    path: '/information/processManagement/projectResult',
                                    name: 'projectResult',
                                    component: () => import('@/views/workbench/components/proManage/projectResult.vue'),
                                }]
                            }
                        ]
                        }
                    ]
            },
            {
                    path: 'foursidebar',
                    name: 'foursidebar',
                    component: () =>
                        import ('@/views/workbench/components/foursidebar.vue'),
                        children:[
                            {
                                    path: "usercentre",
                                    name: "usercentre",
                                    component:
                                        () =>
                                        import ('@/views/workbench/components/usercentre/index.vue'),
                                        children:[
                                            {
                                                path: 'basicinformation',
                                                name: 'basicinformation',
                                                component: () =>
                                                    import ('@/views/workbench/components/usercentre/basicinformation.vue'),
                                            },
                                            {
                                                path: 'accessSecurity',
                                                name: 'accessSecurity',
                                                component: () =>
                                                    import ('@/views/workbench/components/usercentre/accessSecurity.vue'),
                                            },
                                            {
                                                path: 'Dataplatform',
                                                name: 'Dataplatform',
                                                component: () =>
                                                    import ('@/views/workbench/components/usercentre/Dataplatform.vue'),
                                            },
                                            {
                                                path: 'subscription',
                                                name: 'subscription',
                                                component: () =>
                                                    import ('@/views/workbench/components/usercentre/subscription.vue'),
                                            },
                                        ]
                            },
                            {
                                path: "msgCenter",
                                name: "msgCenter",
                                component:
                                () =>
                                import ('@/views/workbench/components/msgCenter/index.vue'),
                            }
                          
                        ]
                
            },
            {
                path:'orfoursidebar',
                name:'orfoursidebar',
                component: () =>
                import ('@/views/workbench/components/orfoursidebar.vue'),
                children:[
                    {
                        path:'personmanage',
                        name:'personmanage',
                        component: () =>
                        import ('@/views/workbench/components/personmanage/personmanage.vue'),
                    },
                    {
                        path:'orapprove',
                        name:'orapprove',
                        component: () =>
                        import ('@/views/workbench/components/orapprove/index.vue'),
                    }
                ]
            }
        ]
    }, {
        path: '/intelligentPlatform',
        name: 'intelligentPlatform',
        redirect:'/intelligentPlatform/Platformhomepage',
        component: () =>
            import ('@/views/intelligentPlatform/index.vue'),
            children:[
                {
                    path:'Platformhomepage',
                    name:'Platformhomepage',
                    component:
                            () =>
                            import ('@/views/intelligentPlatform/components/homepage/index.vue'),
                },
                {
           path:'specialData',
            name:'specialData', 
            redirect:'specialData/libraryManagementView',
               component:()=>import('@/views/intelligentPlatform/components/specialData/index.vue'),
               children:[
                {
                    path:'libraryManagementView',
                    name:'libraryManagementView',
                    redirect:'specialData/libraryManagementView/databaseView',
                    component:()=>import('@/views/intelligentPlatform/components/specialData/libraryManagementView.vue'),
                    children:[
                        {
                            path:'databaseView',
                            name:'databaseView',
                            component:()=>import('@/views/intelligentPlatform/components/specialData/databaseView.vue'),
                        },
                        {
                            path:'tableView',
                            name:'tableView',
                            component:()=>import('@/views/intelligentPlatform/components/specialData/tableView.vue'),
                        },
                        {
                            path:'fieldView',
                            name:'fieldView',
                            component:()=>import('@/views/intelligentPlatform/components/specialData/databaseView.vue'),
                        }
                    ]
                },
                {
                    path:'dataUpdating',
                    name:'dataUpdating',
                    component:()=>import('@/views/intelligentPlatform/components/specialData/dataUpdatingView.vue'),
                }
               ]
                },
                {
                        path: "dataManage",
                        name: "dataManage",
                        redirect:'/intelligentPlatform/dataManage/categoryRegister',
                        component:
                            () =>
                            import ('@/views/intelligentPlatform/components/dataManage/index.vue'),
                            children:[
                                {
                                    path:'catalogAudit',
                                    name: "catalogAudit",
                                    component:
                                        () =>
                                        import ('@/views/intelligentPlatform/components/dataManage/components/catalogAudit.vue'),
                                }       ,
                            {
                                path:'issue',
                                name:"issue",
                                component:
                                    () =>
                                    import ('@/views/intelligentPlatform/components/dataManage/components/issue.vue'),
                            }     ,
                            {
                                path:'catalogAudit2',
                                name:"catalogAudit2",
                                component:
                                    () =>
                                    import ('@/views/intelligentPlatform/components/dataManage/components/catalogAudit2.vue'),
                            }  ,{
                                path:'categoryRegister',
                                name:"categoryRegister",
                                component:
                                    () =>
                                    import ('@/views/intelligentPlatform/components/dataManage/components/categoryRegister.vue'),
                            }
                           ]
                }
            ]
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