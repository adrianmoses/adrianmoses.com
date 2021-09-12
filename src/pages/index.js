// @ts-nocheck
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="text">
      <h1 style={{ animationDelay: ".1s" }}>Hi, I'm Adrian Moses.</h1>
      <p style={{ animationDelay: "0.2s" }}>
        I push code to{" "}
        <a target="_blank" href="http://github.com/adrianmoses">
          github
        </a>
        &nbsp;and post words on{" "}
        <a target="_blank" href="http://twitter.com/marsmoses">
          twitter
        </a>
        .
      </p>
      <p style={{ animationDelay: "0.3s" }}>
        I'm often building{" "}
        <a target="_blank" href="https://thrustbase.ai">
          side projects
        </a>{" "}
        or sharing{" "}
        <a target="_blank" href="https://thrust.ml">
          knowledge about machine learning
        </a>
        .
      </p>
      <p style={{ animationDelay: "0.4s" }}>
        I'm also writing songs and making music. If you want to hear about it,{" "}
        <a
          target="_blank"
          href="https://motivated-founder-1209.ck.page/2a12e1a142"
        >
          keep in touch
        </a>
        .
      </p>
    </div>
  </Layout>
)

export default IndexPage
