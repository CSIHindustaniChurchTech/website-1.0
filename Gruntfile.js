module.exports = function (grunt) {

  grunt.loadNpmTasks( "grunt-bake" );
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({
    bake: {
      your_target: {
          options: {
              // Task-specific options go here.
          },

          files: {
              //insert files to be preprocessed
              "dist/index.html": "pages/index.html",
              "dist/about-us.html": "pages/about-us.html",
              "dist/classified.html": "pages/classified.html",
              "dist/contact-us.html": "pages/contact-us.html",
              "dist/events.html": "pages/events.html",
              "dist/planner.html": "pages/planner.html",
              "dist/portfolio.html": "pages/portfolio.html",
              "dist/services.html": "pages/services.html"
              // etc ...
          }
      },
  },
  watch: {
    bake: {
        files: [ "pages/**","templates/**" ],
        tasks: "build"
    }
  }
  });

  // Default task.
  grunt.registerTask('build', 'replace html partials', ['bake','watch']);
};