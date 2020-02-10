import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { 
  Button, 
  Divider, 
  Card, 
  Paper,
  CardContent, 
  Typography, 
  CardActions, 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Song from '../components/song'


const SongsPage = ({ data }) => (
  <Layout>
    <Paper style={{ height: 0, width: "100%"}}>
      {data.strapi.songs.map(song => (
        <Song song={song} />
      ))}
    </Paper>
  </Layout>
)

export default SongsPage

export const pageQuery = graphql`
{
  strapi {
    songs {
      Title
      artists {
        Name
        Avatar {
          url
        }
        id
      }
      recordings {
        Name
        File {
          url
        }
      }
    }
  }
}
`