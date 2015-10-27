module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        mochaTest: {
            // Runs all tests
            test: {
                options: {
                    reporter: 'dot',
                    ui: 'bdd',
                    timeout: 2000,
                    recursive: true,
                    clearRequireCache: true
                },
                src: ['tests/*Test.js']
            }
        }

    })

    grunt.registerTask('default', ['mochaTest']);
}
