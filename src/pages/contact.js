import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Button, Divider, Card, CardContent, Typography, CardActions } from '@material-ui/core'


const ContactPage = () => (
  <Layout>
    <Card style={{ height: 150, width: "100%"}}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Contact
        </Typography>
        <Typography variant="body1">
          We welcome your feedback, suggestions and questions!
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="mailto: john@sconseycider.com">
          Email Us!
        </Button>
      </CardActions>
    </Card>
  </Layout>
)

export default ContactPage