import React from 'react'
import { graphql } from 'gatsby'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'
import Layout from '../components/layout'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute } = controls

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
              {article.songs.length > 0 && <Media>
                <div className="media">
                  <div className="media-player">
                    <Player vendor='audio' src={article.songs[0].releases[0].File.url} />
                  </div>
                  <div className="media-controls">
                    <PlayPause />
                    <MuteUnmute />
                  </div>
                </div>
              </Media>}
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
    articles(where: {Published:true}) {
      id
      Title
      Content
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