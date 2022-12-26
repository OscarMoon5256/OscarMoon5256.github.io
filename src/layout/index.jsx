import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { Firework } from '../components/firework'
import { FloatingButton } from '../components/floating-button'
import { Footer } from '../components/footer'

import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <Firework />
      <div className="layout-wrapper">
        <Top title={title} />
        <FloatingButton />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
