let project_folder="dist";
let source_folder="src";
let path={
    build:{
        html: project_folder+"/",
        css: project_folder+'/css/',
        js: project_folder+'/js/ ',
        img: project_folder+'/img/',
        icons: project_folder+'/icons/',
    },
    src:{
        html: source_folder+"/",
        css: source_folder+'/sass/style.sass',
        js: source_folder+'/js/script.js',
        img: source_folder+'/img/**/*.{jpg,png,svg,gif,ico,webp}',
        icons: source_folder+'/icons/',
    },
    watch:{
        html: source_folder+"/**/*.html",
        css: source_folder+'/sass/**/*.sass',
        js: source_folder+'/js/**/*.js ',
        img: source_folder+'/img/**/*.{jpg,png,svg,gif,ico,webp}',
        icons: source_folder+'/icons/',
    },
    clean: './' + project_folder + '/'
};

let { src, dist } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create();