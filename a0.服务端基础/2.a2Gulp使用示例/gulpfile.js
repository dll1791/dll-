//应用gulp模块
const gulp=require('gulp');
//建立任务
gulp.task('first', ()=>{
	console.log('第一个gulp任务执行了') ;
	return  gulp.src('./src/图片与文件/百度.css')//获取要处理的文件
	 .pipe(gulp.dest('dist/css'));//gulp会自动创建一个css目录

});