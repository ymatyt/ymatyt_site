import React from "react"
import { Link } from "gatsby-theme-material-ui"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="Error 404: Not found" />
    <Layout>
      <Typography variant="h2">Error 404 (NOT FOUND)</Typography>
      <Typography>
        You just tried to added a page that doesn&apos;t exist... the sadness.
      </Typography>
      <Typography>
        Please check out our home page <Link to="/">here</Link>.
      </Typography>
    </Layout>
  </>
)

export default NotFoundPage
