module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                'assets/css/style.css': 'assets/sass/style.scss'
              }
            }
        },
        htmlmin: {                                     // Task
          dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: {                                   // Dictionary of files
              'index.html': 'views/main.html',     // 'destination': 'source'
            }
          }
        }
    //   watch: {
    //     files: ['<%= jshint.files %>'],
    //     tasks: ['jshint']
    //   }
    });
  
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //grunt.loadNpmTasks('grunt-contrib-watch');
  
    // grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['sass', 'htmlmin']);
  };