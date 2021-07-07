import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <div className="about">
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quaerat velit commodi officia veritatis dignissimos eum, fugit deserunt. Qui quo laboriosam inventore sapiente et explicabo, deleniti corporis facere nihil placeat.</p>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </div>
)

export default AboutPage