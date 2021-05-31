import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
const contact = () => {
  return <Layout>
    <SEO title="Contact" description="this is a Contact page"/>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <a href="mailto:issaabed3322@gmail.com">issaabed3322@gmail.com</a>
        <form
  action="https://formspree.io/f/xqkwzwzy"
  method="POST"
>
          <div className="form-group">
            <input name="name" type="text"  placeholder="name" className="form-control"/>
            <input name="email" type="email"  placeholder="email" className="form-control"/>
            <textarea name="message" rows="5" placeholder="message"  className="form-control"></textarea>
            <button type="submit" className="submit-btn btn">submit</button>
          </div>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
