module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // the SASS task
        sass: {
            dist: {
                files: [{
                    expand: true,
                    src: ['css/*.scss'],
                    ext: '.css'
                }]
            }
        },



        watch: {
            // watch for SCSS files and compile to css
            sass: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: true
                }
            }
        },


        connect: {
            uses_defaults: {}
        }
    });


    // a task that builds the overall app
    grunt.registerTask('build', ['sass', 'connect', 'watch']);

    // load sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['build']);


};
