module.exports = {   
    usageguides: {
            options: {
                source: '<%= paths.dest.css %>',
                destination: 'docs/css',
                template: 'node_modules/topdoc-theme',
                templateData: {
                  title: "Gareth Ferguson Stlyeguide",
                  subtitle: "garethferguson.co.uk",
                  siteNav: [{
                      url: "/", 
                      text: "home"
                    }]
                }
            }
}}