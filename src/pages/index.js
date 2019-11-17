import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quotes from "../components/quotes"
import "./common.css"

const IndexPage = () => (
  <Layout>
    <SEO title=""/>
    <section id="quotes">
      <header>A couple quotes to remind you how amazing you are:</header>
      <Quotes num_quotes={2} />
    </section>
  </Layout>
)

export default IndexPage
