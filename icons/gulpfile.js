const gulp = require("gulp"),
  replace = require("gulp-replace"),
  rename = require("gulp-rename"),
  svgmin = require("gulp-svgmin"),
  wrap = require("gulp-wrap"),
  fs = require("fs");
const svg_files_folder = "./icons-svg",
  dest_folder = "../src/app/_components/icons/",
  jsx_template = "./icon-template.txt";

let icons_component_list = [];

gulp.task("icons_components", function () {
  return gulp
    .src([svg_files_folder + "/*.svg"])
    .pipe(
      svgmin({
        multipass: true,
        full: true,

        // https://github.com/svg/svgo/tree/master/plugins
        // https://github.com/svg/svgo#built-in-plugins

        // حذف ویزگی ها از اس وی جی
        plugins: [
          {
            name: "cleanupIDs",
            params: { remove: true, minify: true },
          },
          "removeDoctype",
          "removeComments",
          "removeTitle",
          "removeDimensions",
          "collapseGroups",
          {
            name: "cleanupNumericValues",
            params: { floatPrecision: 4 },
          },
          {
            name: "convertColors",
            params: { names2hex: true, rgb2hex: true },
          },
          "removeStyleElement",
          "removeEmptyContainers",
          {
            name: "removeAttrs",
            params: {
              attrs: [
                "(filter|fill|stroke|fill-rule|stroke-linecap|stroke-linejoin|stroke-width|transform|style|class|data.*)",
                "svg:(width|height)",
              ],
            },
          },
          "removeUselessDefs",
        ],
      })
    )
    // حذف تگ اس وی جی
    .pipe(replace(/<\/?svg(.*?)>/g, ""))
    // در این قسمت محتوای ساخته شده به تمپلیت اضافه می شود
    .pipe(wrap({ src: jsx_template}))
    .pipe(
      rename(function (path) {
        // در این قسمت مسیر را نگه می داریم
        icons_component_list.push(path.basename);  
        // در این قسمت نام فایل را تغییر می دهیم
        path.extname = ".tsx";
      })
    )
    // فایل ساخته شده را به این مسیر منتقل می کنیم 
    .pipe(gulp.dest(dest_folder + "/src"));
});
// تولید فایلی برای خروجی تمام فایل ها
gulp.task("icons_component_main", function (cb) {
  return fs.writeFile(
    dest_folder + "/icons.ts",
    "/* GENERATED FILE */\n\n" +
      icons_component_list
        .map((item) => {
          let module_name = (
            item.charAt(0).toUpperCase() + item.substr(1)
          ).replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          });
          // تولید فایل آیکونز برای نشانی دادن به آیکون ها
          return `export { default as Icon${module_name} } from './src/${item}';`;
        })
        .join("\n"),
    cb
  );
});

gulp.task("default", gulp.series("icons_components", "icons_component_main"));
