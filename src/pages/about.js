import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Button, Divider } from '@material-ui/core'


const AboutPage = ({ data }) => (
  <Layout>
    <h1>
        About stuff
    </h1>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`  
  query {
    strapi {
      artists {
        id, Name, Description
      }
    }
  }
`