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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'cssmin']);
};