/// <reference path="node_modules/core-js/client/core.min.js" />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var webpack = require('webpack-stream');
var destPath = './wwwroot/libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'es6-shim/es6-shim.min.js',
            'core-js/client/core.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js',
            'ng2-bootstrap/bundles/ng2-bootstrap.**js',
            'moment/**js',
            'dragula/**',
            'ng2-dragula/**',

    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/dragula/dist/dragula.css',
        'node_modules/font-awesome/css/font-awesome.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
    gulp.src([
       'node_modules/font-awesome/fonts/**'
    ]).pipe(gulp.dest('./wwwroot/libs/fonts'));
});

gulp.task('webpack_build', function () {
    return gulp.src('scripts/boot.ts')
    //.pipe(webpack({
    //    entry: {
    //        app: './wwwroot/libs/reflect-metadata/Reflect.js',
    //    },
    //    output: {
    //        filename: './wwwroot/appScripts/dist/vendor.js',
    //    },
    //}))
   .pipe(webpack(require('./webpack.config.js')))
   .pipe(gulp.dest('./wwwroot'));
});
gulp.task('webpack_build_prod', function () {
    return gulp.src('scripts/boot.ts')
   .pipe(webpack(require('./webpack.prod.config.js')))
   .pipe(gulp.dest('./wwwroot'));
});

var tsProject = ts.createProject('scripts/tsconfig.json');
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "scripts/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('scripts/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);
