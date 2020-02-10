import React, {useState, useEffect} from 'react'
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
  ExpansionPanelDetails, 
  TextField} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Song from '../components/song'
import dataSearch from '../utils/dataSearch'


const SongsPage = ({ data }) => {
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [search, setSearch] = useState('');

  const filterData = () => {
    return dataSearch(search,data.strapi.songs)
  }

  useEffect(() => {
    setFilteredSongs(filterData)
  },[search]);

  return (  <Layout>
      <Paper style={{ height: 0, width: "100%"}}>
        <TextField value={search} onChange={
          (event) => setSearch(event.target.value)
        }/>
        {filteredSongs.map(song => (
          <Song song={song} />
        ))}
      </Paper>
    </Layout>)
}

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