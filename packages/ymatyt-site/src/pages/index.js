import React from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quotes from "../components/quotes"

export default () => (
  <>
    <SEO title="" />
    <Layout>
      <Typography component="section" id="quotes">
        <header>A couple quotes to remind you how amazing you are:</header>
        <Quotes num_quotes={2} />
      </Typography>
    </Layout>
  </>
)
