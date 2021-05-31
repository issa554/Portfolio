import React from "react"

const Title = ({title}) => {
  return <div className="section-title">
  <h2>{title ||"defult Title"}</h2>
  <div className="underline">

  </div>
  </div>
}

export default Title
