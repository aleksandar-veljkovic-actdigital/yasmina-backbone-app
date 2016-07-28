module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'stylesheets'
        }
      }
    },
    requirejs: {
      static: {
        options: {
          name: "main-static",
          out: "js-build-static/main-static.js",
          baseUrl: "src/",
          mainConfigFile: "src/main-static.js",
          findNestedDependencies: true,
          optimize: "none"
        }
      },
      yasmina: {
        options: {
          name: "main-yasmina",
          out: "js-build-yasmina/main-yasmina.js",
          baseUrl: "src/",
          mainConfigFile: "src/main-yasmina.js",
          findNestedDependencies: true,
          optimize: "none"
        }
      },      
      aa2ilati: {
        options: {
          name: "main-3a2ilati",
          out: "js-build-3a2ilati/main-3a2ilati.js",
          baseUrl: "src/",
          mainConfigFile: "src/main-3a2ilati.js",
          findNestedDependencies: true,
          optimize: "none"
        }
      },
      mazyun: {
        options: {
          name: "main-mazyun",
          out: "js-build-mazyun/main-mazyun.js",
          baseUrl: "src/",
          mainConfigFile: "src/main-mazyun.js",
          findNestedDependencies: true,
          optimize: "none"
        }
      }
      
    },
    watch: {
      css: {
        files: ['src/sass/*.scss'],
        tasks: ['compass']
      },
      requirejs: {
        files: ['src/*', 'src/*/*'],
        tasks: ['requirejs:static', 'requirejs:yasmina', 'requirejs:aa2ilati', 'requirejs:mazyun', 'clean']
      },
    },
    clean: ["js-build-static/templates", "js-build-yasmina/templates", "js-build-3a2ilati/templates", "js-build-mazyun/templates"],    
    copy: {
      main: {
        files: [
          {src: 'bower_components/slick.js/slick/slick.scss', dest: 'src/sass/_slick.scss'}
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
