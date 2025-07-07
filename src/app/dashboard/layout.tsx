import React from 'react'
import DashNav from './DashNav'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      
      <DashNav/>
      {
        children
      }
    </div>
  )
}

export default layout
