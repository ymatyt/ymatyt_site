module.exports = {
  siteMetadata: {
    title: `You're More Amazing Than You Think!`,
    description: `YMATYT is a site to help folks realize their importance in the world.`,
    author: `Wren Turkal`,
    siteUrl: `https://ymatyt.com/`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `You're More Amazing Than You Think!`,
        short_name: `ymatyt`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#9c27b0`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-toml`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-TCSKLZB",
      },
    },
    {
      resolve: `gatsby-plugin-google-gapi`,
      options: {
        apiKey: `AIzaSyAHamT1Y1X8eLxcwF07C39XpMLK-L2nr4A`,
        clientId: `584057250536-3it1hgenaceu75lhc9uaauta4co3v5iu.apps.googleusercontent.com`,
        discoveryURLs: [
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        ],
        scopes: [
          'https://www.googleapis.com/auth/drive.appdata',
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
