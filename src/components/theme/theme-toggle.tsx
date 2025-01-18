import { useContext } from 'react'
import { ThemeContext } from './theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <button className="text-2xl" onClick={toggleTheme}>
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  )
}
