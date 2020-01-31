module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-figure-caption`,
          },
        ],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `A Man Learns Code`,
    author: `Chau Dinh`,
    description: `Just another blog of a JS developer`,
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/chaudinh95/`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
