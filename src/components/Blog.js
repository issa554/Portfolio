import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({id , title ,category,image,date,slug}) => {
  return <Link to={`/blogs/${slug}`}>
  <article>
     <Image fluid={image.childImageSharp.fluid} className="blog-img" />
    <div className="blog-card">
      <h4>{title}</h4>
      <div className="blog-footer">
        <p>{category}</p>
        <p>{date}</p>
      </div>
    </div>
  </article>
 </Link>
}

Blog.propTypes = {}

export default Blog
