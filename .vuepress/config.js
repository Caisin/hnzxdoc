module.exports = {
    //开发端口
    port: "3000",
    //编译生成目录
    dest: "acct-doc",
    base: "/acct-doc/",
    // title: 'CMPAK Account Management Document',
    // description: 'CMPAK Account Management Document',
    //多语言配置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'CMPAK 账管文档',
            description: 'CMPAK 账管交维文档'
        },
        '/en/': {
            lang: 'en-US',
            title: 'CMPAK Account Management Document',
            description: 'CMPAK Account Management Document'
        }
    },
    //主题配置
    themeConfig: {
        //仓库地址
        repo: "http://8.208.26.203:18082/cmpak/acctmanm",
        //文档地址
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: "http://8.208.26.203:18082/cmpak/acctmanm",
        editLinks: true,
        docsDir: 'doc',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'develop',
        // 默认是 false, 设置为 true 来启用
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        //是否显示所有标题目录
        // displayAllHeaders: true,
        /*  "/":{
              sidebar: 'auto'
          },*/
        locales: {
            '/': genZhLocales(),
            '/zh/': genZhLocales(),
            "/en/": genEnLocales(),
        }

    }
};

function genEnLocales() {
    return {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on Gogs',
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
            }
        },
        nav: [
            {text: 'Home', link: '/en/'},
            // {text: 'Deploy', link: '/en/deploy/'},
            {text: 'Environment', link: '/en/environment/'},
            {text: 'AssetCenter',link: "/en/assetcenter/"},
            {text: 'CSF Service',link: "http://172.25.132.86:9000/cmpk-api/"}
        ],
        sidebar: {
            "/en/environment/": genSingleSideBar("Environment"),
            "/en/deploy/": genSingleSideBar("Deploy"),
            "/en/assetcenter/": assetSideBar(true),
        }
    }
}
function genZhLocales() {
    return {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 Gogs 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
        },
        nav: [
            {text: '首页', link: '/zh/'},
            {text: '发布', link: '/zh/deploy/'},
            {text: '环境', link: '/zh/environment/'},
            { text: '数据脚本', link: "/zh/db/"},
            {text: '缓存',link: "/zh/cache/"},
            {text: '参数',link: "/zh/param/"},
            {text: '资产中心',link: "/zh/assetcenter/"},
            {text: 'CSF 服务',link: "http://172.25.132.86:9000/cmpk-api/"}
        ],
        sidebar: {
            "/zh/environment/": genSingleSideBar("环境"),
            "/zh/deploy/": genSingleSideBar("发布"),
            "/zh/assetcenter/": assetSideBar(false),
            "/zh/db/": genDbSideBar("数据库"),
            "/zh/param/": genSingleSideBar("参数"),
            "/zh/cache/": genSingleSideBar("缓存"),
        }
    }
}

function genSideBar(title) {
    return [
        {
            title: title,
            collapsable: true,
            children: [
                "", "interface"
            ]
        }
    ]
}

function assetSideBar(isEn) {
    return [
        {
            title: isEn ? 'Asset Center' : '资产中心',
            collapsable: true,
            children: [
                "",
                "interface",
                "writeoff",
                "前台设计文档",
                "后台设计文档"
            ]
        }
    ]
}

function genDbSideBar(title) {
    return [
        {
            title: title,
            collapsable: true,
            children: [
                "/", "config","DataBaseLifeCycle"
            ]
        }
    ]
}
//生成单页面的侧边栏
function genSingleSideBar(title) {
    return [
        {
            title: title,
            collapsable: true,
            children: [
                "",
            ]
        }
    ]
}

//生成单页面的侧边栏
function genSingleSideBar(title) {
    return [
        {
            title: title,
            collapsable: true,
            children: [
                "",
            ]
        }
    ]
}
