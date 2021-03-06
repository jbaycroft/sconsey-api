import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core'

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';




const ArtistsPage = ({ data }) => (
  <Layout>
    <Grid container alignItems="center" spacing={2}>
      {data.strapi.artists.map(document => (
        <Grid item sm={6}>
          <Link to={`/${document.id}`} style={{textDecoration: "none", color:"inherit"}}>
            <Card key={document.id} >
                {document.Avatar && <CardMedia
                  style={{height: 0, paddingTop: 250}}
                  image={document.Avatar.url}
                />}
                <CardContent style={{textAlign: "center"}}>
                    <Typography variant="h5" component="h2">
                      {/* {document.Name}</Link> */}
                      {document.Name}
                    </Typography>
                </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Layout>
)

export default ArtistsPage

export const pageQuery = graphql`  
{
  strapi {
    artists(where: {active: true}) {
      id
      Name
      Bio
      Avatar { url }
    }
  }
}
`