export const rank = [{
        id: 1,
        label: '一级'
    },
    {
        id: 2,
        label: '二级'
    },
    {
        id: 3,
        label: '三级'
    },
    {
        id: 4,
        label: '四级'
    },
]
export const sidebarrouters = [{
        path: '/dataBrowse',
        name: '数据说明',
        component: () =>
            import ('@/components/dataBrowse.vue'),
    },
    {
        path: 'populationCharacteristic/:id', //动态路由
        name: 'poc',
        props: true,
        component: () =>
            import ('@/components/populationCharacteristic.vue'),
    },
    {
        path: '/populationCharacteristic/baselineCharacterization/data/:id', //动态路由
        name: 'fielddata',
        component: () =>
            import ('@/components/baselinedata.vue'),
        meta: {
            rank: 2,
            datafield: true
        }
    }
]