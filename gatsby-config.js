module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Micro Shiba Inu`,
        short_name: `$MSI`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#FA9A2C`,
        theme_color: `#fff`,
        icon: `src/assets/favicon-16x16.png`,
      },
    },
    `gatsby-plugin-react-helmet`
  ]
};
