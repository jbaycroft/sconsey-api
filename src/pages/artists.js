import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const ArtistsPage = ({ data }) => (
  <Layout>
    <ul>
      {data.strapi.artists.map(document => (
        <li key={document.id}>
          <h2>
            <Link to={`/${document.id}`}>{document.Name}</Link>
          </h2>
          <p>{document.Description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default ArtistsPage

export const pageQuery = graphql`  
  query {
    strapi {
      artists {
        id, Name, Description
      }
    }
  }
`