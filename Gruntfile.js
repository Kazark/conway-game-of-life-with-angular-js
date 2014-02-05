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
                files: ['src/*.js*'],
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
        jasmine: {
            all: {
                src: ['deploy/app.js'],
                options: {
                    specs: 'unittests/*.spec.js',
                    outfile: 'test-results.html',
                    keepRunner: true,
                    helpers: [
                        'lib/angular.js',
                        'lib/angular-mocks.js'
                    ]
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('unittests', ['concat', 'jshint', 'jasmine:all']);
    grunt.registerTask('default', ['csslint', 'unittests']);
    grunt.registerTask('dev', ['default', 'watch']);
};
