import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import * as headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
        }
      }
    }
    `)
  return (
    <header className={headerStyles.Header}>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li> <Link to = '/about' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link> </li>
          <li> <Link to = '/contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link> </li>
          <li> <Link to = '/blog' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blogs</Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
