import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import Image from "gatsby-image"
const ComponentName = ({ data }) => {
  const { body, title, image } = data.blog

  return (
    <Layout>
      <SEO title={title} description={title} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{title}</h1>
          <Image fluid={image.childImageSharp.fluid} className=" blog-img0" />
            <ReactMarkdown source={body} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      body
      title
      image {
        childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
      }
    }
  }
`

export default ComponentName