var gulp = require('gulp');

gulp.task('default',['watchApp'],function(){
    return console.log('gulp is running');
});

gulp.task('moveFiles',function(){
    return gulp.src('./dev/**.*').pipe(gulp.dest('dist'));
});

gulp.task('watchApp',function(){
    gulp.watch('./dev/app.js',['log']);
});

gulp.task('log',function(){
    return console.log('gulp watch');
});