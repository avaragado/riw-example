const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                babelrc: false,
                presets: ['react'],
                plugins: [
                    [
                        "react-intl-auto",
                        {
                            removePrefix: "src",
                            filebase: true
                        }
                    ]
                ]
            }
        }]
    },
    output: {
        filename: 'bundle-[name].js',
        path: path.resolve(__dirname, 'public', 'scripts'),
        publicPath: 'scripts/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};
