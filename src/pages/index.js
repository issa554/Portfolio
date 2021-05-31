import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import Skill from "../components/Skill"
import Projects from "../components/Projects"
export default ({data}) => {
  const {
    allStrapiJobs: { nodes: jops },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return <Layout>
    <SEO title="Home" description="this is a home page"/>
    <Hero />
    {/* {<Services />} */}
    <Skill />
    <Projects projects={jops} title="featured projects" showLink />
    <Blogs showlink blogs={blogs} title="Blogs" />
     </Layout>
}


export const query = graphql`
  {
    allStrapiJobs {
      nodes {
        github
        id
        description
        title
        url
        Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
    
      }
    }
    
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        
        date(formatString: "MMMM Do,YYYY")
        category
        id
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
  }
  
`