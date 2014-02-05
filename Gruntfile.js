module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ''
            },
            requirements: {
                dest: 'requirements.js',
                src: [
                    'lib/angular.js',
                    'lib/angular-resource.js'
                ]
            },
            app: {
                dest: 'app.js',
                src: [
                    'src/intro.js.frag',
                    'src/*.js',
                    'src/outro.js.frag'
                ]
            }
        },
        csslint: {
            src: ['*.css']
        },
        jshint: {
            /*options: {
                //require curly braces
                curly: true,
                //require === to be used.
                eqeqeq: true,
                //complain about undeclared variables.
                undef: true,
                //complain about trailing whitespace.
                trailing: true,
                //complain about variables used before they're defined.
                latedef: true,
                //require immediately called anon functions to be wraped in parens.
                immed: true,
                //define browser globals such as window, document, navigator, etc. (not console or alert)
                browser: true,
                //disallow empty code blocks
                noempty: true
            },*/
            all: {
                files: {
                    src: ['app.js']
                }
            }
        },
        jasmine: {
            all: {
                src: ['app.js'],
                options: {
                    specs: 'unittests/*.spec.js',
                    outfile: 'test-results.html',
                    keepRunner: true,
                    helpers: [
                        'requirements.js',
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

    grunt.registerTask('default', ['csslint', 'concat', 'jshint', 'jasmine:all']);
    grunt.registerTask('dev', ['default', 'watch']);
};
