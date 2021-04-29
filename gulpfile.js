let gulp = require('gulp'),
    webpack = require('webpack-stream'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

let isDev = true;
let isProd = !isDev;

let webpakConfig ={
  output: {
    filename: 'main.js'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/'
        }
      ]
  },
  mode: isDev ? 'development' : 'production',

};

gulp.task('clean', async function(){
  del.sync('dist')
})

gulp.task('scss', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}))
});

// gulp.task('css', function(){
//   return gulp.src([
//     'node_modules/normalize.css/normalize.css',
//   ])
//     .pipe(concat('_libs.scss'))
//     .pipe(gulp.dest('app/scss'))
//     .pipe(browserSync.reload({stream: true}))
// });

gulp.task('html', function(){
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function(){
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({stream: true}))
})
gulp.task('fonts', function(){
  return gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('script', function(){
  return gulp.src('src/js/main.js')
    .pipe(webpack(webpakConfig))                       
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.reload({stream: true}))
});

// gulp.task('js', function(){
//   return gulp.src([
//     'node_modules/slick-carousel/slick/slick.js'
//   ])
//     .pipe(babel({
//       presets: ["@babel/preset-env"]
//     }))
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js'))
//     .pipe(browserSync.reload({stream: true}))
// });

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "dist/"
      }
  });
});

gulp.task('export', function(){
  let buildHtml = gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));

  let BuildCss = gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

  let BuildJs = gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
    
  let BuildFonts = gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));

  let BuildImg = gulp.src('app/img/**/*.*')
    .pipe(gulp.dest('dist/img'));   
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('src/*.html', gulp.parallel('html'))
  gulp.watch('src/js/**/*.js', gulp.parallel('script'))
  gulp.watch('src/images/**/*.*', gulp.parallel('img'))

});

gulp.task('build', gulp.series('clean', 'export'))

gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch', 'script', 'img', 'html','fonts'));

gulp.task('test', gulp.series('script'));

//webpack менификация js происходит автоматически плагин uglify в него уже встроен.
// npm install -D babel-loader @babel/core @babel/preset-env

// devtool: isDev ? 'eval-source-map' : 'none'  //soursmap for production and development mode