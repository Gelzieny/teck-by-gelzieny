import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToContact() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      const links = document.querySelectorAll('a[href="/contact"]')

      links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault()
          const contact = document.querySelector('#contact')
          contact?.scrollIntoView({ behavior: 'smooth' })
        })
      })

      return () => {
        links.forEach(link => {
          link.removeEventListener('click', () => {})
        })
      }
    }
  }, [pathname])

  return null
}
