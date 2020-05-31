module.exports = function (grunt) {

  grunt.loadNpmTasks( "grunt-bake" );


  grunt.initConfig({
    bake: {
      your_target: {
          options: {
              // Task-specific options go here.
          },

          files: {
              //insert files to be preprocessed
              "dist/index.html": "index.html",
              // etc ...
          }
      },
  },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      jade: {
        files: 'app/views/**/*.jade',
        tasks: ['jade']
      }
    }
  });

  // Default task.
  grunt.registerTask('build', 'replace html partials', ['bake']);
};