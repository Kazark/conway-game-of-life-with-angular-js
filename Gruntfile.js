module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ''
            },
            app: {
                dest: 'deploy/app.js',
                src: [
                    'src/intro.js.frag',
                    'src/*.js',
                    'src/outro.js.frag'
                ]
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js*', 'unittests/*.spec.js'],
                tasks: ['unittests']
            },
            css: {
                files: ['*.css'],
                tasks: ['csslint']
            },
        },
        csslint: {
            src: ['*.css']
        },
        jshint: {
            all: {
                files: {
                    src: ['deploy/app.js']
                }
            }
        },
        mocha: {
            options: {
                run: true,
                reporter: 'Spec',
            },
            test: {
                src: ['specs.html'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('specs', ['concat', 'jshint', 'mocha']);
    grunt.registerTask('default', ['csslint', 'specs']);
    grunt.registerTask('dev', ['default', 'watch']);
};
