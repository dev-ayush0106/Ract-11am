import React from 'react'
import Navbar1 from './Navbar1'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store1 from '../Store/store1'

const RootLayout = () => {
  return (
    <div>
      <Provider store={store1}>
      <Navbar1/>
      <main>
        <Outlet/>
      </main>
      </Provider>
    </div>
  )
}

export default RootLayout
