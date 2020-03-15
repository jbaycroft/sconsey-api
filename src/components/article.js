import React from 'react'
import { Card, CardContent, Typography, Avatar, CardHeader, Divider, Tooltip } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ReactMarkdown from "react-markdown";  
import { Media, Player, controls } from 'react-media-player'
const { 
  PlayPause,
  MuteUnmute,
  CurrentTime,
  SeekBar,
  Volume, } = controls




const Article = ({ article }) => (
<Card>
  <CardHeader
    avatar={
      <AvatarGroup>
        {article.artists.map(artist => (
            <Tooltip title={artist.Name} >
              <Avatar key={artist.Id} alt={artist.Name} src={artist.Avatar.url} onClick={() => window.location = `/${artist.id}`} />
            </Tooltip>
          )
        )}
      </AvatarGroup>
    }
    title={article.Title}
    subheader={article.PublishedDate.slice(0,10)}
  />
  <CardContent>
      <Typography variant="body1" component="h2">
          <ReactMarkdown source={article.Content} />
      </Typography>
      <Divider style={{marginTop: 20, marginBottom: 20}} />
      {article.recording && <Media>
        <div className="media">
          {article.recording.song.Title + " - " + article.recording.Name}
          <div className="media-player" >
            <Player vendor='audio' src={article.recording.File.url} />
          </div>
          <div className="media-controls" style={{display: "flex"}}>
            <PlayPause className="media-control media-control--play-pause" />
            <MuteUnmute className="media-control media-control--mute-unmute" />
            <SeekBar className="media-control media-control--volume-range" />
            <CurrentTime className="media-control media-control--current-time" />
          </div>
        </div>
      </Media>}
    </CardContent>
  </Card>
)

export default Article

