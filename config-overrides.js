module.exports = function override(config, env) {
    config.plugins[0].userOptions.filename =
        'Wolf, Goat, and Cabbage interactive (kavinkul).html';
    config.plugins[0].userOptions.minify.removeComments = false;
    config.plugins[0].userOptions.minify.collapseWhitespace = false;
    config.plugins[0].userOptions.minify.minifyCSS = false;
    config.plugins[0].userOptions.minify.minifyJS = false;
    config.optimization.minimizer[0].options.extractComments = false;
    config.devtool = false;
    config.output.filename =
        env === 'production'
            ? 'js/Wolf, Goat, and Cabbage/wgc-interactive.js'
            : env === 'development' && 'static/js/bundle.js';

    return config;
};
