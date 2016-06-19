const cp = require('child_process');
const urls =
[
    'https://egghead.io/lessons/tools-intro-to-the-production-webpack-course',
    'https://egghead.io/lessons/tools-validate-your-webpack-config-with-webpack-validator',
    'https://egghead.io/lessons/tools-tree-shaking-with-webpack-2',
    'https://egghead.io/lessons/tools-polyfill-promises-for-webpack-2',
    'https://egghead.io/lessons/tools-hashing-with-webpack-for-long-term-caching',
    'https://egghead.io/lessons/tools-grouping-vendor-files-with-the-webpack-commonschunkplugin',
    'https://egghead.io/lessons/tools-chunking-common-modules-from-multiple-apps-with-the-webpack-commonschunkplugin',
    'https://egghead.io/lessons/tools-optimize-react-size-and-performance-with-webpack-production-plugins',
    'https://egghead.io/lessons/tools-expose-modules-to-dependencies-with-webpack',
    'https://egghead.io/lessons/tools-import-a-non-es6-module-with-webpack',
    'https://egghead.io/lessons/javascript-initialize-a-webpack-project-with-karma-for-testing',
    'https://egghead.io/lessons/javascript-use-chai-assertions-for-tests-in-a-karma-project',
    'https://egghead.io/lessons/tools-use-karma-for-unit-testing-with-webpack',
    'https://egghead.io/lessons/tools-add-code-coverage-to-tests-in-a-webpack-project',
    'https://egghead.io/lessons/tools-ensure-all-source-files-are-included-in-test-coverage-reports-with-webpack'
];

for (let i of urls) {
    cp.fork(__dirname + '/node_modules/.bin/egghead-downloader', [
        '-c',
        i,
        'webpack-videos'
        ]
    );
}
