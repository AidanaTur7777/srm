import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

function Layout({ children }) {
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="container">
        <Navbar />
        <main role="main" className="layout__main">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
