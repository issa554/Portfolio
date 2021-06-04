import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid

import SEO from "../components/SEO"
const About = ({data:{allStrapiAbout:{nodes}}}) => {
  const {title , info , image } = nodes[0]
  return <Layout>
<SEO title="About" description="this is a About page"/>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img " />
        <article className="about-info">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
        
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export default About

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        info
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        title
        
      }
    }
  }
`