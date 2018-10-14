module.exports = function (grunt) {
    //grunt.loadTasks('./grunt/tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            options: {
                transform: [
                    ["babelify", {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }]
                ],
                plugin: [
                    [
                        "factor-bundle", {
                            outputs: [
                                'src/index.js',
                                'src/components/SimplyPaging/*.js'
                            ]
                        }]
                ]
            },
            dist: {
                src: [
                    'src/index.js',
                    'src/components/SimplyPaging/*.js'
                ],
                dest: 'build/index.js'
            }
        },
        uglify: {
            build: {
                src: 'build/index.js',
                dest: 'dist/index.js'
            }
        },
        less: {
            dev: {
                files: {
                    'dist/css/master.min.css': 'src/less/master.less'
                }
            },
            prod: {
                options: {
                    compress: true
                },
                files: {
                    'dist/css/master.min.css': 'src/less/master.less'
                }
            }
        },
        copy: {
            prod: {
                files: [
                    { expand: true, cwd: 'src/', src: 'less/*', dest: 'dist/' },
                    { expand: true, cwd: 'src/', src: 'scss/*', dest: 'dist/' }
                ]
            },
            dev: {
                files: [
                    { expand: true, cwd: 'build', src: '*.js', dest: 'dist/' }
                ]
            }
        },
        clean: {
            dev: ['dist'],
            js: ['dist/js'],
            prod: ['dist']
        },
        watch: {
            less: {
                files: ['src/less/*.less'],
                tasks: ['less:dev']
            },
            js: {
                files: ['src/js/*.js', 'src/components/**'],
                tasks: ['clean:js', 'browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', [
        'clean:dev',
        'browserify',
        'less:dev',
        'watch'
    ]);

    grunt.registerTask('prod', [
        'clean:prod',
        'browserify',
        'uglify',
        'less:prod',
        'copy:prod'
    ]);

    grunt.registerTask('test', [
        'browserify',
        'copy:dev'
    ]);
};
