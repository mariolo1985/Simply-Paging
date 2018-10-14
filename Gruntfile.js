module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: {
                    'dist/css/master.min.css': 'src/less/master.less'
                }
            },
            prod: {
                banner: 'building prod less file',
                options: {
                    compress: true,
                    sourceMap: false,
                    sourceMapBasepath: 'dist/css'
                },
                files: {
                    'dist/css/master.min.css': 'src/less/master.less'
                }
            }
        },
        copy: {
            dev: {
                files: [
                    { expand: true, cwd: 'src/', src: 'less/*', dest: 'dist/' },
                    { expand: true, cwd: 'src/', src: 'scss/*', dest: 'dist/' },
                    { expand: true, cwd: 'build/', src: '*.js', dest: 'dist/' },
                    { expand: true, cwd: 'build/', src: 'components/**/*.js', dest: 'dist/' }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('dev', [
        'less:dev',
        'copy:dev'
    ]);

    grunt.registerTask('prod', [
        'less:prod',
        'copy:dev'
    ]);
};
