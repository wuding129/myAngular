module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all:['src/**/*.js'],
            options:{
                globals: {
                    _: false,
                    $: false
                },
                browser: true,
                dvel: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};