import React from 'react'
import { Outlet } from 'react-router-dom'
import { FlexLayout } from '../styles/globalStyles'

const Layout: React.FC = () => {
  return (
    <FlexLayout $flexDirection='column' $align='center' $justify='center'>
      <Outlet />
    </FlexLayout>
  )
}

export default Layout
