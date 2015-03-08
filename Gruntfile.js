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
          mainConfigFile: "js-src/main.js",
          dir: "js-build",
          removeCombined: true,
          findNestedDependencies: true,
          //skipDirOptimize: true,
          //optimize: "none",
          //optimize: "uglify2",
          modules: [
            {
              name: 'main',
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
          //optimize: "none",
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
        tasks: ['requirejs:static', 'requirejs:yasmina']
      },
    }  
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['watch']);
};
