import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid
import SEO from "../components/SEO"
const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
  return <Layout>
    <SEO title="Blog" description="this is a Blog page"/>
    <section className="blog-page">
      <Blogs blogs={blogs} title="Blog Page" />
    </section>
  </Layout>
}

export default Blog

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        slug
        
        date(formatString: "MMMM Do,YYYY")
        category
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
