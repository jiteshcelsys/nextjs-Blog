import React from 'react'
import style from './layout.module.css'

function Layout({children}) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default Layout
