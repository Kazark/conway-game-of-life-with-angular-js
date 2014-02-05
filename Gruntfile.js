module.exports = function(grunt) {
    grunt.initConfig({
        csslint: {
            src: ['*.css']
        },
        jshint: {
            all: {
                files: {
                    src: ['*.js']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['csslint', 'jshint', 'jasmine:all']);
};
