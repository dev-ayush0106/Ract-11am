import React, { useContext } from 'react'
import { Theme } from './ThemeProvider'

const ChangeTheme = () => {
    let {theme,toggleTheme}=useContext(Theme)
    console.log(theme);
  return (
    <div>
      
    </div>
  )
}

export default ChangeTheme
