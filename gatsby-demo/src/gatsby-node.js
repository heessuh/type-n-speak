/* const path = require ('path') */

module.exports.onCreateNode = ({node, actions}) => {
  const { createNodeField} = actions

  console.log(JSON.stringify(node, undefined, 4))



   /*  const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    }) */

}