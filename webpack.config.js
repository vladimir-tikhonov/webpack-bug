const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
    mode: 'none',
    devtool: false,
    entry: path.resolve( __dirname, 'index.js' ),
    output: {
        path: path.resolve( __dirname, 'dist' ),
    },
    optimization: {
        concatenateModules: true,
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
};
