import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 

const ArtistTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapi.artist.Name}</h1>
    <p>{data.strapi.artist.Description}</p>
  </Layout>
)

export default ArtistTemplate

export const query = graphql`
  query ArticleTemplate($id: ID!){
    strapi {
      artist(id:  $id) {
        id, Name, Description
      }
    }
  }
`