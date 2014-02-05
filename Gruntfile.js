module.exports = function(grunt) {
    grunt.initConfig({
        csslint: {
            src: ['*.css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['csslint', 'jshint', 'jasmine:all']);
};
