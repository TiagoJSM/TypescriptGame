module.exports = function (grunt, init, done) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            my_target: {
                files: {
                    'css/build/style.min.css': ['css/*.css']
                }
            }
        },

        clean: ["js/"],

        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
                    'js/build/main.min.js': ['js/*.js', '!js/build/**/*.js']
                }
            }
        },

        typescript: {
            base: {
                src: ['ts/**/*.ts'],
                dest: 'js',
                options: {
                    module: 'commonjs',
                    target: 'es5'/*,
                    declaration: true,
                    noLib: false*/
                }
            }
        },

        watch: {
            clean: {
                files: [],
                tasks: ['clean']
            },
            typescript: {
                files: ['ts/**/*.ts'],
                tasks: ['typescript']
            },
            cssmin: {
                files: ['css/*.css'],
                tasks: ['cssmin']
            },

            uglify: {
                files: ['js/*.js', '!js/build/**/*.js'],
                tasks: ['uglify']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['clean', 'typescript', 'cssmin', 'uglify', 'watch']);
};