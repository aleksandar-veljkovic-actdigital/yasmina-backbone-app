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
          include: ["main-static"],
          //include: ["main-yasmina",'../bower_components/requirejs/require.js'],
          mainConfigFile: "src/main-static.js",
          out: "dist/main-static.js",
          findNestedDependencies: true,
          optimize: "none",
        }
      },
      yasmina: {
        options: {
          include: ["main-yasmina"],
          //include: ["main-yasmina",'../bower_components/requirejs/require.js'],
          mainConfigFile: "src/main-yasmina.js",
          out: "dist/main-yasmina.js",
          findNestedDependencies: true,
          optimize: "none",
        }
      },   
      aa2ilati: {
        options: {
          include: ["main-3a2ilati"],
          //include: ["main-yasmina",'../bower_components/requirejs/require.js'],
          mainConfigFile: "src/main-3a2ilati.js",
          out: "dist/main-3a2ilati.js",
          findNestedDependencies: true,
          optimize: "none",
        }
      },
      mazyun: {
        options: {
          include: ["main-mazyun"],
          //include: ["main-yasmina",'../bower_components/requirejs/require.js'],
          mainConfigFile: "src/main-mazyun.js",
          out: "dist/main-mazyun.js",
          findNestedDependencies: true,
          optimize: "none",
        }
      }
      
    },
    watch: {
      css: {
        files: ['sass/*.scss'], // filest to watch
        tasks: ['compass']
      },
      requirejs: {
        files: ['src/*', 'src/*/*'], // filest to watch
        tasks: ['requirejs:static', 'requirejs:yasmina', 'requirejs:aa2ilati', 'requirejs:mazyun']
      },
    },   
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
  grunt.registerTask('default', ['copy','compass','requirejs', 'watch']);
};
