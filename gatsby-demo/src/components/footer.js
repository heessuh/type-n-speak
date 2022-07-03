import React from 'react' 
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const year = new Date()

  return (
    <footer>
      <p>Created by {data.site.siteMetadata.author} Copyright &copy; {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer
