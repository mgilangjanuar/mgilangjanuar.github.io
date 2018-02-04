module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    notify: {
      uglify: {
        options: {
          title: 'Task Complete', 
          message: 'Uglify run successfully'
        }
      },
      sass: {
        options: {
          title: 'Task Complete', 
          message: 'SASS run successfully'
        }
      },
      cssmin: {
        options: {
          title: 'Task Complete', 
          message: 'CSS minify run successfully'
        }
      }
    },
    watch: {
      scripts: {
        files: [
          'src/*/**',
          'lib/*/**'
        ],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        src: [
          'lib/**/jquery.min.js',
          'lib/**/tether.min.js',
          'lib/**/bootstrap.min.js',
          'src/js/*.js'
        ],
        dest: 'dist/scripts.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/styles.css': 'src/sass/main.scss'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/styles.min.css': [
            'lib/**/bootstrap.min.css',
            'lib/**/tether.min.css',
            'dist/styles.css',
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', [
    'uglify',
    'notify',
    'sass',
    'cssmin'
  ]);
};