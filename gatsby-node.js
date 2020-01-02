const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getArtists = makeRequest(graphql, `
      query {
        strapi {
          artists {
              id
          }
        }
      }
    `).then(result => {
      console.log(result.data.strapi.artists[0]);
    // Create pages for each article.
    result.data.strapi.artists.forEach((artist) => {
      createPage({
        path: `/${artist.id}`,
        component: path.resolve(`src/templates/artist.js`),
        context: {
          id: artist.id,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getArtists;
};