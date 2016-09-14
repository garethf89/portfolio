module.exports = {

    //Pagespeed
      options: {
        nokey: true,
        url: "<%= url %>/"
      },
     desktop: {
        options: {
          url: "<%= url %>",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 70
        }
    },
    mobile: {
        options: {
          url: "<%= url %>",
          locale: "en_GB",
          strategy: "mobile",
          threshold: 70
        }
    }

};