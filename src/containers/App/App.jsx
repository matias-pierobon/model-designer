import React from "react"
import { Route } from "react-router-dom"
import Layout from "./Layout"
import { Scheme } from ".."

import "./theme.less"

export default () => (
  <Layout>
    <Route exact path="/" component={Scheme} />
  </Layout>
)
