import React from 'react'
import { graphql } from 'gatsby'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'
import Layout from '../components/layout'


const ArticlesPage = ({ data }) => (
  <Layout>
    <Grid container spacing={2} >
      {
        data.strapi.articles.map(article => (
        <Grid key={article.id} item sm={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {article.Title}
              </Typography>
              <Typography variant="body1" component="h2">
                  {article.Content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        ))
      }
    </Grid>
  </Layout>
)

export default ArticlesPage

export const pageQuery = graphql`
{
  strapi {
    articles {
      id
      Title
      Content
    }
  }
}
`