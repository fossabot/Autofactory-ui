'use strict';

const paths = require('./paths');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    // Where webpack looks to start building the bundle
    entry: [paths.src + '/index.js'],
    stats: 'errors-only',
    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),
        // Generates an HTML file from a template
        new HtmlWebpackPlugin({
            title: 'Autofactory',
            favicon: path.resolve(__dirname, '../favicon.svg'),
            template: paths.src + '/template.html', // template file
            filename: 'index.html', // output file
        }),
        new WebpackBar(),
        new BundleAnalyzerPlugin({
            logLevel: 'silent',
        }),
    ],
    // Determine how modules within the project are treated
    module: {
        rules: [
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(sass|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                compileType: 'module',
                                mode: 'local',
                                auto: true,
                                exportGlobals: true,
                                namedExport: false,
                                exportLocalsConvention: 'asIs',
                                exportOnlyLocals: false,
                            },
                            importLoaders: 2,
                            esModule: false,
                        },
                    },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
        ],
    },
};
