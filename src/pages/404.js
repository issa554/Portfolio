import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
<SEO title="Error" description="this is a Error page"/>
 <main className="error-page" >
<div className='error-container'>
 <h1> 404 page not found</h1>
 <Link to="/" className="btn">
   Back To Home
 </Link>
</div>
  </main> </Layout> 
}

export default Error
