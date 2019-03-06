// 添加iview
function addDependencies(api) {
    api.extendPackage({
        dependencies: {
            iview: "^3.3.0"
        }
    })
}

function renderFiles(api, opts) {
    const fs = require('fs');
    const files = {
        './src/App.vue': '../templates/default/src/App.vue',
        './src/views/manager/tool/app/index.vue': '../templates/default/src/App.vue',
    }
    api.render(files, opts);
    api.render('../templates/default/src/views')
}

module.exports = {
    addDependencies,
    renderFiles
}