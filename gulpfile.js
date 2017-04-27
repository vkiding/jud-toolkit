var fs = require('fs')
  gulp = require("gulp"),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  browserify = require("browserify"),
  path = require('path'),
  plumber = require('gulp-plumber');


gulp.task('clean', function() {
  del.sync(['build/*']);    
  return del.sync(['bin/*']);
});

gulp.task('dump',['clean'],function(callback){
    gulp.src("vendor/**/*")
        .pipe(gulp.dest('./build/vendor'));
    return callback()    
});


gulp.task('babel',function(){
  return  gulp.src('src/**/*.js')
  .pipe(plumber())
  .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-runtime']
  }))
  
  .pipe(gulp.dest('./build'));    
})

gulp.task('jud',['babel'],function(){
  return gulp.src('./build/jud.js')
  .pipe(wrap("#!/usr/bin/env node \n\n<%= contents %>"))
  .pipe(gulp.dest('./bin'))
})

gulp.task('browserify',['babel'],function(callback){
    browserify("./build/debugger-client.js", { debug: false })
        .bundle()
        .pipe(source('debugger-client-browserify.js'))  //vinyl-source-stream
        .pipe(gulp.dest('./build/'))
    return callback()
})

gulp.task('less',function(callback){
    gulp.src('./src/css/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'src/css/', 'includes') ]
        }))
        .pipe(gulp.dest('./build/css'));

    gulp.src('./src/css/**/*.css')    
        .pipe(gulp.dest('./build/css'));

    return callback()
})


gulp.task('build',['browserify'],function(cb){
    
  return cb()
})

gulp.task('watch',function(){
  gulp.watch('src/**/*.js',['build']);
});

gulp.task('default',['watch']);

