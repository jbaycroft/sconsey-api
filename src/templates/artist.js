import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

var showdown  = require('showdown'),
    converter = new showdown.Converter()

const ArtistTemplate = ({ data }) => (
  <Layout>
    <Card style={{overflowY: 'auto', height: "50vh", width: "100%"}}>
      {data.strapi.artist.Avatar && <CardMedia
          style={{height: 0, paddingTop: 350}}
          image={data.strapi.artist.Avatar.url}
          />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" >
          {console.log(data)}
          {data.strapi.artist.Name}
        </Typography>
          <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.strapi.artist.Bio) }}/>
      </CardContent>
    </Card>
  </Layout>
)

export default ArtistTemplate

export const query = graphql`
  query ArticleTemplate($id: ID!){
    strapi {
      artist(id:  $id) {
        id, Name, Bio, Avatar { url }
      }
    }
  }
`