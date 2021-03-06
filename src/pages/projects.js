import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projectss from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: Projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projectss projects={Projects} title="all projects" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
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