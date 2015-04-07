module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: "<%= paths.src.css %>",
                src: "main.scss",
                dest: "<%= paths.dest.css %>",
                ext: ".css"
                }
            ]
    }
};