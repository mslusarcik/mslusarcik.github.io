module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                                                                 // Task
      dist: {                                                               // Target
        options: {                                                          // Target options
          style: 'expanded'
        },
        files: {                                                            // Dictionary of files
          'public/assets/css/bootstrap.css': 'node_modules/bootstrap/scss/bootstrap.scss',       // 'destination': 'source'
          'public/assets/css/main.css': 'public/assets/scss/connector.scss'                      // 'destination': 'source'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'public/assets/css/min',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'public/assets/js/min/bootstrap.min.js': ['node_modules/bootstrap/dist/js/bootstrap.js'],
          'public/assets/js/min/main.min.js': ['public/assets/js/main.js']
        }
      }
    }
  });

  //SASS to CSS
  grunt.loadNpmTasks('grunt-contrib-sass');
  //Minify CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //Minify JS
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Set default task
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
};