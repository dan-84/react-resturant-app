import { graphql, Link } from 'gatsby'
import React from 'react'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import get from 'lodash/get'
import './gallery_style.scss'

const renderSharpImage = sharpImageNode => {
  /* Example:
  {
      "node": {
        "childImageSharp": {
          "original": {
            "src": "/static/IMG_2462_2-c8b21a05ebd64daed5c0176e0d47d45d.jpg",
            "width": 1024
          },
          "resize": {
            "src": "/static/IMG_2462_2-c8b21a05ebd64daed5c0176e0d47d45d-487e6.jpg",
            "width": 400
          }
        }
      }
    }
  */
  const { original, resize } = sharpImageNode.node.childImageSharp
  return (
    <div className="col-md-3 col-sm-6" key={sharpImageNode.node.id}>
      <div
        className="m-1"
        style={{
          width: '100%',

          paddingTop: '100%',
        }}
      >
        <Link to={original.src}>
          <span
            className="img-square-bg-image"
            style={{ backgroundImage: `url(${resize.src})` }}
          />
        </Link>
      </div>
    </div>
  )
}

const Gallery = ({ data, location }) => {
  const images = get(data, 'allFile').edges
  console.log(images)
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="container-fluid">
        <div className="my-4">
          <div className="row">
            <div className="col-md-12">
              <h2>Gallery de photos</h2>
              <p>Voici quelques photos des lieux</p>
              <div className="row">{images.map(renderSharpImage)}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          id
          childImageSharp {
            original {
              src
              width
            }
            resize {
              src
              width
            }
          }
        }
      }
    }
  }
`
