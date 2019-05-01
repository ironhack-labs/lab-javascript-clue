const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

function reloadPagina(){

    console.log("crearpublic...");

    $.livereload.listen();

    return gulp
        .src("./starter-code/src/*.js")
        .pipe($.livereload())
        ;

}

gulp.task("watch",()=>{
    gulp.watch("./starter-code/src/", reloadPagina)
});