module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets'
        }
      }
    },
    requirejs: {
      static: {
        options: {
          mainConfigFile: "js-src/main-static.js",
          dir: "js-build-static",
          removeCombined: true,
          findNestedDependencies: true,
          //skipDirOptimize: true,
          //optimize: "none",
          //optimize: "uglify2",
          modules: [
            {
              name: 'main-static',
              //include: ['../bower_components/requirejs/require.js'],
              //exclude: ['views/media-gallery'],
            },
                    //{
                    //  name: 'views/media-gallery'
                    //}
          ]
        }
      },
      yasmina: {
        options: {
          mainConfigFile: "js-src/main-yasmina.js",
          dir: "js-build-yasmina",
          removeCombined: true,
          findNestedDependencies: true,
          //skipDirOptimize: true,
          optimize: "none",
          //optimize: "uglify2",
          modules: [
            {
              name: 'main-yasmina',
              //include: ['../bower_components/requirejs/require.js'],
              //exclude: ['views/media-gallery'],
            },
                    //{
                    //  name: 'views/media-gallery'
                    //}
          ]
        }
      }
    },
    watch: {
      css: {
        files: ['sass/*.scss'],
        tasks: ['compass']
      },
      requirejs: {
        files: ['js-src/*', 'js-src/*/*'],
        tasks: ['requirejs:static', 'requirejs:yasmina', 'clean']
      },
    },
    clean: ["js-build-static/templates", "js-build-yasmina/templates"]

  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['compass','requirejs', 'clean', 'watch']);
};
