module.exports = function config(api) {
    api.cache(true)

    const plugins = [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./src/'],
                alias: {
                    'navigation/*': 'navigation/*',
                    'screens/*': 'screens/*'
                },
                extensions: ['.jsx', '.js']
            }
        ]
    ]

    return {
        presets: ['babel-preset-expo'],
        plugins
    }
}
