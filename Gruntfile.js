// milad heydari @miladbruce
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          // Target options
          style: 'compressed'
        },
        files: {
          'dist/css/style-rtl.min.css': 'sass/base_rtl.scss',
          'dist/css/style-ltr.min.css': 'sass/base_ltr.scss'
        }
      }
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: 0,
        sourceMap: false,
        advanced: false
      },
      target: {
        files: [{
          expand: true,
          cwd: 'css/*.css',
          src: ['css/*.css'],
          dest: 'dist/style.min.css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {
        mangle: false,
        beautify: false
      },
      my_target: {
        files: {
          'dist/app.min.js': [
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['uglify'],
        options: {
          interrupt: true,
        },
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass','uglify' , 'cssmin']);
};
