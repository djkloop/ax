module.exports = (api, opts, rootOptions) => {

    console.log('api', api)
    console.log('--------------------牛逼的分割线------------------');
    console.log('opts', opts)
    console.log('--------------------牛逼的分割线------------------');
    console.log('rootOptions', rootOptions)
    api.extendPackage({
        dependencies: {
            'iview': '^3.3.0'
        }
    })
}