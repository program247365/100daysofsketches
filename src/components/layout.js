import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <React.Fragment>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(.5),
              width: '100vw',
              textAlign: 'center',
              padding: '.05em',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              100 Days of Sketches
            </Link>
          </h1>
          <hr style={{
            ...scale(0.2),
            marginBottom: '2em',
            width: '75vw',
            textAlign: 'center',
            margin: '0 auto',
            height: '1px',
          }} />
          <p
          style={{
            ...scale(0.2),
            paddingTop: '2em',
            width: '75vw',
            textAlign: 'center',
            margin: '0 auto'
          }}
        >
        Using the awesome <a href="https://linea-app.com/?ref=100daysofsketches.com">Linea Sketch app</a> on my trusty iPad Pro, let's see if I can sketch for 100 days, with the following constraints:
        </p>
        <div
        style={{
          ...scale(0.2),
          width: '75vw',
          margin: '0 auto',
          marginTop: '1em',
          textAlign: 'center'
        }}
      >
          <ol
          style={{
            ...scale(0.1),
            marginBottom: rhythm(.85),
            width: '35vw',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
            <li>
              Using only the pencil tool
            </li>
            <li>Only using the color black</li>
            <li>No extensive layers use, 2 layers max</li>
            <li> No straight line tool, scissors, move tool, or any "assistance" tools used</li>
            <li>Erase, undo/redo tools are ok to use</li>
            <li>Less than 20 minutes spent on each sketch</li>
            <li>No sketch idea can repeat</li>
          </ol>
        </div>
      </React.Fragment>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: rhythm(-1),
            width: '100vw',
            textAlign: 'center',
            padding: '.05em',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            100 Days of Sketches
          </Link>
        </h3>
      )
    }
    return (
      <React.Fragment>
      {header}
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </div>
      </React.Fragment>
    )
  }
}

export default Template
