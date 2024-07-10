/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 * 
     
 */

const path = require('path');
const {createFilePath} = require(`gatsby-source-filesystem`);
const { Component } = require('react');

exports.onCreateNode = ({node,getNode,actions})=>{
  const {createNodeField} = actions
  console.log(node.internal.type);
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node,getNode,basePath:`content`})
    createNodeField({
      node,
      name:`slug`,
      value:slug
    })
  }
}


// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

exports.createPages = async function ({actions,graphql}){
  const {data} = await graphql(
      `
      query{
      allMarkdownRemark{
      edges{
      node{
      fields{
      slug
      }
      }
      }
      }
      }`
  )

  data.allMarkdownRemark.edges.forEach(edge => {
      const {slug} = edge.node.fiels
      actions.createPages({
          path:slug,
          Component:require.resolve(`./src/templates/post.js`),
          context:{slug:slug}
      })
      
  });
}
