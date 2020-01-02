import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Button, Divider } from '@material-ui/core'


const ContactPage = ({ data }) => (
  <Layout>
    <h1>
        Contact?
    </h1>
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`  
  query {
    strapi {
      artists {
        id, Name, Description
      }
    }
  }
`