'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            sass: {
                files: ['src/styles/**.scss'],
                tasks: ['sass:dev']
            },
        },

        connect: {
            dev: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    livereload: true,
                    base: ['.tmp', 'src']
                },
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '.tmp/main.css',
                        'src/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: ['./src', '.tmp']
                }
            }
        },

        premailer: {
            simple: {
                options: {
                    css: ['.tmp/main.css']
                },
                files: {
                  'dist/basic.html': ['src/basic.html'],
                  'dist/hero.html': ['src/hero.html'],
                  'dist/sidebar.html': ['src/sidebar.html'],
                  'dist/sidebar-hero.html': ['src/sidebar-hero.html'],
                  'dist/newsletter.html': ['src/newsletter.html']
                }
            }
        },
        // TODO PREMAILER
        // TODO LITMUS
        // TODO ASSEMBLE
        // TODO DIST

        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    '.tmp/main.css': 'src/styles/main.scss'
                }
            }
        }
    });
    grunt.registerTask('default', ['sass', 'browserSync', 'watch' ]);
    grunt.registerTask('build', ['sass', 'premailer']);
};
