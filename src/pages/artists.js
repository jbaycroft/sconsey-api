import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Card, CardContent, Typography } from '@material-ui/core'


const ArtistsPage = ({ data }) => (
  <Layout>
    {data.strapi.artists.map(document => (
    <Card key={document.id}>
        <CardContent>
            <Typography variant="h5" component="h2">
                {document.Name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
                {document.Description}
            </Typography>
        <Link to={`/${document.id}`}>View</Link>
        </CardContent>
    </Card>
    ))}
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