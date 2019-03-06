// 添加iview
function addDependencies(api) {
    api.extendPackage({
        dependencies: {
            iview: "^3.3.0"
        }
    })
}

function renderFiles(api, opts) {
    api.render('../templates');
}

module.exports = {
    addDependencies,
    renderFiles
}