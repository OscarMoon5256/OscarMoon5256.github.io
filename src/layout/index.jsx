import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { Firework } from '../components/firework'
import { SnowEffect } from '../components/snow-effect'
import { FloatingButton } from '../components/floating-button'
import { Footer } from '../components/footer'

import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <div className="layout-wrapper">
        <SnowEffect />
        <Top className="top" title={title} />
        <FloatingButton />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        <Footer />
        <Firework />
      </div>
    </React.Fragment>
  )
}
