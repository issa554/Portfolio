import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiJobs: { nodes: Jobs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={Jobs} title="all projects" />
      </section>
    </Layout>
  )
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
  }
`

export default ProjectsPage