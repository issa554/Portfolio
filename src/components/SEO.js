import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


const query = graphql`
  {
    site {
      siteMetadata {
        twitterUsername
        sitetitle:title
        siteUrl
        image
        siteDescription:description
        author
      }
    }
  }
`

const SEO = ({title,description}) => {
  const {site} = useStaticQuery(query)
  const {
    twitterUsername,
    sitetitle,
    siteUrl,
    image,
    siteDescription,
    author
  } = site.siteMetadata
  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${sitetitle}`}>
    <meta name="description"  content={description || siteDescription} />
    <meta name="image" content={image} />
    <meta name="twitter:card " content="summary_large_image" />
    <meta name="twitter:creator " content={twitterUsername} />
    <meta name="twitter:description " content={siteDescription}/>
    <meta name="twitter:image " content={`${siteUrl}${image}`} />
  </Helmet>
}

export default SEO
