const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    avatar: 'https://s2.ax1x.com/2020/01/17/1SCadg.png',
                    slogan: '努力的最佳时候就是昨天和现在,学无止境',
                    name: 'FZY′blog',
                    domain: 'https://chenwang.info',
                    notice: 'VUe/PHP/MYSQL',
                    desc: '一个It技术的探索者'
                }
            }
        }
    },
    // 站点社交信息
    {
        url: '/social',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'QQ',
                        icon: 'iconqq',
                        color: '#1AB6FF ',
                        href: 'http://wpa.qq.com/msgrd?v=3&uin=641421366&site=qq&menu=yes'
                    },
                    {
                        id: 2,
                        title: 'Gitee',
                        icon: 'icongitee',
                        color: '#d81e06',
                        href: '#'
                    },
                    {
                        id: 3,
                        title: 'GitHub',
                        icon: 'icongithub',
                        color: '',
                        href: '#'
                    },
                ]
            }
        }
    }
]