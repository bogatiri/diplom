import  Navbar  from './_components/navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h=full">
		<Navbar/>
		{children}</div>
}

export default layout