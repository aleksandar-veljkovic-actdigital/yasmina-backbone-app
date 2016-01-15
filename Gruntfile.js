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
      },      
      aa2ilati: {
        options: {
          mainConfigFile: "js-src/main-3a2ilati.js",
          dir: "js-build-3a2ilati",
          removeCombined: true,
          findNestedDependencies: true,
          //skipDirOptimize: true,
          optimize: "none",
          //optimize: "uglify2",
          modules: [
            {
              name: 'main-3a2ilati',
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
        tasks: ['requirejs:static', 'requirejs:yasmina', 'requirejs:aa2ilati', 'clean']
      },
    },
    clean: ["js-build-static/templates", "js-build-yasmina/templates", "js-build-3a2ilati/templates"],    
    copy: {
      main: {
        files: [
          {src: 'bower_components/slick.js/slick/slick.scss', dest: 'sass/_slick.scss'}
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy','compass','requirejs', 'clean', 'watch']);
};
