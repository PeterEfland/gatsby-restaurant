import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="77 main street - Rio de Janeiro, RJ" />
    </HomeHeader>
  </Layout>
)

export default IndexPage
