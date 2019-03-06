module.exports = (api, opts, rootOptions) => {
    const appic = require('./tools/appic');

    // 如果需要默认配置+iView
    if (opts.isUseDefaultConfig && opts.iView) {
        appic.addDependencies(api);
    }

    // 开始渲染目录结构
    appic.renderFiles(api, opts);
}