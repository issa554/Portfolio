import React from 'react'
import Title from "./Title"
import SkillItem  from './SkillItem'
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allStrapiSkills {
      nodes {
        name
        persent
      }
    }
  }
`
const Skill = () => {
  const data = useStaticQuery(query)
  const {allStrapiSkills:{nodes:skills}}= data
    return (
        <div className="container-skill skill-bars">
          <style dangerouslySetInnerHTML={{__html: `
        * {
          box-sizing: border-box;
       }
       body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
       }
       h1 {
          text-align: center;
       }
       .container {
          width: 100%;
          background-color: rgb(231, 231, 231);
          border-radius: 20px;
       }
    `}} />
         <Title title="Skill" />
 
        {
  skills.map((skill)=>{
    console.log(skill)
   return <SkillItem key={skill.id} {...skill} />
  })
}

      </div>
    )
}

export default Skill
