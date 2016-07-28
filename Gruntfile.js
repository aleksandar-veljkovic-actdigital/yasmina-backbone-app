module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'static/css'
        }
      }
    },
    requirejs: {
      static: {
        options: {
          name: "main-static",
          out: "dist/main-static.js",
          baseUrl: "src/",
          mainConfigFile: "src/main-static.js",
          findNestedDependencies: true,
          optimize: "none"
        }
      },
      yasmina: {
        options: {
          name: "main-yasmina",
          out: "dist/main-yasmina.js",
          baseUrl: "src/",
          mainConfigFile: "src/main-yasmina.js",
          findNestedDependencies: true,
          optimize: "none"
        }
      },      
      aa2ilati: {
        options: {
          name: "main-3a2ilati",
          out: "dist/main-3a2ilati.js",
          baseUrl: "src/",
          mainConfigFile: "src/main-3a2ilati.js",
          findNestedDependencies: true,
          optimize: "none"
        }
      },
      mazyun: {
        options: {
          name: "main-mazyun",
          out: "dist/main-mazyun.js",
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
        files: ['src/*.js', 'src/*/*.js', 'src/templates/*'],
        tasks: ['requirejs:static', 'requirejs:yasmina', 'requirejs:aa2ilati', 'requirejs:mazyun']
      },
    },
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy', 'requirejs', 'compass', 'watch']);
};
