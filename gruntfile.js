module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options:{livereload:true},
      sass: {
        files: ['style/sass/*.scss'],
        tasks: ['sass','cssmin'],
      }
    },

    sass: {
      dist: {
        files: {
          'compiled/css/style.css' : 'style/sass/master.scss'
        }
      }
    },

    uglify: {
      options: {
        manage: false
      },
      my_target: {
        files: {
          'compiled/js/main.min.js': ['js/input2.js'],
          'compiled/js/base.min.js': [
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
        ]
        }
      }
    },

    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'compiled/css/',
          src: ['*.css', '!*min.css'],
          dest: 'compiled/css/',
          ext: '.min.css'

        }]
      }
    },

    express: {
      all: {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: ['.'],
          livereload: true
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('default',["watch"]);
  grunt.registerTask('server',["express","watch"]);
};
