import React from 'react'
import { 
  Button, 
  Divider, 
  Card, 
  Grid,
  Paper,
  CardContent, 
  Typography, 
  CardActions,
  Tooltip,
  Avatar,
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  TextField} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Media, Player, controls } from 'react-media-player'
const { 
  PlayPause,
  MuteUnmute,
  CurrentTime,
  SeekBar,
  Volume, } = controls




const Song = ({ song }) => (

  <ExpansionPanel>
    <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
    >
      <Typography>{song.Title}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography style={{width: '100%'}}>
      <Divider style={{marginBottom: 20}}/>
        {song.recordings.map(recording => (
          <Typography style={{paddingTop: 25}}>
             {recording && <Media>
                <div className="media">
                    <div className="media-player" >
                      <Player vendor='audio' src={recording.File.url} />
                    </div>
                    <Grid container>
                      <Grid item xs={3} noWrap>
                        {recording.Name}  
                        
                      </Grid>
                      <Grid item xs={5}>
                        <AvatarGroup>
                          {song.artists.map(artist => (
                              <Tooltip title={artist.Name} >
                                <Avatar key={artist.Id} alt={artist.Name} src={artist.Avatar.url} onClick={() => window.location = `/${artist.id}`} />
                              </Tooltip>
                            )
                          )}
                        </AvatarGroup>
                      </Grid>
                      <Grid item xs={4}>
                        <PlayPause className="media-control media-control--play-pause" />
                        <MuteUnmute className="media-control media-control--mute-unmute" />
                        <SeekBar className="media-control media-control--volume-range" />
                        <CurrentTime className="media-control media-control--current-time" />
                      </Grid>
                    </Grid>
                </div>
                </Media>}
                <Divider style={{marginTop: 15}} />
          </Typography> 
        ))}
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

export default Song

