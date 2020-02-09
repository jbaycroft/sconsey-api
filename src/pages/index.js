import React from 'react'
import { graphql } from 'gatsby'
import { Grid } from '@material-ui/core'
import Layout from '../components/layout'
import Article from '../components/article'

const ArticlesPage = ({ data }) => (
  <Layout>
    <Grid container spacing={2} >
      {
        data.strapi.articles.map(article => (
        <Grid key={article.id} item sm={12}>
          <Article article={article} />
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
    articles(where: {Published: true}, sort: "PublishedDate:desc") {
      id
      Title
      Content
      PublishedDate
      artists {
        id
        Name
        Avatar { url }
      }
      songs {
        Title
        releases {
          Release
          File {
            url
          }
        }
      }
    }
  }
}
`