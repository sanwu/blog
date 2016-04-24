var gulp = require('gulp');
var ts = require('gulp-typescript');
var jsonfile = require('jsonfile');
var path = require('path');
var tsmain = require('typescript');
var sourcemaps = require('gulp-sourcemaps');

function getConfigOutPath(tsconfig) {
   var runtimeTSConfig = jsonfile.readFileSync(tsconfig);
   var prjPath = path.dirname(tsconfig);
   return path.join(prjPath,runtimeTSConfig.compilerOptions.outDir || runtimeTSConfig.compilerOptions.outFile)
}


gulp.task('buildServer',function(){
   var tsconfig = 'src/server/tsconfig.json';
   var tp = ts.createProject(tsconfig,{
      sortOutput: true,
      typescript: tsmain
   });
   var tsRequest = tp.src()
         .pipe(sourcemaps.init())
         .pipe(ts(tp));
   return tsRequest.js
            .pipe(sourcemaps.write({includeContent: false,sourceRoot: '..'}))
            .pipe(gulp.dest(getConfigOutPath(tsconfig)));
});

gulp.task('copyServerDepRes', function() {
    // return gulp.src([
    //     'src/server/**/*.html'
    // ], { base: '.' })
    // .pipe(gulp.dest('build'));
})



gulp.task('watchServer', ['buildServer','copyServerDepRes'], function() {
  var tsconfig = 'src/server/tsconfig.json'; 
  var runtimeTSConfig = jsonfile.readFileSync(tsconfig)
  var filesGlob = runtimeTSConfig.filesGlob;
  var prjPath = path.dirname(tsconfig);

  for(var i=0;i<filesGlob.length;i++){
    var fileGlob = path.join(prjPath,filesGlob[i]);
    gulp.watch(fileGlob, ['buildServer']);
  }

  // var pyFiles = path.join(prjPath, './**/*.py');
  // gulp.watch(pyFiles, ['copyToolsDepRes']);
  // var blFiles = path.join(prjPath, './**/*.blend');
  // gulp.watch(blFiles, ['copyToolsDepRes']);
  // var htmlFiles = path.join(prjPath, './**/*.html');
  // gulp.watch(htmlFiles, ['copyServerDepRes']);
});


gulp.task('dev',['watchServer']);