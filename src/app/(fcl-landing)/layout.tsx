import React from 'react'
import NavBar from './components/nav-bar'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>

      <NavBar/>
      {children}
    </div>
  )
}

export default layout
