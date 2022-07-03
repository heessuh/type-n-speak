import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum molestiae quae nisi ab fugiat, provident porro officia alias consectetur praesentium repellendus asperiores? Placeat dicta nulla a dolores, similique, id dignissimos voluptatibus ipsam unde assumenda amet praesentium et obcaecati ipsa esse maiores soluta quibusdam consectetur, perferendis labore eum earum nobis ab.</p>
      <p><Link to='/contact'>Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage

