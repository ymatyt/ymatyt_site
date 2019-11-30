module.exports = {
  siteMetadata: {
    title: `You're More Amazing Than You Think!`,
    description: `YMATYT is a site to help folks realize their importance in the world.`,
    author: `Wren Turkal`,
    siteUrl: `https://ymatyt.com/`
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
        theme_color: `mediumpurple`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      }
    },
    `gatsby-transformer-toml`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-TCSKLZB",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
