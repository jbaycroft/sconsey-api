import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = ({ data }) => (
  <Layout>
    <h1>
      
    </h1>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query {
    strapi {
      artists {
        id, Name, Description
      }
    }
  }
`