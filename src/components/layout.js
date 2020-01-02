/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import logo from "../images/logo.png"

import theme from "./theme";
import { ThemeProvider, Container, Button, ButtonGroup, Grid } from "@material-ui/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="root">
    <ThemeProvider theme={theme} >
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          
        }}
      >
        <Container maxWidth="sm">
          <div
            style={{
              paddingBottom: 50
            }}>
            <Grid container  alignContent='center'>
              <Grid item sm={12} justify='center'>
                <div style={{textAlign: 'center'}}>
                <Button component={Link} to={"/"} ><img src={logo} /></Button>
                </div>
              </Grid>
            </Grid>
            <Grid container alignContent='center'>
              <Grid item sm={12} justify='center'>
                <div style={{textAlign: 'center'}}>
                  <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button component={Link} to={"/about"} >What do we do?</Button>
                    <Button component={Link} to={"/artists"} >Artists</Button>
                    <Button component={Link} to={"/contact"} >Contact Us</Button>
                  </ButtonGroup>
                </div>
              </Grid>
            </Grid>
          </div>
          {children}
         
        </Container>
        
      </div>
    </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
