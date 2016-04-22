module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all:['src/**/*.js','test/**/*.js'],
            options:{
                globals: {
                    _: false,
                    $: false,
                    jasmine: false,
                    describe:false,
                    it:false,
                    expect: false,
                    beforeEach: false,
                    afterEach: false,
                    sinon: false
                },
                browser: true,
                devel: true
            }
        },
        testem: {
            unit: {
                options:{
                    
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};