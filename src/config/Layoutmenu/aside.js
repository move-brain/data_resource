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
export const sidebarmenu = [{
        id: '1',
        path: '/populationCharacteristic',
        label: '人口特征',
        children: [{
                id: '1-1',
                path: '/populationCharacteristic/continueCharacteristic',
                label: '持续特征',
            },
            {
                id: '1-2',
                path: '/populationCharacteristic/baselineCharacterization',
                label: '基线特征',
                children: [{
                    id: '1-2-1',
                    path: 'aaa',
                    label: '多重剥夺指数',
                }]
            }
        ]
    },
    {
        id: '2',
        path: '/bbb',
        label: '评估中心',
        children: [{
            id: '2-1',
            path: '/bbb/ccc',
            label: '2-1',
        }]
    },
    {
        id: '3',
        path: '/bbb',
        label: '基因组学',
        children: [{
            id: '3-1',
            path: '/bbb/ccc',
            label: '3-1',
        }]
    }, {
        id: '4',
        path: '/bbb',
        label: '线上追踪',
        children: [{
            id: '4-1',
            path: '/bbb/ccc',
            label: '4-1',
        }]
    }, {
        id: '5',
        path: '/bbb',
        label: '外接数据',
        children: [{
            id: '5-1',
            path: '/bbb/ccc',
            label: '5-1',
        }]
    }, {
        id: '6',
        path: '/bbb',
        label: '相关信息',
        children: [{
            id: '6-1',
            path: '/bbb/ccc',
            label: '6-1',
        }]
    }
]
export const sidebarrouters = [{
        path: '/dataBrowse',
        name: '数据说明',
        component: () =>
            import ('@/components/dataBrowse.vue'),
        meta: {
            rank: 1
        }
    },
    {
        path: '/populationCharacteristic',
        name: '人口特征',
        component: () =>
            import ('@/components/populationCharacteristic.vue'),
        meta: {
            rank: 1
        }
    },
    {
        path: '/populationCharacteristic/continueCharacteristic',
        name: '持续特征',
        component: () =>
            import ('@/components/continueCharacteristic.vue'),
        meta: {
            rank: 2
        }
    },
    {
        path: '/populationCharacteristic/continueCharacteristic/continuedata',
        name: '持续数据字段',
        component: () =>
            import ('@/components/continuedata.vue'),
        meta: {
            rank: 2,
            datafield: true //判断是不是拿来显示数据字段的页面
        }
    },
    {
        path: '/populationCharacteristic/baselineCharacterization',
        name: '基线特征',
        component: () =>
            import ('@/components/baselineCharacterization.vue'),
        meta: {
            rank: 2,

        }
    },
    {
        path: '/populationCharacteristic/baselineCharacterization/baselinedata',
        name: '基线数据字段',
        component: () =>
            import ('@/components/baselinedata.vue'),
        meta: {
            rank: 2,
            datafield: true
        }
    }



    // {

    //     path: '/bbb',
    //     label: '评估中心',
    //     children: [{
    //         id: '2-1',
    //         path: '/bbb/ccc',
    //         label: '2-1',
    //     }]
    // },
    // {
    //     id: '3',
    //     path: '/bbb',
    //     label: '基因组学',
    //     children: [{
    //         id: '3-1',
    //         path: '/bbb/ccc',
    //         label: '3-1',
    //     }]
    // }, {
    //     id: '4',
    //     path: '/bbb',
    //     label: '线上追踪',
    //     children: [{
    //         id: '4-1',
    //         path: '/bbb/ccc',
    //         label: '4-1',
    //     }]
    // }, {
    //     id: '5',
    //     path: '/bbb',
    //     label: '外接数据',
    //     children: [{
    //         id: '5-1',
    //         path: '/bbb/ccc',
    //         label: '5-1',
    //     }]
    // }, {
    //     id: '6',
    //     path: '/bbb',
    //     label: '相关信息',
    //     children: [{
    //         id: '6-1',
    //         path: '/bbb/ccc',
    //         label: '6-1',
    //     }]
    // }
]