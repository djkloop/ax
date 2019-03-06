var ora = require('ora');

const spinner = ora('开始构建package.json文件');

module.exports = (api, opts, rootOptions) => {

    console.log('api', api)
    console.log('--------------------牛逼的分割线------------------');
    console.log('opts', opts)
    console.log('--------------------牛逼的分割线------------------');
    console.log('rootOptions', rootOptions)

    spinner.start();
    api.extendPackage({
        dependencies: {
            'iview': '^3.3.0'
        }
    })
    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Loading rainbows';
        spinner.stop();
    }, 1000);


}