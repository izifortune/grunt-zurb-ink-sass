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
    grunt.registerTask('default', ['sass', 'connect:dev', 'watch' ]);
    grunt.registerTask('build', ['sass', 'premailer']);
};
