// 添加iview
function addDependencies(api) {
    api.extendPackage({
        dependencies: {
            iview: "^3.3.0"
        }
    })
}

function renderFiles(api, opts) {

    // 把默认需要的东西准备好...
    api.render('../templates/default')

    // 路由相关的

    // 在添加一些配置文件
    api.render({
        './.editorconfig': '../templates/default/_editorconfig'
    })
}

module.exports = {
    addDependencies,
    renderFiles
}